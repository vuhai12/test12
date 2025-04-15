import {
  SectionWhyChooseUsData1,
  SectionWhyChooseUsData2,
} from "../../Shared/Consts";
import WhyChooseUsData1 from "./WhyChooseUsData1";
import WhyChooseUsData2 from "./WhyChooseUsData2";

const WhyChooseUsSection = () => {
  return (
    <div className="py-[100px]">
      <div className="wrapper">
        <p className="text-center text-[40px]  leading-[150%] tracking-[0%] font-bold text-[#262626]">
          Why choose us?
        </p>

        {SectionWhyChooseUsData1.map((SectionWhyChooseUs) => {
          const isEven = SectionWhyChooseUs.id % 2 === 0;
          return (
            <WhyChooseUsData1
              isEven={isEven}
              whyChooseUsData={SectionWhyChooseUs}
              key={SectionWhyChooseUs.id}
            />
          );
        })}

        <div className="flex gap-[20px] flex-wrap mt-[50px]">
          {SectionWhyChooseUsData2.map((SectionWhyChooseUs, index) => {
            if (!SectionWhyChooseUs?.id) {
              return (
                <div
                  className="w-[360px] h-[256px] relative"
                  key={`placeholder-${index}`}
                ></div>
              );
            }
            return (
              <WhyChooseUsData2
                whyChooseUsData={SectionWhyChooseUs}
                key={SectionWhyChooseUs.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsSection;
