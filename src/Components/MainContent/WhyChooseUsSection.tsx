import IconPeople from "@/assets/images/people-icon.svg";
import People from "@/assets/images/people.svg";
import Design from "@/assets/images/design.svg";
import IconDesign from "@/assets/images/design-icon.svg";
import IconService from "@/assets/images/service-icon.svg";
import Service from "@/assets/images/service.svg";
import Task from "@/assets/images/task-icon.svg";

const WhyChooseUsSection = () => {
  return (
    <div>
      <div className="py-[100px]">
        <div className="wrapper">
          <p className="text-center text-[40px]  leading-[150%] tracking-[0%] font-bold text-[#262626]">
            Why choose us?
          </p>

          <div className="flex justify-between items-center">
            <div className="w-[456px]">
              <div className="flex items-center gap-[24px]">
                <img
                  src={IconPeople}
                  alt="IconPeople"
                  className="w-[72px] h-[72px]"
                />
                <p className="text-[32px]  text-[#FAB107] font-bold leading-[130%]  tracking-[0%]">
                  Our people
                </p>
              </div>
              <p className="text-[#262626] mt-[10px] text-[14px] font-normal leading-[150%] tracking-[0%]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
            <p className="bg-[#FAB107] w-[59px] h-[59px] text-[32px] leading-[130%] tracking-[0%] text-white font-bold rounded-full flex items-center justify-center">
              01
            </p>

            <img src={People} alt="People" className="w-[456px]" />
          </div>

          <div className="flex justify-between items-center">
            <img src={Design} alt="Design" className="w-[456px]" />
            <p className="bg-[#FAB107] w-[59px] h-[59px] text-[32px] leading-[130%] tracking-[0%] text-white font-bold rounded-full flex items-center justify-center">
              02
            </p>
            <div className="w-[456px]">
              <div className="flex">
                <img src={IconDesign} alt="IconDesign" />
                <p className="text-[32px] text-[#FAB107] font-bold leading-[130%] tracking-[0%]">
                  Our up-to-date design
                </p>
              </div>
              <p className="text-[#262626] text-[14px] font-normal leading-[150%] tracking-[0%]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="w-[456px]">
              <div className="flex items-center gap-[24px]">
                <img
                  src={IconService}
                  alt="IconService"
                  className="w-[72px] h-[72px]"
                />
                <p className="text-[32px]  text-[#FAB107] font-bold leading-[130%]  tracking-[0%]">
                  Our quality service
                </p>
              </div>
              <p className="text-[#262626] mt-[10px] text-[14px] font-normal leading-[150%] tracking-[0%]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
            <p className="bg-[#FAB107] w-[59px] h-[59px] text-[32px] leading-[130%] tracking-[0%] text-white font-bold rounded-full flex items-center justify-center">
              03
            </p>
            <img src={Service} alt="Service" className="w-[456px]" />
          </div>

          <div className="flex gap-[20px] flex-wrap mt-[50px]">
            <div className="w-[360px] h-[256px] relative">
              <p className="text-[#E7E7E7] text-[128px] font-bold leading-[120%] tracking-[0%]">
                01
              </p>
              <div className="absolute top-[80px] left-[100px]">
                <img src={Task} alt="Task" />
                <p className="text-[#FAB107] font-bold text-[20px] leading-[130%] tracking-[0%]">
                  Lorem ipsum
                </p>
                <p className="font-normal w-[264px] text-[14px] leading-[150%] tracking-[0%] text-[#262626]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <div className="w-[360px] h-[256px] relative">
              <p className="text-[#E7E7E7] text-[128px] font-bold leading-[120%] tracking-[0%]">
                02
              </p>
              <div className="absolute top-[80px] left-[100px]">
                <img src={Task} alt="Task" />
                <p className="text-[#FAB107] font-bold text-[20px] leading-[130%] tracking-[0%]">
                  Lorem ipsum
                </p>
                <p className="font-normal w-[264px] text-[14px] leading-[150%] tracking-[0%] text-[#262626]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <div className="w-[360px] h-[256px] relative">
              <p className="text-[#E7E7E7] text-[128px] font-bold leading-[120%] tracking-[0%]">
                03
              </p>
              <div className="absolute top-[80px] left-[100px]">
                <img src={Task} alt="Task" />
                <p className="text-[#FAB107] font-bold text-[20px] leading-[130%] tracking-[0%]">
                  Lorem ipsum
                </p>
                <p className="font-normal w-[264px] text-[14px] leading-[150%] tracking-[0%] text-[#262626]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <div className="w-[360px] h-[256px] relative"></div>
            <div className="w-[360px] h-[256px] relative">
              <p className="text-[#E7E7E7] text-[128px] font-bold leading-[120%] tracking-[0%]">
                04
              </p>
              <div className="absolute top-[80px] left-[100px]">
                <img src={Task} alt="Task" />
                <p className="text-[#FAB107] font-bold text-[20px] leading-[130%] tracking-[0%]">
                  Lorem ipsum
                </p>
                <p className="font-normal w-[264px] text-[14px] leading-[150%] tracking-[0%] text-[#262626]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <div className="w-[360px] h-[256px] relative">
              <p className="text-[#E7E7E7] text-[128px] font-bold leading-[120%] tracking-[0%]">
                05
              </p>
              <div className="absolute top-[80px] left-[100px]">
                <img src={Task} alt="Task" />
                <p className="text-[#FAB107] font-bold text-[20px] leading-[130%] tracking-[0%]">
                  Lorem ipsum
                </p>
                <p className="font-normal w-[264px] text-[14px] leading-[150%] tracking-[0%] text-[#262626]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsSection;
