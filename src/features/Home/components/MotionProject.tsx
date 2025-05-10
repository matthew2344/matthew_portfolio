import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export interface MotionProjectProps {
  name: string;
  description: string;
  link?: string;
  serviceTags: string[];
  image?: string[];
}

const MotionProject = ({
  name,
  description,
  link,
  serviceTags,
  image,
}: MotionProjectProps) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded((prev) => !prev);
  };

  useEffect(() => {
    setExpanded(false);
  }, []);

  const marqueeItems = Array(10).fill(null);

  const renderCarousel = () => {
    const isValidImages = Array.isArray(image) && image.length > 0;

    let finalImages: string[] = [];

    if (isValidImages) {
      while (finalImages.length < 10) {
        finalImages = finalImages.concat(image);
      }
      finalImages = finalImages.slice(0, 10);
    }

    return [1, 2].map((_, index) => (
      <div
        key={index + 1}
        className="flex items-center gap-2 justify-center md:justify-start animate-infinite-scroll"
      >
        {finalImages.length > 0
          ? finalImages.map((imgSrc, idx) => (
              <img
                key={idx + 1}
                src={imgSrc}
                alt={`image-${idx + 1}`}
                className={cn(
                  expanded
                    ? "min-h-[30vh] min-w-[80vh]"
                    : "min-h-[30vh] min-w-[65vh]",
                  "transition-all ease-in-out duration-1000 w-full object-cover border"
                )}
              />
            ))
          : marqueeItems.map((_, idx) => (
              <img
                key={idx + 1}
                src="https://placehold.co/600x600"
                alt={`placeholder-${idx + 1}`}
                className={cn(
                  expanded
                    ? "min-h-[30vh] min-w-[30vh]"
                    : "min-h-[25vh] min-w-[25vh]",
                  "transition-all ease-in-out duration-1000 w-full"
                )}
              />
            ))}
      </div>
    ));
  };

  return (
    <div className="overflow-hidden">
      <button onClick={handleExpand} className="cursor-pointer">
        <div className="w-full inline-flex flex-nowrap py-2">
          {renderCarousel()}
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
                {name}
              </motion.p>
              <motion.p
                animate={{ x: 0 }}
                transition={{ delay: 0.15 }}
                className="text-sm w-fit"
              >
                {description}
              </motion.p>
              <motion.div animate={{ x: 0 }} transition={{ delay: 0.2 }}>
                <Link
                  href={link ?? "#"}
                  target="_blank"
                  className="text-[#6d776e] hover:text-[#6d776e]/60 text-xs w-fit"
                >
                  {link ? "Live site" : "In Development"}
                </Link>
              </motion.div>
              <motion.div
                animate={{ x: 0 }}
                transition={{ delay: 0.25 }}
                className="flex gap-2"
              >
                {serviceTags?.map((service, index) => (
                  <div
                    key={index}
                    className="py-[3px] px-1 rounded text-[#6e6e6e] bg-[#f1f1f1] text-xs"
                  >
                    {service}
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="border-b-2 border-black w-vw mx-3"></div>
    </div>
  );
};

export default MotionProject;
