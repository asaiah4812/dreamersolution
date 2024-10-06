'use client'

import React, { FormEvent, useRef, useState } from 'react'
import * as Toast from '@radix-ui/react-toast'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import useNewsLetter from '@/lab/components/drawer/hooks/useNewsLetter'

const Footer = () => {
  const container = useRef<HTMLDivElement>(null)
  const [Send] = useNewsLetter()
  const [openPopup, setOpenPopUp] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref)

  const handleNewsLetterData = (e: FormEvent) => {
    e.preventDefault()
    const target = e.target as HTMLFormElement
    const formData = new FormData(target)

    const clientEmail = formData.get('newsletter_email')!

    const data = {
      email: clientEmail.toString(),
    }

    Send(data)
    setOpenPopUp(true)
    target.reset()
    if (setOpenPopUp) {
      setTimeout(() => {
        setOpenPopUp(false)
      }, 2000)
    }
  }

  return (
    <>
      <Toast.Provider>
  <Toast.Root
    className="fixed bottom-4 right-4 z-50 bg-gray-800 text-white rounded-lg shadow-lg p-4 flex items-center justify-between max-w-sm w-full"
    open={openPopup}
    onOpenChange={setOpenPopUp}
  >
    <div className="flex items-center">
      <svg
        className="w-6 h-6 text-green-400 mr-2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M5 13l4 4L19 7"></path>
      </svg>
      <Toast.Title className="text-sm font-medium">
        We Received Your Message, Thanks
      </Toast.Title>
    </div>
    <Toast.Action
      className="ml-4"
      asChild
      altText="Close notification"
    >
      <button className="bg-white text-gray-800 px-3 py-1 rounded-md text-sm font-medium transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
        OK
      </button>
    </Toast.Action>
  </Toast.Root>
  <Toast.Viewport className="fixed bottom-0 right-0 flex flex-col p-4 gap-2 w-full max-w-sm m-0 list-none z-50 outline-none" />
</Toast.Provider>

      <div
        className="relative h-full sm:pt-14 pt-8 bg-[#f7f7f7] text-black"
        ref={container}
      >
        <div className="sm:container px-4 mx-auto">
          <div className="md:flex justify-between w-full">
            <div>
              <h1 className="md:text-4xl text-2xl font-semibold">
                Let&apos;s do great work together
              </h1>
              <div className="pt-2 pb-6 md:w-99">
                <p className="md:text-2xl text-xl py-4">
                  Sign up for our newsletter*
                </p>
                <div className="hover-button relative bg-black flex justify-between items-center border-2 overflow-hidden border-black rounded-full text-white hover:text-black md:text-2xl">
                  <form
                    onSubmit={(e) => handleNewsLetterData(e)}
                    className="relative z-2 grid grid-cols-6 w-full h-full"
                  >
                    <input
                      type="email"
                      name="newsletter_email"
                      className="border-none bg-transparent py-3 px-6 col-span-5"
                      placeholder="Your Email * "
                    />
                    <button
                      type="submit"
                      className="cursor-pointer w-full hover:bg-primaryColor bg-white text-white h-full cols-span-1"
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        className="w-full h-[80%]"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                          fill="#000"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="flex gap-10">
              <ul>
                <li className="text-2xl pb-2 text-black font-semibold">
                  SITEMAP
                </li>
                <li className="text-xl font-medium">
                  <Link href="/">Home</Link>
                </li>
                <li className="text-xl font-medium">
                  <Link href="/about">About us</Link>
                </li>
                <li className="text-xl font-medium">
                  <Link href="/">Our Services</Link>
                </li>
                <li className="text-xl font-medium">
                  <Link href="/projects">Projects</Link>
                </li>
                <li className="text-xl font-medium">
                  <Link href="https://dreamer-blog.vercel.app">Blogs</Link>
                </li>
              </ul>
              <ul>
                <li className="text-2xl pb-2 text-black font-semibold">
                  SOCIAL
                </li>
                <li className="text-xl font-medium">
                  <a
                    href="https://www.linkedin.com/in/asaiah-henson-440bb62a6/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    LinkedIn
                  </a>
                </li>
                <li className="text-xl font-medium">
                  <a
                    href="https://x.com/dreamer_webdev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    Twitter
                  </a>
                </li>
                <li className="text-xl font-medium">
                  <a
                    href="https://www.instagram.com/crestvisual/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    Instagram
                  </a>
                </li>
                <li className="text-xl font-medium">
                  <a
                    href="https://web.facebook.com/asaiah.henson.7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-y-2 md:py-4 border-gray-200">
            <motion.div
              ref={ref}
              className="sm:h-fit h-20 md:px-8 px-2 footer-logo w-full flex items-center"
            >
              {Array.from("DreamerWebdev").map((char, index) => (
                <motion.span
                  key={index}
                  className="text-4xl md:text-6xl xl:text-8xl font-bold text-[#3E7AEE]"
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.6, -0.05, 0.01, 0.99],
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>
          </div>
          <div className="flex md:flex-row flex-col-reverse gap-3 justify-between py-2">
            <span className="font-medium">
              &copy; 2024 DreamerWebdev. All Rights Reserved.
            </span>
            <a href="https://hensonport.vercel.app" className="font-semibold">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
