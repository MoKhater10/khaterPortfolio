import React from 'react';
import BlurFade from './magicui/blur-fade';
import Link from 'next/link';

const BLUR_FADE_DELAY = 0.04;

const Contact: React.FC = () => {
  return (
    <section id="contact">
      <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
        <BlurFade inView delay={BLUR_FADE_DELAY * 16}>
          <div className="space-y-3">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              Contact
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Get in Touch
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl lg:text-base xl:text-xl">
              Want to chat? Just shoot me a direct message on{" "}
              <a href="https://wa.me/+201272410302" className="text-blue-500 hover:underline">
                Whatsapp
              </a>{" "}
              or on my{" "}
              <a href="mailto:mostafa.khater17@gmail.com" className="text-blue-500 hover:underline">
                Email
              </a>{" "}
              and I&apos;ll respond whenever I can. I will ignore all soliciting.
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default Contact;
