import React from 'react'
import ScrollBaseAnimation from './text-marquee'

function TextAnimation() {
  return (
    <>
      <div className="h-fit xl:h-[500px] mt-5 md:mt-0 grid place-content-center">
        <ScrollBaseAnimation
          delay={2500}
          baseVelocity={-1} // Adjust the baseVelocity to slow down the scrolling speed
          clasname="font-bold tracking-[-0.07em] leading-[90%]"
        >
         At DreamerSolutions Our software solutions are developed by experienced professionals, ensuring high quality and reliability.
        </ScrollBaseAnimation>
        <ScrollBaseAnimation
          delay={2500}
          baseVelocity={1} // Adjust the baseVelocity to slow down the scrolling speed
          clasname="font-bold tracking-[-0.07em] leading-[90%]"
        >
          We understand the budget constraints of students, which is why we offer competitive pricing without compromising on quality.
        </ScrollBaseAnimation>
      </div>
    </>
  )
}

export default TextAnimation
