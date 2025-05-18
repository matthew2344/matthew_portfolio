"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Hamburger from "../custom/Hamburger";
import { Clock } from "@/features";
import BorderedLayout from "./BorderedLayout";
import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const pathname = usePathname();
  const [isShow, setIsShow] = useState(false);

  const handleShow = useCallback(() => {
    setIsShow((prev) => !prev);
  }, []);

  return (
    <header className="sticky top-0 z-10 bg-white w-full font-helveticaNeue">
      <nav>
        <BorderedLayout className="mx-3 py-1 relative" delay={0}>
          <div className="flex items-center justify-between">
            <div className="flex">
              <div className="w-5 h-5 bg-black rounded-lg animate-blink me-1"></div>
              <Clock />
            </div>

            <div className="flex gap gap-x-2">
              <Link
                href="/"
                className={`text-[15px] px-1 hover:text-[#6d776e]/60 ${
                  pathname === "/" ? "text-black" : "text-[#6d776e]"
                }`}
              >
                Portfolio
              </Link>

              <Link
                href="/cv"
                className={`text-[15px] px-1 hover:text-[#6d776e]/60 ${
                  pathname === "/cv" ? "text-black" : "text-[#6d776e]"
                }`}
              >
                CV
              </Link>
            </div>
          </div>
        </BorderedLayout>
        <BorderedLayout className="mx-3" delay={0.1}>
          <h1 className="text-3xl  md:text-6xl lg:text-7xl xl:text-9xl my-0 p-0 flex items-center leading-none">
            MATTHEW <div className="flex-1"></div> BUTALID
          </h1>
        </BorderedLayout>
        {pathname !== "/" && (
          <BorderedLayout className="mx-3" delay={0.2}>
            <div className="grid grid-cols-[1fr_1fr_1fr] gap-4 text-[15px] py-[8px]">
              <Link href="/" className="text-[#6d776e] hover:text-[#6d776e]/60">
                Back
              </Link>
              {pathname === "/cv" && (
                <>
                  <p className="text-center">CV</p>
                  <button
                    className="flex justify-end items-center gap-x-2"
                    onClick={handleShow}
                  >
                    INDEX
                    <Hamburger />
                  </button>
                </>
              )}
            </div>
            <AnimatePresence>
              {isShow && (
                <motion.div
                  className="flex flex-col w-full py-[8px] gap-[2px] overflow-hidden"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                    transition: {
                      opacity: { duration: 0.3 },
                      height: { duration: 0.4 },
                    },
                  }}
                  exit={{
                    opacity: 0,
                    height: 0,
                    transition: {
                      opacity: { duration: 0.2 },
                      height: { duration: 0.3 },
                    },
                  }}
                >
                  {["INFO", "EXPERIENCE", "EXPERTISE"].map((item) => (
                    <Link
                      key={item}
                      href={`#${item}`}
                      className="flex items-center justify-end w-full hover:bg-stone-100"
                      onClick={handleShow}
                    >
                      <div className="max-w-[280px] w-full flex items-center justify-between">
                        <span>[+]</span>
                        <span>{item}</span>
                      </div>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </BorderedLayout>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
