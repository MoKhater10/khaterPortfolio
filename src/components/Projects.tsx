import React, { useEffect, useState } from 'react'
import BlurFade from './magicui/blur-fade'
import TextRevealByWord from './magicui/text-reveal';
import ProjectCard from './project-card';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '@/firebase.config';
const BLUR_FADE_DELAY = 0.04;

const Projects = ({products}:any) => {
    
  return (
    <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade inView delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="z-10 flex min-h-[16rem] items-center justify-center rounded-lg ">
                  <TextRevealByWord
                    className="text-center"
                    text="Check out my latest work."
                  />
                </div>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {products.slice(0, 4).map((project: any, id:number) => (
              <BlurFade key={project.name} delay={0.3 + id * 0.05} inView>
                <ProjectCard
                  href={project.id}
                  key={project.title}
                  title={project.name}
                  description={project.p}
                  tags={[
                    project.react ? "React" : null,
                    project.sass ? "Sass" : null,
                    project.reduxtoolkit ? "Reduxtoolkit" : null,
                    project.firebase ? "Firebase" : null,
                    project.fakeData ? "FakeData" : null,
                    project.api ? "Api" : null,
                    project.bootstrap ? "Bootstrap" : null,
                    project.css ? "Css" : null,
                    project.next ? "Next" : null,
                    project.tailwind ? "Tailwind" : null,
                    project.typescript ? "Typescript" : null,
                  ]}
                  image={project.img}
                  video={project.video}
                  links={[
                    project.link ? project.link : null,
                    project.git ? project.git : null,
                  ]}
                  dates={""}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Projects