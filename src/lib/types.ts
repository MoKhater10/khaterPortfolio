// types.ts
export interface Project {
    id: string;
    name: string;
    p: string;
    react?: boolean;
    sass?: boolean;
    reduxtoolkit?: boolean;
    firebase?: boolean;
    fakeData?: boolean;
    api?: boolean;
    bootstrap?: boolean;
    css?: boolean;
    next?: boolean;
    tailwind?: boolean;
    typescript?: boolean;
    img?: string;
    video?: string;
    link?: string;
    git?: string;
    sort: number;
  }
  
  export interface ProjectsProps {
    projects: Project[];
  }
  