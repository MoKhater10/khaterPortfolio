import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import { Icons } from "./icons";
import React, { useMemo } from 'react';

interface Props {
  title: string;
  href?: string | null;
  description: string | null;
  dates: string | null;
  tags: readonly (string | null)[];
  link?: string | null;
  image?: string; // Changed 'any' to 'string'
  video?: string | null;
  links?: readonly string[];
  className?: string | null;
}

const ProjectCard: React.FC<Props> = React.memo(({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) => {
  const Media = useMemo(() => video ? (
    <video
      src={video}
      autoPlay
      loop
      muted
      playsInline
      className="pointer-events-none mx-auto h-40 w-full object-cover object-top"
    />
  ) : (
    image && (
      <Image
        src={image}
        alt={title}
        width={1000}
        height={1000}
        className="w-full"
        objectFit="contain"
        loading="lazy"
      />
    )
  ), [video, image, title]);

  const Tags = useMemo(() => tags && tags.length > 0 ? (
    <div className="mt-2 flex flex-wrap gap-1">
      {tags
        .filter((tag) => tag !== null)
        .map((tag) => (
          <Badge
            className="px-1 py-0 text-[10px]"
            variant="secondary"
            key={tag}
          >
            {tag}
          </Badge>
        ))}
    </div>
  ) : null, [tags]);

  const Links = useMemo(() => links && links.length > 0 ? (
    <div className="flex flex-row flex-wrap items-start gap-1">
      {links.length>0&&links?.map((link: string, idx) => (
        <a href={link} key={idx} target="_blank">
          <Badge className="flex gap-2 px-2 py-1 text-[10px]">
            {link.includes("github") ? (
              <>
                <Icons.github className="size-3" />
                <span>GitHub</span>
              </>
            ) : (
              <>
                <Icons.globe className="size-3" />
                <span>Website</span>
              </>
            )}
          </Badge>
        </a>
      ))}
      {href && (
        <a href={`/projects/${href}`}>
          <Badge className="flex gap-2 px-2 py-1 text-[10px]">
            <Icons.view className="size-3" />
            <span>View</span>
          </Badge>
        </a>
      )}
    </div>
  ) : null, [links, href]);

  return (
    <Card
      className={`flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full ${className || ""}`}
    >
      {Media}
      <CardHeader className="px-2">
        <div className="space-y-1">
          <CardTitle className="mt-1 text-base">{title}</CardTitle>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
            {description}
          </Markdown>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-2">
        {Tags}
      </CardContent>
      <CardFooter className="px-2 pb-2">
        {Links}
      </CardFooter>
    </Card>
  );
});

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
