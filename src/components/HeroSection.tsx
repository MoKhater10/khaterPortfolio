import React, { memo } from 'react';
import BlurFadeText from './magicui/blur-fade-text';
import BlurFade from './magicui/blur-fade';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { DATA } from '@/data/resume';

const BLUR_FADE_DELAY = 0.04;
const { name, description, avatarUrl, initials } = DATA;

const HeroSection = () => (
  <section id="hero">
    <div className="mx-auto w-full max-w-2xl space-y-8">
      <div className="flex justify-between gap-2">
        <div className="flex flex-1 flex-col space-y-1.5">
          <BlurFadeText
            delay={BLUR_FADE_DELAY}
            className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
            yOffset={8}
            text={`Hi, I'm ${name.split(' ')[0]} 👋`}
          />
          <BlurFadeText
            className="max-w-[600px] md:text-xl"
            delay={BLUR_FADE_DELAY}
            text={description}
          />
        </div>
        <BlurFade delay={BLUR_FADE_DELAY} inView>
          <Avatar className="size-28 border">
            <AvatarImage alt={name} src={avatarUrl} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
        </BlurFade>
      </div>
    </div>
  </section>
);

export default memo(HeroSection);
