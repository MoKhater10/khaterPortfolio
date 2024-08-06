import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  name: "Mostafa Khater",
  initials: "MO Khater",
  description: "Frontend (React.js / Next.js) Developer @Azzrk",
  summary:
    " I am a Frontend Developer specializing in React.js and Next.js. With extensive experience in HTML, CSS, JavaScript, Typescript , React, and Next.js. I am proficient in SASS, Tailwind CSS, and Webpack, enabling me to build efficient and scalable web applications.",
  avatarUrl: "/me.jpeg",
  skills: [
    "OOP ",
    "SOLID",
    "Javascript",
    "Typescript",
    "React",
    "Next.js",
    "Redux Toolkit",
    "Html",
    "CSS",
    "SASS",
    "Tailwind CSS",
    "React Bootstrap",
    "Webpack",
    "Git",
    "GitHub",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/projects", icon: CodeIcon, label: "Projects" },
  ],
  contact: {
    email: "mostafa.khater17@gmail.com",
    tel: "01272410302",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/MoKhater10",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://eg.linkedin.com/in/mostafakhater10",
        icon: Icons.linkedin,
        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mostafa.khater17@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Azzrk",
      href: "",
      badges: [],
      location: "Hybrid",
      title: "Frontend (React.js / Next.js) Developer",
      logoUrl:
        "https://media.licdn.com/dms/image/D4D0BAQHbb5GYxpevKg/company-logo_200_200/0/1680705952287/azzrkplatform_logo?e=1730332800&v=beta&t=68w5JMjOrigN4SBxZKWp6SmozmgkAuThxlnPffSTWrI",
      start: "Nov 2022",
      end: "Present",
      description:
        "As a Frontend React Developer at Azzrk, I drive the development of high-impact applications using React.js, Next.js, and TypeScript. My role includes:TOOLIIFY: Developed customizable plugins for Salla e-commerce, enabling real-time previews and dynamic code generation. ANHAJ: Created an interactive online programming platform for kids, featuring educational games and secure payment systems. GULFTIX: Contributed to a secure ticketing platform for events, enhancing user experience with responsive design and real-time transactions. INFUENCERS COMPANIES: Built a multi-company website with domain-specific theming, streamlining influencer engagement. Dashboards: Developed fully functional dashboards for influencers, sales, and telesales, featuring advanced data visualization, CSV import/export, and CRUD operations. Contract System: Integrated and customized an open-source project to dynamically generate and edit contracts, providing real-time editing and seamless printing capabilities.",
    },
    {
      company: "Huawei Company",
      href: "",
      badges: [],
      location: "Hybrid",
      title: "Frontend (React.js) Developer",
      logoUrl:"",
      start: "Oct 2021",
      end: "Oct 2022",
      description:
        "As a Frontend React Developer at Huawei, I drive the development of high-impact applications using React.js,",
    },
    {
      company: "Ammam for import and export",
      href: "",
      badges: [],
      location: "Hybrid",
      title: "Frontend (React.js) Developer",
      logoUrl:"",
      start: "June 2021",
      end: "Sep 2021",
      description:
        "As a Frontend React Developer at Ammam for import and export, I drive the development of high-impact applications using React.js,",
    },
    {
      company: "ITI",
      href: "",
      badges: [],
      location: "Hybrid",
      title: "Frontend (React.js) Developer",
      logoUrl:"",
      start: "Apr 2019",
      end: "Jul 2019",
      description:
        "As a Frontend React Developer at ITI, I drive the development of high-impact applications using React.js,",
    },
  ],
  education: [
    {
      school: "Mansoura University",
      degree: "Bachelor’s degree, Computer Science",
      logoUrl: "",
      start: "",
      end: "",
    },
  ],
} as const;
