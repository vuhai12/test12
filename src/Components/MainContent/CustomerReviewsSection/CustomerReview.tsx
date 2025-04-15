import React from "react";

type Props = {
  CustomerReview: {
    id: number;
    img: string;
    imgStar: string;
    name: string;
    job: string;
    title: string;
    texts: string;
  };
};

const CustomerReview = ({ CustomerReview }: Props) => {
  return (
    <div>
      <div className="w-[360px]">
        <div className="flex justify-between ">
          <div className="flex gap-3 items-center">
            <img src={CustomerReview.img} alt="Customer2" />
            <div>
              <p className="text-[20px] font-bold leading-[130%] tracking-[0%] text-white">
                {CustomerReview.name}
              </p>
              <p className="text-[14px] font-normal leading-[150%] tracking-[0%] text-white">
                {CustomerReview.job}
              </p>
            </div>
          </div>
          <img src={CustomerReview.imgStar} alt="IconStar" />
        </div>
        <p className="font-bold text-[20px] w-[202px] mt-3 text-white leading-[130%] tracking-[0%]">
          {CustomerReview.title}
        </p>
        <p className="text-[14px] w-[360px] mt-5 text-white font-normal leading-[150%] tracking-[0%]">
          {CustomerReview.texts}
        </p>
      </div>
    </div>
  );
};

export default CustomerReview;
