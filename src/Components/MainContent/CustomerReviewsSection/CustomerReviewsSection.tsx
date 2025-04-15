import { SectionCustomReviewDatas } from "../../Shared/Consts";
import CustomerReview from "./CustomerReview";

const CustomerReviewsSection = () => {
  return (
    <div className="bg-section3 h-[547px] ">
      <div className="wrapper">
        <h2 className="text-[40px] text-center pt-[80px] text-white font-bold leading-[150%] tracking-[0%]">
          Customer review
        </h2>
        <div className="flex gap-[120px] justify-center mt-5">
          {SectionCustomReviewDatas.map((SectionCustomReview) => {
            return (
              <CustomerReview
                key={SectionCustomReview.id}
                CustomerReview={SectionCustomReview}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CustomerReviewsSection;
