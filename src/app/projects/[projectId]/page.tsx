import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import GradualSpacing from "@/components/magicui/gradual-spacing";
import ShimmerButton from "@/components/magicui/shimmer-button";
import { Badge } from "@/components/ui/badge";
import { db } from "@/firebase.config";
import { doc, getDoc } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";

interface SingleProductProps {
  params: { projectId: string };
}

const SingleProduct = async ({ params }: SingleProductProps) => {
  const docRef = doc(db, "projects", params.projectId);

  let product: any = {};
  let dataLoading = true;

  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    product = docSnap.data();
    dataLoading = false;
  } else {
    dataLoading = false;
  }
  const tags = [
    product.react ? "React" : null,
    product.sass ? "Sass" : null,
    product.reduxtoolkit ? "Reduxtoolkit" : null,
    product.firebase ? "Firebase" : null,
    product.fakeData ? "FakeData" : null,
    product.api ? "Api" : null,
    product.bootstrap ? "Bootstrap" : null,
    product.css ? "Css" : null,
    product.next ? "Next" : null,
    product.tailwind ? "Tailwind" : null,
    product.typescript ? "Typescript" : null,
  ];
  return (
    <div>
      {dataLoading ? (
        <GradualSpacing
          className="font-display text-center text-4xl max-md:text-3xl max-sm:text-xl font-bold tracking-[-0.1em] text-black dark:text-white md:text-7xl md:leading-[5rem]"
          text="Loading..."
        />
      ) : (
        <div className="flex flex-col items-center justify-center gap-14">
          <GradualSpacing
            className="font-display text-center text-4xl max-md:text-3xl max-sm:text-xl font-bold tracking-[-0.1em] text-black dark:text-white md:text-7xl md:leading-[5rem]"
            text={`${product?.name}`}
          />
          <BlurFade inView delay={0.4}>
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              Preview Image
            </div>
          </BlurFade>
          <BlurFade inView delay={0.5}>
            <Image
              src={product?.img}
              width={2000}
              height={2000}
              className="w-full"
              alt={`${product?.name} - img`}
            />
          </BlurFade>
          {product?.video && (
            <BlurFade inView delay={0.6}>
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Preview Video
              </div>
            </BlurFade>
          )}
          {product?.video && (
            <BlurFade inView delay={0.7} className="w-full h-[350px]">
              <div className="w-full">
                <video
                  src={product?.video}
                  autoPlay
                  loop
                  muted
                  controls
                  className=" mx-auto w-full object-cover object-top" // needed because random black line at bottom of video
                />
              </div>
            </BlurFade>
          )}
          <BlurFade inView delay={0.6}>
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              Description
            </div>
          </BlurFade>
          <BlurFadeText
            className="max-w-[600px] text-justify flex justify-center text-center mx-auto md:text-xl"
            delay={0.4}
            text={product?.p}
          />
          <BlurFade inView delay={0.4}>
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              Tools
            </div>
          </BlurFade>
          {tags && tags.length > 0 && (
            <BlurFade inView delay={0.6}>
              <div className="mt-2 flex flex-wrap gap-3">
                {tags
                  ?.filter((tag) => tag !== null)
                  ?.map((tag) => (
                    <Badge
                      className="px-3 py-2 text-base"
                      variant="secondary"
                      key={tag}
                    >
                      {tag}
                    </Badge>
                  ))}
              </div>
            </BlurFade>
          )}
          <BlurFade inView delay={0.6}>
            <a
              href={product.link}
              target="_blank"
              className="z-10 flex min-h-[16rem] items-center justify-center"
            >
              <ShimmerButton className="shadow-2xl">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  Live Preview
                </span>
              </ShimmerButton>
            </a>
          </BlurFade>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
