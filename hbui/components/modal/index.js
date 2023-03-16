/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import tw from 'twin.macro'
import React, { Fragment, useState, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import Transition from '../../system/Transition'
import { Button } from '../../elements/buttons'
import { H6, P } from '../../elements/typography'
import { Separator } from '../../elements/layout'

/**
 * HeadlessUI "Dialog (Modal)"
 * https://headlessui.dev/react/dialog
 * Customized for twin.macro
 */

export default function Modal({
  showOpen, // modal state
  clickElement, // JSX - the element to click to open the Modal
  title, // String
  description, // String
  content, // JSX
  options, // Array
  overlayProps, // any React props
  titleProps, // any React props
  descriptionProps, // any React props
  dialogOnClose, // dialog onClose callback
}) {
  let [isOpen, setIsOpen] = useState(showOpen)
  function closeModal() {
    setIsOpen(false)
    dialogOnClose?.()
  }
  function openModal() {
    setIsOpen(true)
  }

  useEffect(() => {
    setIsOpen(showOpen)
  }, [showOpen])

 
  return (
    <div>
      {(showOpen || isOpen) && (
        <Dialog
          tw="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
          open={showOpen || isOpen}
        >
          <div tw="min-h-screen px-4 text-center">
            <Dialog.Overlay
              tw="fixed inset-0 bg-black opacity-50"
              {...overlayProps}
            />
            <CenterAlignmentHack />
            <div tw="inline-block w-full max-w-md py-4 px-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-window border-window shadow-xl text-grey-light-scale-900">
              <Content
                title={title}
                description={description}
                content={content}
                options={options}
                titleProps={titleProps}
                descriptionProps={descriptionProps}
                closeModal={() => {
                  setIsOpen(false)
                  dialogOnClose?.()
                }}
              />
            </div>
          </div>
        </Dialog>
      )}
      {clickElement && (
        /* eslint-disable-next-line */
        <div onClick={() => setIsOpen(!isOpen)} tw="inline-flex">
          {clickElement}
        </div>
      )}
    </div>
  )
}

function Content({
  title,
  description,
  content,
  options,
  titleProps,
  descriptionProps,
  closeModal,
}) {
  if (!options || !options.length || !options[0]) {
    options = [
      {
        callBack: () => closeModal(),
        label: 'Close',
        variant: 'secondary',
      },
    ]
  }
  const handleOption = callBack => {
    if (callBack) {
      callBack()
    }
    closeModal()
  }
  return (
    <Fragment>
      <Dialog.Title as={H6} {...titleProps}>
        {title}
      </Dialog.Title>
      {description && (
        <Dialog.Description
          {...descriptionProps}
          as={P}
          tw="text-tertiary leading-tight"
        >
          {description}
        </Dialog.Description>
      )}
      <Separator tw="my-xs" />
      <div tw="text-sm text-grey-light-scale-500">{content}</div>
      <div tw="mt-8 flex gap-4 justify-end">
        {options.map(option => (
          <Button
            key={option.label}
            onClick={() => handleOption(option.callBack)}
            variant={option.variant || 'default'}
          >
            {option.label || 'Close'}
          </Button>
        ))}
      </div>
    </Fragment>
  )
}

/* This element is to trick the browser into centering the modal contents. */
function CenterAlignmentHack() {
  return (
    <span tw="inline-block h-screen align-middle" aria-hidden="true">
      &#8203;
    </span>
  )
}
const overlayTransitionProps = {
  enter: tw`ease-out duration-300`,
  enterFrom: tw`opacity-0`,
  enterTo: tw`opacity-100`,
  leave: tw`ease-in duration-200`,
  leaveFrom: tw`opacity-100`,
  leaveTo: tw`opacity-0`,
}
const contentTransitionProps = {
  enter: tw`ease-out duration-300`,
  enterFrom: tw`opacity-0 scale-95`,
  enterTo: tw`opacity-100 scale-100`,
  leave: tw`ease-in duration-200`,
  leaveFrom: tw`opacity-100 scale-100`,
  leaveTo: tw`opacity-0 scale-95`,
}
