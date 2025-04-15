import { SectionCustomReviewDatas } from "../../Shared/Consts";
import CustomerReview from "./CustomerReview";
import RightButton from "@/assets/images/right-button.svg";
import LeftButton from "@/assets/images/left-button.svg";

const CustomerReviewsSection = () => {
  return (
    <div className="bg-section3 h-[547px] ">
      <div className="wrapper relative">
        <h2 className="text-[40px] text-center pt-[80px] text-white font-bold leading-[150%] tracking-[0%]">
          Customer review
        </h2>
        <img
          src={RightButton}
          className="absolute top-[50%] right-[32px]  cursor-pointer"
          alt="Right"
        />
        <img
          src={LeftButton}
          className="absolute top-[50%] left-[32px]  cursor-pointer"
          alt="Left"
        />
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
