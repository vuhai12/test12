import { SectionWepromiseData } from "../Shared/Consts";

const CommitmentSection = () => {
  return (
    <div>
      <div className="h-[413px]  bg-section2 text-white">
        <div className="wrapper">
          <p className="text-[40px] leading-[150%] tracking-[0%] font-bold  pt-[77px] text-center">
            We promise
          </p>
          <div className="flex justify-center gap-[100px]">
            {SectionWepromiseData.map((SectionWepromise) => {
              return (
                <div className="w-[288px]" key={SectionWepromise.id}>
                  <div className="flex h-full items-center gap-3">
                    <img
                      src={SectionWepromise.img}
                      className="w-[80px] h-[80px]"
                    />
                    <div>
                      <p className="text-[48px] font-semibold leading-[150%] tracking-[0%]">
                        {SectionWepromise.title}
                      </p>
                      <p className="text-[20px] font-bold leading-[130%] tracking-[0%]">
                        {SectionWepromise.heading}
                      </p>
                    </div>
                  </div>
                  <p className="text-[14px] font-normal leading-[150%] tracking-[0%]">
                    {SectionWepromise.texts}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommitmentSection;
