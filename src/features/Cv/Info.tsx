import { BorderedLayout } from "@/components";
import Link from "next/link";

const Info = () => {
  return (
    <>
      <BorderedLayout id="INFO" className="mx-3 py-2 text-[15px]" delay={0.3}>
        <p>▮ INFO</p>
      </BorderedLayout>
      <BorderedLayout className="mx-3 py-2 text-[15px]" delay={0.4}>
        <div className="flex flex-wrap w-full">
          <p className="w-full lg:w-1/4 pb-[30px]">MATTHEW ANDRE M. BUTALID</p>
          <p className="w-2/5 lg:w-1/4">DESIGN / DEVELOPMENT / SOFTWARE</p>
          <div className="w-3/5  lg:w-2/4 flex flex-col gap-0 text-[#6d776e]">
            <Link
              href="mailto:matthewandrebutalid@gmail.com"
              className=" leading-5"
            >
              matthewandrebutalid@gmail.com
            </Link>
            <Link
              href="mailto:matthewandrejank@gmail.com"
              className=" leading-5"
            >
              matthewandrejank@gmail.com
            </Link>
          </div>
        </div>
      </BorderedLayout>
    </>
  );
};

export default Info;
