import React from 'react';
import { DATA } from '@/data/resume';
import { ResumeCard } from './resume-card';
import dynamic from 'next/dynamic';

const BlurFade = dynamic(() => import('./magicui/blur-fade'));

const BLUR_FADE_DELAY_7 = 0.28; // 0.04 * 7
const BASE_DELAY = 0.32; // 0.04 * 8

const Education = React.memo(() => {
  return (
    <section id="education">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade inView delay={BLUR_FADE_DELAY_7}>
          <h2 className="text-xl font-bold">Education</h2>
        </BlurFade>
        {DATA.education.map(({ school, logoUrl, degree, start, end }, id) => {
          const delay = BASE_DELAY + id * 0.05;
          return (
            <BlurFade inView key={school} delay={delay}>
              <ResumeCard
                logoUrl={logoUrl}
                altText={school}
                title={school}
                subtitle={degree}
                period={start ? `${start} - ${end}` : ""}
              />
            </BlurFade>
          );
        })}
      </div>
    </section>
  );
});

Education.displayName = "Education";

export default Education;
