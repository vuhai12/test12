import IconPeople from "@/assets/images/people-icon.svg";
import People from "@/assets/images/people.svg";
import Design from "@/assets/images/design.svg";
import IconDesign from "@/assets/images/design-icon.svg";
import IconService from "@/assets/images/service-icon.svg";
import Service from "@/assets/images/service.svg";
import { ChooseUsSectionDatas, WhyChooseUsData1 } from "../Shared/Consts";

const WhyChooseUsSection = () => {
  return (
    <div>
      <div className="py-[100px]">
        <div className="wrapper">
          <p className="text-center text-[40px]  leading-[150%] tracking-[0%] font-bold text-[#262626]">
            Why choose us?
          </p>

          {WhyChooseUsData1.map((WhyChooseUs) => {
            const isEven = WhyChooseUs.id % 2 === 0;
            return (
              <div
                className={`flex justify-between items-center ${
                  isEven ? "flex-row-reverse" : ""
                }`}
              >
                <div className="w-[456px]">
                  <div className="flex items-center gap-[24px]">
                    <img
                      src={WhyChooseUs.description.img}
                      alt="IconPeople"
                      className="w-[72px] h-[72px]"
                    />
                    <p className="text-[32px]  text-[#FAB107] font-bold leading-[130%]  tracking-[0%]">
                      {WhyChooseUs.description.title}
                    </p>
                  </div>
                  <p className="text-[#262626] mt-[10px] text-[14px] font-normal leading-[150%] tracking-[0%]">
                    {WhyChooseUs.description.text}
                  </p>
                </div>
                <p className="bg-[#FAB107] w-[59px] h-[59px] text-[32px] leading-[130%] tracking-[0%] text-white font-bold rounded-full flex items-center justify-center">
                  {`0${WhyChooseUs.id}`}
                </p>

                <img src={WhyChooseUs.img} alt="People" className="w-[456px]" />
              </div>
            );
          })}

          <div className="flex gap-[20px] flex-wrap mt-[50px]">
            {ChooseUsSectionDatas.map((ChooseUsSection) => {
              return (
                <div className="w-[360px] h-[256px] relative">
                  <p className="text-[#E7E7E7] text-[128px] font-bold leading-[120%] tracking-[0%]">
                    {ChooseUsSection.number}
                  </p>
                  <div className="absolute top-[80px] left-[100px]">
                    <img src={ChooseUsSection.content.image} />
                    <p className="text-[#FAB107] font-bold text-[20px] leading-[130%] tracking-[0%]">
                      {ChooseUsSection.content.title}
                    </p>
                    <p className="font-normal w-[264px] text-[14px] leading-[150%] tracking-[0%] text-[#262626]">
                      {ChooseUsSection.content.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsSection;
