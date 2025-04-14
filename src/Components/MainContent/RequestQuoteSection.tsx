import ArrowRight from "@/assets/images/arrow-right.svg";
import RequestImage from "@/assets/images/image-request.svg";

const RequestQuoteSection = () => {
  return (
    <div>
      <div className="wrapper py-[100px]">
        <h2 className="text-[40px] text-center  text-[#262626] font-bold leading-[150%] tracking-[0%] ">
          Request a quote
        </h2>
        <div className="flex justify-between mt-10">
          <form className="flex gap-3 flex-col">
            <p className="text-[14px] font-normal leading-[150%] tracking-[0%]">
              Please fill the form below and we will contact you.
            </p>
            <div className="flex flex-col gap-[6px]">
              <label className="text-[14px] font-medium text-[#262626]">
                Your name
              </label>
              <input
                placeholder="Full name"
                className="w-[525px] h-[40px] border-[0.5px] border-[#BDBDBD] pt-[9px] pl-[12px] text-[14px] text-[#262626]"
              />
            </div>
            <div className="flex flex-col gap-[6px]">
              <label className="text-[14px] font-medium text-[#262626]">
                Phone number
              </label>
              <input
                placeholder="Phone number"
                className="w-[525px] h-[40px] border-[0.5px] border-[#BDBDBD] pt-[9px] pl-[12px] text-[14px] text-[#262626]"
              />
            </div>
            <div className="flex flex-col gap-[6px]">
              <label className="text-[14px] font-medium text-[#262626]">
                Your email
              </label>
              <input
                placeholder="Your email"
                className="w-[525px] h-[40px] border-[0.5px] border-[#BDBDBD] pt-[9px] pl-[12px] text-[14px] text-[#262626]"
              />
            </div>
            <div className="flex flex-col gap-[6px]">
              <label className="text-[14px] font-medium text-[#262626]">
                Your message
              </label>
              <input
                placeholder="Your message"
                className="w-[525px] h-[40px] border-[0.5px] border-[#BDBDBD] pt-[9px] pl-[12px] text-[14px] text-[#262626]"
              />
            </div>
            <button className="w-[160px] flex justify-center gap-3 items-center text-white h-[36px] bg-[#FAB107] ml-auto">
              <span>Submit</span>
              <img src={ArrowRight} />
            </button>
          </form>
          <img
            src={RequestImage}
            alt="RequestImage"
            className="w-[525px] h-[424px]"
          />
        </div>
      </div>
    </div>
  );
};

export default RequestQuoteSection;
