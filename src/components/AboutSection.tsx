import React from 'react';
import Markdown from 'react-markdown';
import { DATA } from '@/data/resume';
import dynamic from 'next/dynamic';
const BlurFade = dynamic(() => import('./magicui/blur-fade'));
const BLUR_FADE_DELAY_3 = 0.12; // 0.04 * 3
const BLUR_FADE_DELAY_4 = 0.16; // 0.04 * 4

const AboutSection = React.memo(() => {
  return (
    <section id="about">
      <BlurFade inView delay={BLUR_FADE_DELAY_3}>
        <h2 className="text-xl font-bold">About</h2>
      </BlurFade>
      <BlurFade inView delay={BLUR_FADE_DELAY_4}>
        <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
          {DATA.summary}
        </Markdown>
      </BlurFade>
    </section>
  );
});

AboutSection.displayName = "AboutSection";

export default AboutSection;
