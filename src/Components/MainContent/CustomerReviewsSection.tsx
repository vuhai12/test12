import { SectionCustomReviewDatas } from "../Shared/Consts";

const CustomerReviewsSection = () => {
  return (
    <div>
      <div className="bg-section3 h-[547px] ">
        <div className="wrapper">
          <h2 className="text-[40px] text-center pt-[80px] text-white font-bold leading-[150%] tracking-[0%]">
            Customer review
          </h2>
          <div className="flex gap-[120px] justify-center mt-5">
            {SectionCustomReviewDatas.map((SectionCustomReview) => {
              return (
                <div className="w-[360px]" key={SectionCustomReview.id}>
                  <div className="flex justify-between ">
                    <div className="flex gap-3 items-center">
                      <img src={SectionCustomReview.img} alt="Customer2" />
                      <div>
                        <p className="text-[20px] font-bold leading-[130%] tracking-[0%] text-white">
                          {SectionCustomReview.name}
                        </p>
                        <p className="text-[14px] font-normal leading-[150%] tracking-[0%] text-white">
                          {SectionCustomReview.job}
                        </p>
                      </div>
                    </div>
                    <img src={SectionCustomReview.imgStar} alt="IconStar" />
                  </div>
                  <p className="font-bold text-[20px] w-[202px] mt-3 text-white leading-[130%] tracking-[0%]">
                    {SectionCustomReview.title}
                  </p>
                  <p className="text-[14px] w-[360px] mt-5 text-white font-normal leading-[150%] tracking-[0%]">
                    {SectionCustomReview.texts}
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

export default CustomerReviewsSection;
