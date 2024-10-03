import projectData from '../../../lib/project.json';
import Dialog from '@/components/Dialog';
import { Space_Grotesk } from "next/font/google";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from '@/components/ui/tracing-beam';
import { ThreeProps } from '@/lib/interface';
import ModalButton from '@/components/ModalButton';

const space = Space_Grotesk({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin']
})

interface DetailPageProps {
  params: {
    slug: string;
  };
}

const DetailPage: React.FC<DetailPageProps> = ({ params }) => {
  const { slug } = params;

  // Find the project that matches the slug
  const pro: ThreeProps | undefined = projectData.projects.find(project => {
    return project.url.endsWith(`/${slug}`);
  });


  if (!pro) {
    return <div>Project not found for slug: {slug}</div>;
  }

  return (
    <div>
      <TracingBeam className="px-6 py-5">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          <div className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {pro.title}
            </h2>

            <p className={twMerge(space.className, "text-xl mb-4")}>
              {pro.title}
            </p>

            <div className="text-sm prose prose-sm dark:prose-invert">
              {pro.src && (
                <Image
                  src={pro.src}
                  alt={pro.title || "Project image"}
                  height={1000}
                  width={1000}
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              <p className="font-bold">Short Description:</p>
              <p>{pro.shortDesc}</p>
              <p className="font-bold mt-4">Full Description:</p>
              <p className='text-justify'>{pro.desc}</p>
              <p className="font-bold mt-4">Price:</p>
              <p>${pro.price}</p>
              <div className="mt-4">
                <p className="font-bold">Additional Images:</p>
              <Dialog pro={pro}/>
                <div className="flex flex-col items-center space-y-5 md:flex-row space-x-4 mt-2">
                  {[pro.src1, pro.src2, pro.src3].map((src, index) => (
                    <Image
                      key={index}
                      src={src}
                      alt={`${pro.title} image ${index + 1}`}
                      height={200}
                      width={200}
                      className="rounded-lg w-full mb-5 md:mb-1 object-cover"
                    />
                  ))}
                </div>

              </div>
            </div>
          </div>
        </div>
      </TracingBeam>
      <ModalButton/>
    </div>
  );
};

export default DetailPage;