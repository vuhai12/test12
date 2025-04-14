import ArrowDown from "@/assets/images/arrow-down.png";
import ArrowRight from "@/assets/images/arrow-right.svg";
import Logo from "@/assets/images/logo.svg";
import TopBar from "./TopBar";
import { links } from "../Shared/Consts";

const PageHeader = () => {
  return (
    <div className="h-[701px] bg-section1">
      <TopBar />
      <div className="wrapper flex justify-between h-[94px] items-center">
        <img className="w-[264px] h-[40px]" src={Logo} alt="logo" />
        <ul className="flex gap-[40px] text-white font-bold text-[16px] leading-[140%] tracking-[0%]">
          {links.map((link) => (
            <li className="flex">
              {link}
              {link.toLowerCase() === "service" && (
                <img
                  src={ArrowDown}
                  alt="ArrowDown"
                  className="w-[24px] h-[24px] ml-3"
                />
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="wrapper mt-[139px]">
        <p className="w-[516px] h-[166px] text-[64px] text-[#FAB107] leading-[130%] font-bold tracking-[0%]">
          CONSTRUCTION INVESTMENT
        </p>
        <p className="text-[20px] font-bold text-white leading-[130%]">
          Smarter solution for your home.
        </p>
        <button className="w-[263px] h-[44px] bg-[#FAB107] mt-[100px] flex items-center gap-[10px] justify-center">
          <span className="text-[16px] leading-[140%] font-bold tracking-[0%] text-white">
            See our service
          </span>
          <img
            src={ArrowRight}
            alt="ArrowRight"
            className="w-[20px] h-[20px]"
          />
        </button>
      </div>
    </div>
  );
};

export default PageHeader;
