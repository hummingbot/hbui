import { styled, css } from 'twin.macro'
import React from "react";

const primaryColors = {
  birdBody: '#00C2CE',
  backWing: '#00A8B3',
  flutterWingA: '#00858B',
  flutterWingB: '#007E82',
  flutterWingC: '#006E72',
  flutterWingD: '#006063',
}

const terminalColors = {
  birdBody: '#5FFFD7',
  backWing: '#30806B',
  flutterWingA: '#43B397',
  flutterWingB: '#399981',
  flutterWingC: '#30806B',
  flutterWingD: '#266656',
}

const wbColors = {
  birdBody: 'white',
  backWing: 'rgba(255,255,255, 0.2)',
  flutterWingA: 'rgba(255,255,255, 0.35)',
  flutterWingB: 'rgba(255,255,255, 0.3)',
  flutterWingC: 'rgba(255,255,255, 0.25)',
  flutterWingD: 'rgba(255,255,255, 0.1)',
}

const bwColors = {
  birdBody: 'black',
  backWing: 'rgba(0,0,0, 0.2)',
  flutterWingA: 'rgba(0,0,0, 0.35)',
  flutterWingB: 'rgba(0,0,0, 0.3)',
  flutterWingC: 'rgba(0,0,0, 0.25)',
  flutterWingD: 'rgba(0,0,0, 0.1)',
}

const LogoSVG = styled.svg(
  () => [
    ({ size = 'small' }) => logoSizes[size],
    // css`
    //   outline: 1px solid red;
    // `
  ],
)

const tinySize = [
  css`
    width: 27px;
    height: 23px;
  `,
]

const smallSize = [
  css`
    width: 40px;
    height: 32px;
  `,
]

const mediumSize = [
  css`
    width: 55px;
    height: 48px;
  `,
]

const largeSize = [
  css`
    width: 90px;
    height: 80px;
  `,
]

const hugeSize = [
  css`
    width: 140px;
    height: 130px;
  `,
]

const logoSizes = {
  tiny: tinySize,
  small: smallSize,
  medium: mediumSize,
  large: largeSize,
  huge: hugeSize,
}

function HummingbotLogo({...props}) {
  let colors = primaryColors
  if(props.colorStyle === 'terminal') { colors = terminalColors}
  if(props.colorStyle === 'white-black') { colors = wbColors}
  if(props.colorStyle === 'black-white') { colors = bwColors}
  return (
    <LogoSVG
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="31"
      height="28"
      fill="none"
      viewBox="0 0 47 38"
      className={props.className}
    >
      <path
        fill={colors.flutterWingA}
        fillRule="evenodd"
        d="M38.377 20.314c-3.86 1.27-7.732.814-10.28-.92 1.06-2.918 3.93-5.592 7.79-6.862 3.861-1.27 7.732-.814 10.28.919a8.434 8.434 0 01-.29.696c-1.236 2.642-3.95 4.998-7.5 6.167z"
        clipRule="evenodd"
      ></path>
      <path
        fill={colors.flutterWingB}
        fillRule="evenodd"
        d="M37.035 24.621c-4.028-.5-7.348-2.57-8.937-5.23 2.174-2.193 5.889-3.39 9.917-2.89s7.349 2.57 8.938 5.23c-.12.12-.244.238-.372.352-2.212 1.968-5.738 3.01-9.546 2.538z"
        clipRule="evenodd"
      ></path>
      <path
        fill={colors.flutterWingC}
        fillRule="evenodd"
        d="M33.71 28.228c-3.361-2.305-5.389-5.68-5.61-8.783 2.921-.949 6.766-.3 10.128 2.006 3.362 2.305 5.39 5.68 5.61 8.783a8.02 8.02 0 01-.558.16c-2.841.701-6.417-.005-9.57-2.166z"
        clipRule="evenodd"
      ></path>
      <path
        fill={colors.flutterWingD}
        fillRule="evenodd"
        d="M29.538 29.806c-2.09-3.528-2.524-7.456-1.434-10.363 3.043.39 6.258 2.622 8.348 6.15 2.09 3.529 2.525 7.457 1.434 10.364a8.136 8.136 0 01-.754-.133c-2.81-.632-5.676-2.78-7.594-6.017z"
        clipRule="evenodd"
      ></path>
      <path
        fill={colors.backWing}
        fillOpacity="0.84"
        fillRule="evenodd"
        d="M31.525 7.544c-.655 7.41-7.108 12.878-14.414 12.215-.9-.082-1.772-.253-2.607-.505L30.015 0a13.568 13.568 0 011.51 7.544z"
        clipRule="evenodd"
      ></path>
      <path
        fill={colors.birdBody}
        fillRule="evenodd"
        d="M21.534 15.493l-.114-.077c-1.752-1.162-3.717-2.624-5.781-3.094-1.364-.311-2.702-.068-3.82.778-1.002.758-1.248 1.88-2.05 2.767C9.033 16.682 0 20.638 0 20.638l.126.3s8.438-3.78 10.157-3.464c1.719.317 5.195 1.387 7.408 5.888 2.333 4.743 6.832 7.673 9.332 7.311l-2.43 7.04c12.515.607 8.067-10.031 4.208-15.348 1.719-.5 3.386-1.253 4.925-2.076.94-.503 1.821-1.13 2.636-1.847 1.77-1.56 3.228-3.542 4.298-5.592 1.439-2.755 2.716-6.085 3.107-9.208l-22.233 11.85z"
        clipRule="evenodd"
      ></path>
    </LogoSVG>
  );
}

export default HummingbotLogo;
