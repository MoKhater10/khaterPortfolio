"use client";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import  ProjectCard  from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import { onSnapshot, collection, doc, getDoc } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import { db } from "../firebase.config";
import TextRevealByWord from "@/components/magicui/text-reveal";
import { MarqueeDemo } from "@/components/AllProjectsCom";
import ShimmerButton from "@/components/magicui/shimmer-button";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import Work from "@/components/Work";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const [cv, setcv] = useState<any>("");

  const docRef = doc(db, "cv", "1");
  useEffect(() => {
    const getProduct = async () => {
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setcv(docSnap.data());
      } else {
        console.log("No such document!");
      }
    };
    getProduct();
  }, []);
  useEffect(() => {
    console.log(cv);
  }, [cv]);
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
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <HeroSection/>
      <AboutSection/>
      <Work/>
      <Education/>
      <Skills/>
      <Projects products={products}  />
      <MarqueeDemo
        projects={products.map((p: any) => {
          return { name: p.name, body: p.p, id: p.id };
        })}
      />
      {cv.cv && (
        <section className="flex flex-col items-center space-y-10 py-20">
          <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
            Resume
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Download my Resume
          </h2>

          <BlurFade inView delay={0.6}>
            <a
              href={cv.cv}
              rel="noopener noreferrer"
              download={cv.cv}
              target="_blank"
              className="z-10 flex items-center justify-center"
            >
              <ShimmerButton className="shadow-2xl">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  Download
                </span>
              </ShimmerButton>
            </a>
          </BlurFade>
        </section>
      )}
      <Contact/>
    </main>
  );
}
