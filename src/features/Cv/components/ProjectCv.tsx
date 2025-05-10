import React from "react";
import ProjectCvItem, { ProjectCvItemProps } from "./ProjectCvItem";

interface ProjectCvProps {
  position: string;
  jobDescription: string;
  projects?: ProjectCvItemProps[];
}

const renderProjects = (projects?: ProjectCvItemProps[]) => {
  if (!projects) return;
  if (projects?.length == 0) return;

  return projects.map((item, index) => (
    <ProjectCvItem key={index + 1} {...item} />
  ));
};

const ProjectCv = ({ position, jobDescription, projects }: ProjectCvProps) => {
  return (
    <>
      <div className="font-medium">{position}</div>
      <div className="pt-[.625rem] pe-5" style={{ unicodeBidi: "isolate" }}>
        {jobDescription}
      </div>
      <div className="mt-5 pt-[1px] pr-[6px] pb-[1px] pl-[6px] bg-black text-white w-fit text-xs leading-5 font-normal">
        Projects Launched:
      </div>

      {renderProjects(projects)}
    </>
  );
};

export default ProjectCv;
