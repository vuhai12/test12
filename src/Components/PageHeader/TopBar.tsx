import ArrowDown from "@/assets/images/arrow-down.png";
import Mail from "@/assets/images/mail.png";
import Vecto from "@/assets/images/vecto.png";
import Phone from "@/assets/images/phone.png";

const TopBar = () => {
  return (
    <div>
      <div className="bg-[#FAB107] h-[36px]">
        <div className="wrapper flex items-center justify-between h-full">
          <div className="flex items-center gap-[17px]">
            <img className="w-[16px] h-[16px]" src={Mail} alt="Mail" />
            <span className="text-white">ngcons.connection@gmail.com</span>
            <img src={Vecto} alt="vecto" />
            <img src={Phone} alt="Phone" />
            <span className="text-white">0922063999</span>
          </div>
          <div className="flex gap-[6px] items-center">
            <span className="text-white">Eng</span>
            <img
              className="w-[16px] h-[16px]"
              src={ArrowDown}
              alt="ArrowDown"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
