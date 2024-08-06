// app/cv/page.tsx
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase.config";
import BlurFade from "@/components/magicui/blur-fade";
import Link from "next/link";
import ShimmerButton from "@/components/magicui/shimmer-button";

interface CvData {
  cv?: string;
}

const fetchCvData = async (): Promise<CvData> => {
  try {
    const docRef = doc(db, "cv", "1");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data() as CvData;
    } else {
      console.error("No such document!");
      return {};
    }
  } catch (error) {
    console.error("Error fetching document:", error);
    return {};
  }
};

const Cv = async () => {
  const cv = await fetchCvData();

  return (
    <>
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
              download
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
    </>
  );
};

export default Cv;
