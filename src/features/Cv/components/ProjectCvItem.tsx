import Link from "next/link";

export interface ProjectCvItemProps {
  project: string;
  service: string;
  tech: string;
  link?: string;
}

const ProjectCvItem = ({
  project,
  service,
  tech,
  link,
}: ProjectCvItemProps) => {
  return (
    <article className="mt-5">
      <figure className="flex">
        <div className="flex-none border border-e-0 border-dashed w-[3.1875rem] border-black mr-[-1.625rem]"></div>
        <div className="project-container flex-1 flex-col  max-w-full py-[25px]">
          <div className="font-normal mb-1 text-[15px]">{project ?? "N/A"}</div>
          <Link
            href={link ?? "#"}
            {...(link && { target: "_blank" })}
            className=" text-[#6d776e] hover:text-[#6d776e]/60"
          >
            {link ? "Live site" : "In Development"}
          </Link>

          <p className="text-xs border-b mt-[10px] border-black border-dashed w-fit font-normal">
            Services Rendered:
          </p>
          <h1 className="text-[15px] mt-1">{service ?? "N/A"}</h1>

          <p className="text-xs border-b mt-[10px] border-black border-dashed w-fit font-normal">
            Tech Stack:
          </p>
          <h1 className="text-[15px] mt-1 text-pretty">{tech ?? "N/A"}</h1>
        </div>
      </figure>
    </article>
  );
};

export default ProjectCvItem;
