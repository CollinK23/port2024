import React from "react";
import ProjectCard from "./ProjectCard";
import Glow from "./Glow";
import { Spotlight } from "./Stoplight";

export type TProject = {
  title: string;
  image: string;
  description: string;
  tech: string[];
  web?: string;
  github?: string;
};

const projects: TProject[] = [
  {
    title: "GridironInsight",
    image: "/constants/gridironInsight.png",
    description:
      "Web application that assists you in making quicker and more informed decisions in fantasy football.",
    tech: ["React", "Django", "Redux"],
    github: "https://github.com/CollinK23/nflgm",
  },
  {
    title: "Smallsh",
    image: "/constants/smallsh.png",
    description: "Unix shell written in C.",
    tech: ["C", "Bash"],
    github: "https://github.com/CollinK23/smallsh",
  },
  {
    title: "TechPathways",
    image: "/constants/techPathways.png",
    description:
      "Job finder and application management tool for entry-level positions in the tech industry.",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "Pxlblock",
    image: "/constants/pxlblock.png",
    description: "Creative Portfolio Platform",
    tech: ["React", "Redux", "Django", "SQlite"],
    github: "https://github.com/CollinK23/pxlblock",
  },
  {
    title: "EventFlow",
    image: "/constants/eventFlow.png",
    description:
      "Web application that allows users to create and add events to user specific calendars.",
    tech: ["React", "Django", "Redux"],
    github: "https://github.com/CollinK23/eventCalendar",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="w-full min-h-screen py-32 relative -mt-32">
      <Spotlight />
      {/* <div className="flex sm:hidden absolute z-[1] w-[30%] h-[30%] -left-[20%] top-[15%] rounded-full overflow-hidden steel__gradient" /> */}
      {/* <div className="absolute z-[0] w-[60%] h-[60%] -left-[52%] top-[15%] rounded-full overflow-hidden purple__gradient" /> */}
      <div className=" max-w-[1140px] flex justify-center flex-col mx-auto relative z-10 px-8">
        <div className="max-w-[1100px] justify-center text-center w-full mx-auto font-medium text-white font-semibold mb-[50px] text-[48px] px-8">
          Projects
        </div>
        <div className="flex flex-wrap gap-[16px] mx-auto justify-center py-[40px]">
          {projects.map((project: TProject) => {
            return (
              <ProjectCard
                title={project.title}
                image={project.image}
                description={project.description}
                tech={project.tech}
                web={project.web}
                github={project.github}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
