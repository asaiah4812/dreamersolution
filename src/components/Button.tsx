import Link from "next/link"

const Button = ({text, href}:{text:string; href:string;}) => {
    return (
      <>
        <Link href={href} className="group relative inline-flex h-12 items-center text-center justify-center overflow-hidden rounded-md border-2 border-black  font-medium">
          <div className="inline-flex h-12 translate-y-0 items-center justify-center px-6  bg-gradient-to-r  text-black transition duration-500 group-hover:-translate-y-[150%]">
           {text}
          </div>
          <div className="absolute inline-flex h-12 w-full translate-y-[100%] items-center justify-center text-neutral-50 transition duration-500 group-hover:translate-y-0">
            <span className="absolute h-full w-full translate-y-full skew-y-12 scale-y-0 bg-black transition duration-500 group-hover:translate-y-0 group-hover:scale-150"></span>
            <span className="z-10">{text}</span>
          </div>
        </Link>
      </>
    )
  }
  
  export default Button
  