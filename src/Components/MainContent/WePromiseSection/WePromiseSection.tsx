import { SectionWepromiseData } from "../../Shared/Consts";
import PromiseData from "./PromiseData";

const CommitmentSection = () => {
  return (
    <div className="h-[413px]  bg-section2 text-white">
      <div className="wrapper">
        <p className="text-[40px] leading-[150%] tracking-[0%] font-bold  pt-[77px] text-center">
          We promise
        </p>
        <div className="flex justify-center gap-[100px]">
          {SectionWepromiseData.map((SectionWepromise) => {
            return (
              <PromiseData
                key={SectionWepromise.id}
                promiseData={SectionWepromise}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CommitmentSection;
