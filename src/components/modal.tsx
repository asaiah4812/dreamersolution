"use client"

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useCallback
} from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'

interface ModalContextProps {
  open: boolean
  setOpen: (open: boolean) => void
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined)

export const useModal = () => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider')
  }
  return context
}

interface FramerModalProps {
  children: ReactNode
  open?: boolean
  setOpen?: (open: boolean) => void
}

export function FramerModal({
  children,
  open: controlledOpen,
  setOpen: controlledSetOpen,
}: FramerModalProps) {
  const [internalOpen, setInternalOpen] = useState(false)
  const open = controlledOpen !== undefined ? controlledOpen : internalOpen
  const setOpen = controlledSetOpen !== undefined ? controlledSetOpen : setInternalOpen

  const handleClose = useCallback(() => setOpen(false), [setOpen])

  useEffect(() => {
    if (open) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.classList.remove('overflow-hidden')
    }
  }, [open, handleClose])

  return (
    <ModalContext.Provider value={{ open, setOpen }}>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-20 flex flex-col items-center justify-center w-full h-screen bg-white/90 backdrop-blur-sm cursor-zoom-out"
            onClick={handleClose}
          >
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl border"
            >
              <button
                className="absolute top-2 right-2"
                onClick={handleClose}
              >
                <X />
              </button>
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </ModalContext.Provider>
  )
}

export function ModalContent({ children }: { children: ReactNode }) {
  return <>{children}</>
}