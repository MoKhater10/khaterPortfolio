"use client";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import GradualSpacing from "@/components/magicui/gradual-spacing";
import NumberTicker from "@/components/magicui/number-ticker";
import TextRevealByWord from "@/components/magicui/text-reveal";
import ProjectCard from "@/components/project-card";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import { db } from "@/firebase.config";
import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";

const ProjectsPage = () => {
  const BLUR_FADE_DELAY = 0.04;
  const useGetData = (collectionName: string) => {
    const [data, setdata] = useState([]);
    const collectionRef = collection(db, collectionName);
    const [dataLoading, setdataLoading] = useState(true);

    useEffect(() => {
      setdataLoading(true);
      const getData = async () => {
        // firebase firestore realtime data update
        onSnapshot(collectionRef, (snapshot: any) => {
          setdata(
            snapshot.docs.map((doc: any) => ({ ...doc.data(), id: doc.id }))
          );
          setdataLoading(false);
        });
      };
      getData();
    }, [collectionRef]);
    return { data, dataLoading };
  };
  const { data: getProducts } = useGetData("projects");
  const products = getProducts?.sort((a: any, b: any) => {
    return a.sort - b.sort;
  });
  return (
    <div>
      <div>
        <GradualSpacing
          className="font-display text-center text-4xl max-sm:text-3xl font-bold tracking-[-0.1em]  text-black dark:text-white md:text-7xl md:leading-[5rem]"
          text="My Projects"
        />
        <BlurFadeText
          className="max-w-[600px] my-10 flex justify-center text-center mx-auto md:text-xl"
          delay={BLUR_FADE_DELAY}
          text="I've worked on a variety of projects, from simple websites to complex web applications , from small to large scale. I've worked also with a variety of technologies, including React, Next.js ,Typescript and more."
        />
        <BlurFade delay={BLUR_FADE_DELAY } inView>

        <div className="flex sm:gap-10 gap-2 items-center justify-between">
          <div className=" text-4xl flex flex-col font-medium  text-black dark:text-white">
            <NumberTicker value={products.length} className="text-center" />
            <span className="sm:text-lg text-sm text-center capitalize">Production , Freelance and Personal Projects.</span>
          </div>
          <div className="h-28 w-1 bg-black dark:bg-white"></div>
          <div className=" text-4xl flex flex-col items-center justify-center font-medium  text-black dark:text-white">+
            <p className="sm:text-lg text-sm text-center capitalize">
                Many private dashboards and internal systems .
            </p>
          </div>
        </div>
        </BlurFade>
      </div>
      <section id="skills" className="mt-14">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9} inView>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade
                inView
                key={skill}
                delay={BLUR_FADE_DELAY * 10 + id * 0.05}
              >
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {products.map((project: any, id) => (
              <BlurFade key={project.name} delay={0.2 + id * 0.05} inView>
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
                  video={
                    project.video
                  }
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
    </div>
  );
};

export default ProjectsPage;
