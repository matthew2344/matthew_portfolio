import { BorderedLayout } from "@/components";
import React from "react";
import { CompanyCv, ProjectCv } from "./components";
import { CsiProjects, SbphProjects } from "./constants";

const Experience = () => {
  return (
    <>
      <BorderedLayout
        id="EXPERIENCE"
        className="mx-3 py-2 text-[15px]"
        delay={0.5}
      >
        <p>▮ EXPERIENCE</p>
      </BorderedLayout>
      <BorderedLayout className="mx-3 py-2 text-[15px]" delay={0.6}>
        <div className="flex flex-wrap gap-y-5">
          <div className="flex flex-col w-full lg:w-1/4">
            <h1 className="font-medium">WORK EXPERIENCE</h1>
          </div>
          <div className="flex flex-col w-full md:w-2/5 lg:w-1/4">
            <CompanyCv
              companyName="Springboard PH"
              yearStarted="2024"
              yearEnded="Present"
            />
          </div>
          <div className="flex flex-col w-full md:w-3/5 lg:w-2/4 text-pretty">
            <ProjectCv
              position="FullStack Developer"
              jobDescription="Responsible for development, design, and implementations of functions, working in close communication with tech lead and internal team."
              projects={SbphProjects}
            />
          </div>
          <div className="flex flex-col w-full lg:w-1/4"></div>
          <div className="flex flex-col w-full md:w-2/5 lg:w-1/4">
            <CompanyCv
              companyName="Circuit Solutions Inc."
              yearStarted="2023"
              yearEnded="2024"
            />
          </div>
          <div className="flex flex-col w-full md:w-3/5 lg:w-2/4 text-pretty">
            <ProjectCv
              position="Intern Software Developer"
              jobDescription="Responsible for development, design, and implementations of functions, working in close communication with tech lead and internal team."
              projects={CsiProjects}
            />
          </div>
        </div>
      </BorderedLayout>
    </>
  );
};

export default Experience;
