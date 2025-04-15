import { FooterDatas } from "../Shared/Consts";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#252525] py-10">
        <div className="wrapper">
          <img
            src={FooterDatas.logo}
            alt="Logo"
            className="w-[264px] h-[40px]"
          />
          <p className="text-16px text-white font-bold leading-[140%] tracking-[0%] w-[461px] mt-3">
            {FooterDatas.slogan}
          </p>
          <hr className="border-[#FFFFFF] my-4 border-t" />
          <div className="flex justify-between">
            <div>
              <div className="w-[319px]">
                <p className="text-[20px] text-white font-bold leading-[130%] tracking-[0%]">
                  {FooterDatas.title}
                </p>
                <p className="font-thin text-[16px] text-white mt-5">
                  {FooterDatas.address}
                </p>
              </div>

              <div className="flex flex-col gap-3 mt-5">
                {FooterDatas.contact.map((FooterData) => {
                  return (
                    <div className="flex gap-3 text-white">
                      <img src={FooterData.img} />
                      <span>{FooterData.name}</span>
                      <span>{FooterData.text}</span>
                    </div>
                  );
                })}
              </div>
              <div className="mt-5">
                <p className="text-[16px] text-white font-semibold leading-[140%] tracking-[0%]">
                  {FooterDatas.social.title}
                </p>
                <div className="flex gap-5">
                  {FooterDatas.social.imgs.map((FooterData) => {
                    return <img src={FooterData.img} alt={FooterData.name} />;
                  })}
                </div>
              </div>
            </div>
            <div className="flex gap-5">
              {FooterDatas.officeType.map((FooterData) => {
                return (
                  <div>
                    <p className="text-[20px] text-white font-bold leading-[130%] tracking-[0%]">
                      {FooterData.name}
                    </p>
                    <img
                      src={FooterData.img}
                      className="w-[264px] h-[164px] mt-5"
                      alt="ImageCompany"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
