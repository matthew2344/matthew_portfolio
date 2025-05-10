import { BorderedLayout } from "@/components";
import Link from "next/link";
import { SiCredly, SiUdemy } from "react-icons/si";

const Expertise = () => {
  return (
    <>
      <BorderedLayout
        id="EXPERTISE"
        className="mx-3 py-2 text-[15px]"
        delay={0.7}
      >
        <p>▮ EXPERTISE</p>
      </BorderedLayout>
      <BorderedLayout className="mx-3 py-2 text-[15px]" delay={0.8}>
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row space-y-2">
            <div className="w-full md:w-1/4">Tech Stack:</div>
            <div className="w-full md:w-1/4">
              React, Next, Vue, React Native, Capacitor.js, Laravel,
              Codeiginiter, Tailwindcss, MySQL, MongoDB, Tanstack Suite, Redux
            </div>
          </div>
          <div className="flex flex-col md:flex-row space-y-2">
            <div className="w-full md:w-1/4">Certifications:</div>
            <div className="flex flex-wrap gap-x-2 w-full md:w-1/4">
              <Link
                href="https://www.credly.com/users/matthew-andre-butalid"
                target="_blank"
                className="bg-[#ff6b00] text-white px-2 flex items-center leading-3"
              >
                <SiCredly size={28} className="p-0" />
              </Link>
              <Link
                href="https://www.udemy.com/certificate/UC-5b50a3bc-b7de-4f3e-bc0a-6b9f34ead500/"
                target="_blank"
                className="bg-[#6d28d2] flex items-center py-0 px-2 text-white text-xs rounded-lg leading-3"
              >
                <SiUdemy className="text-white p-0 me-1" />
                React - The Complete Guide 2025 (incl. Next.js, Redux)
              </Link>
            </div>
          </div>
        </div>
      </BorderedLayout>
    </>
  );
};

export default Expertise;
