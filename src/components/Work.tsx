import React from "react";
import dynamic from "next/dynamic";
const BlurFade = dynamic(() => import("./magicui/blur-fade"));
import { DATA } from "@/data/resume";
import { ResumeCard } from "./resume-card";

const BLUR_FADE_DELAY_5 = 0.2;
const BASE_DELAY = 0.24;

const Work = React.memo(() => {
  return (
    <section id="work">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade inView delay={BLUR_FADE_DELAY_5}>
          <h2 className="text-xl font-bold">Work Experience</h2>
        </BlurFade>
        {DATA.work.map((work, id) => {
          const delay = BASE_DELAY + id * 0.05 * 1.25;
          return (
            <BlurFade key={work.company} inView delay={delay}>
              <ResumeCard
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          );
        })}
      </div>
    </section>
  );
});

Work.displayName = "Work";

export default Work;
