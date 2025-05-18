import BorderAnimation from "@/components/custom/BorderAnimation";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <BorderAnimation className="mx-3 text-sm md:text-[15px] py-1" delay={0.3}>
        <p className="font-normal">
          Matthew Andre Butalid is a fullstack developer based in QC, NCR.
        </p>

        <p className="mt-6">
          He is currently working as a fullstack developer at{" "}
          <Link
            href="https://springboard.com.ph/"
            target="_blank"
            className="text-[#6d776e] hover:text-[#6d776e]/60"
          >
            Springboard PH
          </Link>
        </p>
      </BorderAnimation>
      <BorderAnimation
        className=" mx-3 py-2 text-sm md:text-[15px]"
        delay={0.4}
      >
        <div className="flex flex-wrap">
          <div className="lg:w-2/4">
            <p className="flex">
              {"Connect with me on my socials."}{" "}
              <div className="rounded-full w-1.5 h-1.5 bg-[#2d8f29]"></div>
            </p>
            <div className="mt-6 flex items-center gap-x-20">
              <p>
                Inquiries →{" "}
                <Link
                  href="mailto:matthewandrebutalid@gmail.com"
                  className="text-[#6d776e] hover:text-[#6d776e]/60"
                >
                  Email
                </Link>
              </p>
              <p>
                Follow →{" "}
                <Link
                  href="https://www.linkedin.com/in/matthew-butalid/"
                  target="_blank"
                  className="text-[#6d776e] hover:text-[#6d776e]/60"
                >
                  LinkedIn
                </Link>
                ,{" "}
                {/* <Link
                  href=""
                  className="text-[#6d776e] hover:text-[#6d776e]/60"
                >
                  IG
                </Link>
                ,{" "}
                <Link
                  href=""
                  className="text-[#6d776e] hover:text-[#6d776e]/60"
                >
                  Twitter
                </Link> */}
                <Link
                  href="https://www.facebook.com/matthew.butalid.79"
                  target="_blank"
                  className="text-[#6d776e] hover:text-[#6d776e]/60"
                >
                  Facebook
                </Link>
              </p>
            </div>
          </div>
        </div>
      </BorderAnimation>

      <BorderAnimation className="mx-3 py-2 text-sm md:text-[15px]" delay={0.5}>
        <div className="flex">
          <div className="flex flex-col w-1/2 md:w-2/5">
            CAPABILITIES
            <ul className="mt-2">
              {[
                "Website Design",
                "Front-end Development",
                "Back-end Development",
                "UI & Interaction Design",
                "Mobile development",
                "Database design",
              ].map((cap, i) => (
                <li key={i + 1}>{cap}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col w-1/2 md:w-2/5">
            TECHNOLOGIES
            <ul className="mt-2">
              {[
                "React, Nextjs, Vue",
                "Javascript/Typescript ES6+",
                "PHP (Laravel, Codeigniter)",
                "HTML/CSS (TailwindCSS & Bootrstrap)",
                "React Native / Lynx",
                "MySQL, MongoDB",
              ].map((tech, i) => (
                <li key={i + 1}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>
      </BorderAnimation>
    </>
  );
};

export default Hero;
