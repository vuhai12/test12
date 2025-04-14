import Customer1 from "@/assets/images/customer1.svg";
import Customer2 from "@/assets/images/customer2.svg";
import IconStar from "@/assets/images/start-icon.svg";

const CustomerReviewsSection = () => {
  return (
    <div>
      <div className="bg-section3 h-[547px] ">
        <div className="wrapper">
          <h2 className="text-[40px] text-center pt-[80px] text-white font-bold leading-[150%] tracking-[0%]">
            Customer review
          </h2>
          <div className="flex gap-[120px] justify-center mt-5">
            <div className="w-[360px]">
              <div className="flex justify-between ">
                <div className="flex gap-3 items-center">
                  <img src={Customer2} alt="Customer2" />
                  <div>
                    <p className="text-[20px] font-bold leading-[130%] tracking-[0%] text-white">
                      Katherine
                    </p>
                    <p className="text-[14px] font-normal leading-[150%] tracking-[0%] text-white">
                      Journalist
                    </p>
                  </div>
                </div>
                <img src={IconStar} alt="IconStar" />
              </div>
              <p className="font-bold text-[20px] w-[202px] mt-3 text-white leading-[130%] tracking-[0%]">
                Lorem Ipsum is simply dummy text
              </p>
              <p className="text-[14px] w-[360px] mt-5 text-white font-normal leading-[150%] tracking-[0%]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="w-[360px]">
              <div className="flex justify-between ">
                <div className="flex gap-3 items-center">
                  <img src={Customer1} alt="Customer1" />
                  <div>
                    <p className="text-[20px] font-bold leading-[130%] tracking-[0%] text-white">
                      Jake
                    </p>
                    <p className="text-[14px] font-normal leading-[150%] tracking-[0%] text-white">
                      Journalist
                    </p>
                  </div>
                </div>
                <img src={IconStar} alt="IconStar" />
              </div>
              <p className="font-bold text-[20px] w-[202px] mt-3 text-white leading-[130%] tracking-[0%]">
                Lorem Ipsum is simply dummy text
              </p>
              <p className="text-[14px] w-[360px] mt-5 text-white font-normal leading-[150%] tracking-[0%]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviewsSection;
