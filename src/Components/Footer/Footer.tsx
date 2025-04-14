import IconPhoneFooter from "@/assets/images/icon-phone-footer.svg";
import IconFaxFooter from "@/assets/images/icon-fax-footer.svg";
import IconMailFooter from "@/assets/images/icon-mail-footer.svg";
import IconYoutube from "@/assets/images/icon-youtube.svg";
import IconFacebook from "@/assets/images/icon-facebook.svg";
import ImageCompany from "@/assets/images/img-company.svg";
import ImageMap from "@/assets/images/img-map.svg";
import Logo from "@/assets/images/logo.svg";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#252525] py-10">
        <div className="wrapper">
          <img src={Logo} alt="Logo" className="w-[264px] h-[40px]" />
          <p className="text-16px text-white font-bold leading-[140%] tracking-[0%] w-[461px] mt-3">
            NGCONS provides professional home design and construction services
            in Hanoi, Vietnam.
          </p>
          <hr className="border-[#FFFFFF] my-4 border-t" />
          <div className="flex justify-between">
            <div>
              <div className="w-[319px]">
                <p className="text-[20px] text-white font-bold leading-[130%] tracking-[0%]">
                  Office
                </p>
                <p className="font-thin text-[16px] text-white mt-5">
                  No. 3, 29/70/19 Khuong Ha Street, Thanh Xuan District, Hanoi,
                  Vietnam
                </p>
              </div>
              <div className="flex flex-col gap-3 mt-5">
                <div className="flex gap-3 text-white">
                  <img src={IconPhoneFooter} />
                  <span>Phone</span>
                  <span>0922063999</span>
                </div>
                <div className="flex gap-3 text-white">
                  <img src={IconFaxFooter} />
                  <span>Fax</span>
                  <span>(+84) 922 063 999</span>
                </div>
                <div className="flex gap-3 text-white">
                  <img src={IconMailFooter} />
                  <span>Email</span>
                  <span>ngcons.connection@gmail.com</span>
                </div>
              </div>
              <div className="mt-5">
                <p className="text-[16px] text-white font-semibold leading-[140%] tracking-[0%]">
                  Follow Us On
                </p>
                <div className="flex gap-5">
                  <img src={IconYoutube} alt="IconYoutube" />
                  <img src={IconFacebook} alt="IconFacebook" />
                </div>
              </div>
            </div>
            <div className="flex gap-5">
              <div>
                <p className="text-[20px] text-white font-bold leading-[130%] tracking-[0%]">
                  Company office
                </p>
                <img
                  src={ImageCompany}
                  className="w-[264px] h-[164px] mt-5"
                  alt="ImageCompany"
                />
              </div>
              <div>
                <p className="text-[20px] text-white font-bold leading-[130%] tracking-[0%]">
                  Branch office
                </p>
                <img
                  src={ImageMap}
                  className="w-[264px] h-[164px] mt-5"
                  alt="ImageMap"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
