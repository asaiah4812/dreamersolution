'use client'

import React, { useState } from 'react'
import { FramerModal, ModalContent } from './modal'

const ModalButton: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="text-center">
      <button
        onClick={() => setModalOpen(true)}
        className="inline-flex h-12 animate-background-shine items-center justify-center rounded-md border-2 border-[#c0c6fc] bg-[linear-gradient(110deg,#3d5af1,45%,#5471ff,55%,#3d5af1)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50"
      >
        Buy Software
      </button>

      <FramerModal open={modalOpen} setOpen={setModalOpen}>
        <ModalContent>
          <div className="flex flex-col space-y-1.5 text-center sm:text-left">
            <h2 className="text-lg font-semibold leading-none tracking-tight">
              Make Payment Here
            </h2>
            <p className="text-sm text-muted-foreground">
              Make Payment to this Account Number
            </p>
            <span className="font-light text-sm">
              After Making the transfer make a screen shot of Your payment and send to this Whatsapp number &ldquo;<span className="font-medium">09036804525</span>&rdquo;
            </span>
          </div>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="account" className="text-sm font-medium leading-none text-right">
                Account
              </label>
              <input
                className="flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 col-span-3"
                id="account"
                defaultValue="7039256612"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="bank" className="text-sm font-medium leading-none text-right">
                Bank
              </label>
              <input
                className="flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 col-span-3"
                id="bank"
                defaultValue="Opay Bank"
              />
            </div>
          </div>
          <div className="mt-4">
            <button
              onClick={() => setModalOpen(false)}
              className="w-full p-3 bg-black dark:bg-white text-white"
              type="button"
            >
              Got it, thanks!
            </button>
          </div>
        </ModalContent>
      </FramerModal>
    </div>
  )
}

export default ModalButton