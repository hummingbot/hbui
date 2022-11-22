const fs = require('fs')
const axios = require('axios')
const Color = require('color')
const _ = require('lodash')

// get values from env
const { config } = require('dotenv');
config();
const FIGMA_API_TOKEN = process.env.FIGMA_API_TOKEN
const fileId = process.env.FIGMA_FILE_ID

const getFormattedObjectValue = function(obj, valueProperty) {
  const objNameArray = obj.name.split('/')
  let result = {}
  const createdObjects = []
  for (var i = objNameArray.length - 1; i >= 0; i--) {
    const newObject = {}
    if (i === objNameArray.length - 1) {
      newObject[objNameArray[i]] = obj[valueProperty]
    } else {
      newObject[objNameArray[i]] = createdObjects.pop()
    }
    createdObjects.push(newObject)
    result = {
      ...result,
      ...newObject
    }
  }
  const output = {}
  output[objNameArray[0]] = result[objNameArray[0]]
  return output
}

async function getDesignTokens(url = '', data = {}) {
  
  console.log('HBUI ::: Fetching Figma document...')

  const res = await axios.get(`https://api.figma.com/v1/files/${fileId}/styles`, {
    headers: { 'X-FIGMA-TOKEN': FIGMA_API_TOKEN}
  })
  const styleNodeIds = []
  const types = []
  let styleNodeIdsString = ''
  const stylesData = []
  
  // step 1 - grab references to the styles we are interested in
  for (var i = 0; i <= res.data.meta.styles.length - 1; i++) {
    const newType = res.data.meta.styles[i].style_type
    // grab only TEXT and FILL types
    if (newType === 'FILL' || newType === 'TEXT' || newType === 'EFFECT') {
      // generate string array of ids
      if (i !== 0) { styleNodeIdsString = styleNodeIdsString + ',' }
      styleNodeIdsString = styleNodeIdsString + res.data.meta.styles[i].node_id
      // store id / type references for use in step 2
      stylesData.push({
        id: res.data.meta.styles[i].node_id,
        type: res.data.meta.styles[i].style_type,
      })
    }
  }
  
  console.log('HBUI ::: Found ' + res.data.meta.styles.length + ' styles.')
  console.log('HBUI ::: Picking up ' + stylesData.length + ' styles.')
  console.log('HBUI ::: Fetching styles data...')
    
  const res2 = await axios.get(`https://api.figma.com/v1/files/${fileId}/nodes?ids=${styleNodeIdsString}`, {
    headers: { 'X-FIGMA-TOKEN': FIGMA_API_TOKEN }
  })

  console.log('HBUI ::: Processing styles...')

  // step 2 - generate clean array of styles
  const nodes = res2.data.nodes
  const cleanObjects = []

  const cleanColorObjects = []
  const cleanTextObjects = []
  const cleanEffectObjects = []
  for (var i = 0; i < stylesData.length; i++) {
    const currentNodeId = stylesData[i].id
    let currentNodeType = stylesData[i].type
    if (currentNodeType === 'FILL') { currentNodeType = 'COLOR'}
    const currentNodeData = nodes[currentNodeId].document
    const currentNodeName = currentNodeData.name

    const newObject = {
      id: currentNodeId,
      type: currentNodeType,
      name: currentNodeName
    }
    if (currentNodeType === 'COLOR') {
      const r = parseInt(currentNodeData.fills[0].color.r * 255)
      const g = parseInt(currentNodeData.fills[0].color.g * 255)
      const b = parseInt(currentNodeData.fills[0].color.b * 255)
      const color = Color({r, g, b})
      newObject.color = color.hex()
      cleanColorObjects.push(newObject)
    } else if (currentNodeType === 'TEXT') {
      newObject.fontFamily = currentNodeData.style.fontFamily
      newObject.fontWeight = currentNodeData.style.fontWeight
      newObject.fontSize = currentNodeData.style.fontSize
      newObject.letterSpacing = currentNodeData.style.letterSpacing
      newObject.lineHeightPx = currentNodeData.style.lineHeightPx
      newObject.lineHeightPercent = currentNodeData.style.lineHeightPercent
      newObject.lineHeightPercentFontSize = currentNodeData.style.lineHeightPercentFontSize
      newObject.lineHeightUnit = currentNodeData.style.lineHeightUnit
      cleanTextObjects.push(newObject)
    } else if (currentNodeType === 'EFFECT') {
      let shadowValue = ''
      for (var sh = 0; sh < currentNodeData.effects.length; sh++) {
        let fx = currentNodeData.effects[sh]
        if (fx.type === 'DROP_SHADOW') {
          const newShadow = `${fx.offset.x}px ${fx.offset.y}px ${fx.radius}px ${fx.spread || 0}px rgba(${fx.color.r},${fx.color.g},${fx.color.b},${fx.color.a.toFixed(2)})`
          if (shadowValue !== '') {
            shadowValue = shadowValue + ','
          }
          shadowValue = shadowValue + newShadow
        }
      }

      newObject.shadow = shadowValue
      cleanEffectObjects.push(newObject)
    }

    // assign clean object to current position
    cleanObjects.push(newObject)
  }

  // process shadows
  let shadowsData = {}
  for (var sss = 0; sss < cleanEffectObjects.length; sss++) {
    const obj = cleanEffectObjects[sss]
    let newShadowObject = getFormattedObjectValue(obj, 'shadow')
    shadowsData = _.merge(shadowsData, newShadowObject)
  }

  // process colors
  let colorData = {}
  for (var i = 0; i < cleanColorObjects.length; i++) {
    const obj = cleanColorObjects[i]
    let newColorObject = getFormattedObjectValue(obj, 'color')
    colorData = _.merge(colorData, newColorObject)
  }

  // process text
  const textData = {}
  textData.fontSize = {}
  for (var t = 0; t < cleanTextObjects.length; t++) {
    const txtObj = cleanTextObjects[t]
    textData.fontSize[txtObj.name] = `${txtObj.fontSize / 16}rem`
  }

  const fileRes = await axios.get(`https://api.figma.com/v1/files/${fileId}`, {
    headers: { 'X-FIGMA-TOKEN': FIGMA_API_TOKEN}
  })

  let spacingsObject = {}
  const spacingsArray = []
  let breakpointsObject = {}
  const breakpointsArray = []
  for (var i = 0; i < fileRes.data.document.children.length; i++) {
    const documentChild = fileRes.data.document.children[i]
    if (documentChild.type === 'CANVAS' && documentChild.name.toLowerCase() === 'spacing') {
      const spacingsCanvas = documentChild
      for (var s = 0; s < spacingsCanvas.children.length; s++) {
        const spacingChild = spacingsCanvas.children[s]
        if (spacingChild.type === 'FRAME' && spacingChild.name.toLowerCase() === 'spacing') {
          for (var ss = 0; ss < spacingChild.children.length; ss++) {
            const spacingInnerChild = spacingChild.children[ss]
            if (spacingInnerChild.type === 'RECTANGLE') {
              spacingsArray.push(spacingInnerChild.absoluteBoundingBox.width)
              spacingsObject[spacingInnerChild.name] = `${spacingInnerChild.absoluteBoundingBox.width}px`
            }
          }
        }
      }
    } else if (documentChild.type === 'CANVAS' && documentChild.name.toLowerCase() === 'breakpoints') {
      const breakpointsCanvasChildren = documentChild.children
      for (var b = 0; b < breakpointsCanvasChildren.length; b++) {
        if (breakpointsCanvasChildren[b].type === 'FRAME') {
          breakpointsArray.push(breakpointsCanvasChildren[b].absoluteBoundingBox.width)
          breakpointsObject[breakpointsCanvasChildren[b].name] = `${breakpointsCanvasChildren[b].absoluteBoundingBox.width}px`
        }
      }
    }
  }

  console.log('HBUI ::: Collected ' + cleanColorObjects.length + ' color styles.')
  console.log('HBUI ::: Collected ' + cleanTextObjects.length + ' text styles.')
  console.log('HBUI ::: Collected ' + spacingsArray.length + ' spacings.')
  console.log('HBUI ::: Collected ' + breakpointsArray.length + ' breakpoints.')
  console.log('HBUI ::: Creating files...')

  const finalDataObject = {
    text: textData,
    spacing: spacingsObject,
    breakpoints: breakpointsObject,
    shadows: shadowsData,
    colors: colorData
  }

  fs.writeFileSync('./hbui/tokens/index.json', JSON.stringify(finalDataObject, null, 2))
}

getDesignTokens()
  .then(() => {
    console.log('HBUI ::: Design tokens saved.');
  });
