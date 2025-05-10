import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const MarqueeImage = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded((prev) => !prev);
  };

  useEffect(() => {
    setExpanded(false);
  }, []);

  const marqueeItems = Array(10).fill(null);
  return (
    <div className="overflow-hidden">
      <button onClick={handleExpand} className="cursor-pointer">
        <div className="w-full inline-flex flex-nowrap py-2">
          {[1, 2].map((_, index) => {
            return (
              <ul
                key={index + 1}
                className="flex items-center justify-center md:justify-start [&_li]:mx-2  animate-infinite-scroll"
              >
                {marqueeItems.map((_, index) => (
                  <li
                    key={index + 1}
                    className={`${
                      expanded
                        ? "min-h-[30vh] min-w-[30vh]"
                        : "min-h-[25vh] min-w-[25vh]"
                    } 
                                    transition-all ease-in-out duration-1000 w-full`}
                  >
                    <img
                      src="https://placehold.co/600x600"
                      alt={`index-${index + 1}`}
                      className={`h-full w-full`}
                    />
                  </li>
                ))}
              </ul>
            );
          })}
        </div>
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
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
            className="overflow-hidden"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="flex flex-col gap-y-5 px-2.5 pb-3 w-[600px]"
            >
              <motion.p
                animate={{ x: 0 }}
                transition={{ delay: 0.1 }}
                className="border border-l-0 border-t-0 border-black w-fit text-xs leading-[1.2] pe-1.5"
              >
                PROJECT NAME
              </motion.p>
              <motion.p
                animate={{ x: 0 }}
                transition={{ delay: 0.15 }}
                className="text-sm w-fit"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                saepe quo explicabo recusandae voluptates facere dolore nihil
                officia molestias possimus?
              </motion.p>
              <motion.div animate={{ x: 0 }} transition={{ delay: 0.2 }}>
                <Link
                  href=""
                  className="text-[#6d776e] hover:text-[#6d776e]/60 text-xs w-fit"
                >
                  Live Site
                </Link>
              </motion.div>
              <motion.div
                animate={{ x: 0 }}
                transition={{ delay: 0.25 }}
                className="flex gap-2"
              >
                <div className="py-[3px] px-1 rounded text-[#6e6e6e] bg-[#f1f1f1] text-xs">
                  Service Tag
                </div>
                <div className="py-[3px] px-1 rounded text-[#6e6e6e] bg-[#f1f1f1] text-xs">
                  Service Tag
                </div>
                <div className="py-[3px] px-1 rounded text-[#6e6e6e] bg-[#f1f1f1] text-xs">
                  Service Tag
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="border-b-2 border-black w-vw mx-3"></div>
    </div>
  ) as ReactNode;
};

export default MarqueeImage;
