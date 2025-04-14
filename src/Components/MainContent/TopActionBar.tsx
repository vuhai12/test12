import IconPhone from "@/assets/images/phone-icon.svg";
import IconDollar from "@/assets/images/dollar-icon.svg";

const TopActionBar = () => {
  return (
    <div>
      <div className="bg-[#FAB107] h-[92px] flex justify-center gap-[385px]">
        <div className="flex gap-[16px] h-full items-center">
          <img src={IconPhone} alt="IconPhone" />
          <span className="text-[20px] font-bold leading-[130%] tracking-[0%] text-white">
            Book service
          </span>
        </div>
        <div className="flex gap-[16px] h-full items-center">
          <img src={IconDollar} alt="IconDollar" />
          <span className="text-[20px] font-bold leading-[130%] tracking-[0%] text-white">
            Pricing
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopActionBar;
