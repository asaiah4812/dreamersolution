// thanks to maximeheckel
import React from 'react'
import Image from 'next/image'
import { TabsBtn, TabsContent, TabsProvider } from './tab'
import Link from 'next/link'

function Tab() {
  return (
    <div className="border bg-white/1 backdrop-blur-sm rounded-md p-4 relative">
      <TabsProvider defaultValue={'design'}>
        <div className="flex justify-center mt-2">
          <div className="flex items-center w-fit bg-gray-200 p-1 text-black rounded-md border">
            <TabsBtn value="design">
              <span className="relative text-xs sm:text-sm md:text-md z-[2] uppercase">Portfolio</span>
            </TabsBtn>
            <TabsBtn value="collaborate">
              <span className="relative text-xs sm:text-sm md:text-md z-[2] uppercase">CodeAcademy</span>
            </TabsBtn>
            <TabsBtn value="share">
              <span className="relative text-xs sm:text-sm md:text-md z-[2] uppercase">CryptoApp</span>
            </TabsBtn>
            <TabsBtn value="publish">
              <span className="relative text-xs sm:text-sm md:text-md z-[2] uppercase">publish</span>
            </TabsBtn>
          </div>
        </div>

        <TabsContent value="design">
          <Link href={'https://hensonport.vercel.app'} target='_blank' className="w-full">
            <Image
              src={'/portfolio.png'}
              width={1000}
              height={1000}
              alt="Portfolio preview"
              className="w-[850px] object-cover h-full mx-auto rounded-md"
            />
          </Link>
        </TabsContent>
        <TabsContent value="collaborate">
          <Link href={'https://dreameracademy.vercel.app'} target='_blank' className="w-full">
            <Image
              src={'/image.png'}
              width={1000}
              height={1000}
              alt="CodeAcademy preview"
              className="w-[850px] object-cover h-full mx-auto rounded-md"
            />
          </Link>
        </TabsContent>
        <TabsContent value="share">
          <Link href={'https://www.figma.com/proto/xJNhFErimwkotAyJtBGgeB/Backspace-Cash?page-id=0%3A1&node-id=11-2&starting-point-node-id=11%3A2&t=nOFqjT7d47vpEKdn-1'} target='_blank' className="w-full">
            <Image
              src={'/crypto.png'}
              width={1000}
              height={1000}
              alt="CryptoApp preview"
              className="w-[850px] object-cover h-full mx-auto rounded-md"
            />
          </Link>
        </TabsContent>
        <TabsContent value="publish">
          <Link href={'https://dreamer-blog.vercel.app'} target='_blank' className="w-full">
            <Image
              src={'/blog.png'}
              width={1000}
              height={1000}
              alt="Blog preview"
              className="w-[850px] object-cover h-full mx-auto rounded-md"
            />
          </Link>
        </TabsContent>
      </TabsProvider>
    </div>
  )
}

export default Tab