type Props = {
  promiseData: {
    id: number;
    img: string;
    title: string;
    heading: string;
    texts: string;
  };
};

const PromiseData = ({ promiseData }: Props) => {
  return (
    <div className="w-[288px]">
      <div className="flex h-full items-center gap-3">
        <img src={promiseData.img} className="w-[80px] h-[80px]" />
        <div>
          <p className="text-[48px] font-semibold leading-[150%] tracking-[0%]">
            {promiseData.title}
          </p>
          <p className="text-[20px] font-bold leading-[130%] tracking-[0%]">
            {promiseData.heading}
          </p>
        </div>
      </div>
      <p className="text-[14px] font-normal leading-[150%] tracking-[0%]">
        {promiseData.texts}
      </p>
    </div>
  );
};

export default PromiseData;
