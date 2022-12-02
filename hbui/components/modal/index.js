/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import tw from 'twin.macro'
import React, { Fragment, useState } from 'react'
import { Dialog } from '@headlessui/react'
import Transition from '../../system/Transition'
import { Button } from '../../elements/buttons'
import { H6, P } from '../../elements/typography'
import { Separator } from '../../elements/layout'

/**
 * HeadlessUI "Dialog (Modal)"
 * Customized for twin.macro + typescript
 * https://headlessui.dev/react/dialog
 */

export default function Modal({
  children,
  dialogProps,
  contentProps,
  dialogOverlayProps,
  titleProps,
  descriptionProps,
}) {
  let [isOpen, setIsOpen] = useState(false)
  function closeModal() {
    setIsOpen(false)
  }
  function openModal() {
    setIsOpen(true)
  }
  function handleChildenKeyDown(e) {
    console.log('e', e)
    console.log('e.target.key', e.target.key)
  }

  return(
    <div>
      { isOpen &&
        <Dialog
          tw="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
          open={isOpen}
          {...dialogProps}
        >
          <div tw="min-h-screen px-4 text-center">
            <Dialog.Overlay
              tw="fixed inset-0 bg-black opacity-50"
              {...dialogOverlayProps}
            />
            <CenterAlignmentHack />
            <div tw="inline-block w-full max-w-md py-4 px-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-window border-window shadow-xl text-grey-light-scale-900">
              <Content
                {...contentProps}
                titleProps={titleProps}
                descriptionProps={descriptionProps}
                closeModal={() => setIsOpen(false)}
              />
            </div>
          </div>
        </Dialog>
      }
      {/* eslint-disable-next-line */}
      <div onClick={ () => setIsOpen(!isOpen) } tw='inline-flex'>
        {children}
      </div>
    </div>
  )
}

function Content({
  title,
  subtitle,
  content,
  closeModal,
  closeLabel,
  closeLabelB,
  titleProps,
  descriptionProps,
  closeLabelVariant,
  closeLabelBVariant,
  closeLabelCallback,
  closeLabelBCallback,
}) {
  const handleButtonA = () => {
    closeModal()
    if (closeLabelCallback) {
      closeLabelCallback()
    }
  }
  const handleButtonB = () => {
    closeModal()
    if (closeLabelBCallback) {
      closeLabelBCallback()
    }
  }
  return (
    <Fragment>
      <Dialog.Title
        as={H6}
        {...titleProps}
      >
        {title}
      </Dialog.Title>
      { subtitle &&
        <Dialog.Description {...descriptionProps} as={P} tw='text-tertiary leading-none'>
          {subtitle}
        </Dialog.Description>
      }
      <Separator tw='my-xs' />
      <div tw="text-sm text-grey-light-scale-500">{content}</div>
      <div tw="mt-8 flex gap-4 justify-end">
        { closeLabelB &&
          <Button
            onClick={handleButtonB}
            variant={closeLabelBVariant || 'secondary'}>
            {closeLabelB}
          </Button>
        }
        <Button
          onClick={handleButtonA}
          variant={closeLabelVariant || 'success'}>
          {closeLabel}
        </Button>
      </div>
    </Fragment>
  )
}
function Trigger({ label, openModal }) {
  return (
    <button
      type="button"
      onClick={openModal}
      tw="px-4 py-2 text-sm font-medium text-white bg-black bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:(ring-2 ring-white ring-opacity-75)"
    >
      {label}
    </button>
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
