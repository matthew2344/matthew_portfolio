export interface CompanyCvProps {
  yearStarted?: string;
  yearEnded?: string;
  companyName?: string;
}

const CompanyCv = ({ companyName, yearStarted, yearEnded }: CompanyCvProps) => {
  const renderedTime = (): string => {
    if (yearStarted && !yearEnded) return yearStarted;
    if (!yearStarted && yearEnded) return yearEnded;
    if (!yearStarted && !yearEnded) return "Not Started";
    const rendered: string = `${yearStarted} – ${yearEnded}`;
    return rendered;
  };

  return (
    <>
      <div className="leading-7">
        <span className="mb-[10px]">
          {companyName ?? "N/A"}
          <br />
        </span>
        {renderedTime()}
        <br />
      </div>

      <div className="border-l border-black mt-[30px] flex-1"></div>
    </>
  );
};

export default CompanyCv;
