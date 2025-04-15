type Props = {
  whyChooseUsData: {
    id: number;
    img: string;
    description: {
      img: string;
      title: string;
      text: string;
    };
  };
  isEven: boolean;
};

const WhyChooseUsData1 = ({ whyChooseUsData, isEven }: Props) => {
  return (
    <div
      key={whyChooseUsData.id}
      className={`flex justify-between z-10 items-center ${
        isEven ? "flex-row-reverse" : ""
      }`}
    >
      <div className="w-[456px]">
        <div className="flex items-center gap-[24px]">
          <img
            src={whyChooseUsData.description.img}
            alt="IconPeople"
            className="w-[72px] h-[72px]"
          />
          <p className="text-[32px]  text-[#FAB107] font-bold leading-[130%]  tracking-[0%]">
            {whyChooseUsData.description.title}
          </p>
        </div>
        <p className="text-[#262626] mt-[10px] text-[14px] font-normal leading-[150%] tracking-[0%]">
          {whyChooseUsData.description.text}
        </p>
      </div>
      <p className="bg-[#FAB107] w-[59px] h-[59px] text-[32px] leading-[130%] tracking-[0%] text-white font-bold rounded-full flex items-center justify-center">
        {`0${whyChooseUsData.id}`}
      </p>

      <img src={whyChooseUsData.img} alt="People" className="w-[456px]" />
    </div>
  );
};

export default WhyChooseUsData1;
