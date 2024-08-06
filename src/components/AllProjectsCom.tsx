import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import { Button } from "./ui/button";
import BlurFade from "./magicui/blur-fade";
import Link from "next/link";

const arrayOfImgs = [
  "https://avatar.vercel.sh/jack",
  "https://avatar.vercel.sh/jill",
  "https://avatar.vercel.sh/john",
  "https://avatar.vercel.sh/jane",
  "https://avatar.vercel.sh/jenny",
  "https://avatar.vercel.sh/james",
];

const ReviewCard = ({
  img,
  name,
  body,
  id,
}: {
  img: string;
  name: string;
  body: string;
  id: number;
}) => {
  return (
    <a href={`/projects/${id}`}>
      <figure
        className={cn(
          "relative h-[300px] w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
          // light styles
          "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
          // dark styles
          "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
        )}
      >
        <div className="flex flex-row items-center gap-2">
          <img
            className="rounded-full"
            width="15"
            height="15"
            alt=""
            src={img}
          />
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium dark:text-white capitalize">
              {name}
            </figcaption>
            {/* <p className="text-xs font-medium dark:text-white/40">{username}</p> */}
          </div>
        </div>
        <blockquote className="mt-2 text-sm">
          {body.slice(0, 320)}
          {body.length > 320 ? (
            <>
              <span> ... </span>
              <span className="text-blue-500">read more</span>
            </>
          ) : (
            ""
          )}
        </blockquote>
      </figure>
    </a>
  );
};

export function MarqueeDemo({ projects }: { projects: any }) {
  // console.log(projects)
  const firstRow = projects.slice(0, projects.length / 2);
  const secondRow = projects.slice(projects.length / 2);
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review: any, i: any) => (
          <ReviewCard
            key={i}
            name={review.name}
            body={review.body}
            img={arrayOfImgs[i % arrayOfImgs.length]}
            id={review.id}
          />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review: any, i: any) => (
          <ReviewCard
            key={i}
            name={review.name}
            body={review.body}
            img={arrayOfImgs[i % arrayOfImgs.length]}
            id={review.id}
          />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      <BlurFade inView delay={0.5}>
        <Button asChild className="capitalize mt-10">
          <a href="/projects">See All my work</a>
        </Button>
      </BlurFade>
    </div>
  );
}
