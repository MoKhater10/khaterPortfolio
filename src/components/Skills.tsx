import React from 'react';
import { DATA } from '@/data/resume';
import { Badge } from './ui/badge';
import dynamic from 'next/dynamic';

const BlurFade = dynamic(() => import('./magicui/blur-fade'));

const BLUR_FADE_DELAY_9 = 0.36; // 0.04 * 9
const BASE_DELAY = 0.4; // 0.04 * 10

const Skills = React.memo(() => {
  return (
    <section id="skills">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY_9} inView>
          <h2 className="text-xl font-bold">Skills</h2>
        </BlurFade>
        <div className="flex flex-wrap gap-1">
          {DATA.skills.map((skill, id) => {
            const delay = BASE_DELAY + id * 0.05;
            return (
              <BlurFade inView key={skill} delay={delay}>
                <Badge>{skill}</Badge>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
});

Skills.displayName = "Skills";

export default Skills;
