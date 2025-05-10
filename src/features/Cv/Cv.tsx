"use client";

import Info from "./Info";
import Experience from "./Experience";
import Expertise from "./Expertise";

const Cv = () => {
  return (
    <div className="font-helveticaNeue leading-5">
      <Info />

      <Experience />

      <Expertise />
    </div>
  );
};

export default Cv;
