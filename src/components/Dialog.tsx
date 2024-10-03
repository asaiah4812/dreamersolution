import { MediaModal } from "./image-modal";


export default function Dialog({pro}:any) {
  return (
    <div className="relative w-[95%] md:w-[80%] xl:w-[60%] mx-auto h-full">
      <div className="grid md:grid-cols-2 gap-2 h-full">
        <MediaModal
          imgSrc={
            pro.src
          }
        />
        <MediaModal
          imgSrc={
            pro.src2
          }
        />
      </div>
    </div>
  )
}
