type Props = {
  whyChooseUsData: {
    id: number;
    content: {
      image: string;
      title: string;
      text: string;
    };
  };
};

const WhyChooseUsData2 = ({ whyChooseUsData }: Props) => {
  return (
    <div className="w-[360px] h-[256px] relative" key={whyChooseUsData.id}>
      <p className="text-[#E7E7E7] text-[128px] font-bold leading-[120%] tracking-[0%]">
        {`0${whyChooseUsData.id}`}
      </p>
      <div className="absolute top-[80px] left-[100px]">
        <img src={whyChooseUsData.content.image} />
        <p className="text-[#FAB107] font-bold text-[20px] leading-[130%] tracking-[0%]">
          {whyChooseUsData.content.title}
        </p>
        <p className="font-normal w-[264px] text-[14px] leading-[150%] tracking-[0%] text-[#262626]">
          {whyChooseUsData.content.text}
        </p>
      </div>
    </div>
  );
};

export default WhyChooseUsData2;
