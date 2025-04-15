import ArrowRight from "@/assets/images/arrow-right.svg";
import RequestImage from "@/assets/images/image-request.svg";
import { InputDatas } from "@/Components/Shared/Consts";
import Button from "@/Components/UI/Button";
import Input from "@/Components/UI/Input";
import Label from "@/Components/UI/Label";

const RequestQuoteSection = () => {
  return (
    <div className="wrapper py-[100px]">
      <h2 className="text-[40px] text-center  text-[#262626] font-bold leading-[150%] tracking-[0%] ">
        Request a quote
      </h2>
      <div className="flex justify-between mt-10">
        <form className="flex gap-3 flex-col">
          <p className="text-[14px] font-normal leading-[150%] tracking-[0%]">
            Please fill the form below and we will contact you.
          </p>
          {InputDatas.map((InputData) => {
            return (
              <div className="flex flex-col gap-[6px]" key={InputData.id}>
                <Label text={InputData.lable} />
                <Input placeholder={InputData.placeholder} />
              </div>
            );
          })}
          {/* <div className="flex flex-col gap-[6px]">
            <Label text="Your name" />
            <Input placeholder="Full name" />
          </div> */}
          {/* <div className="flex flex-col gap-[6px]">
            <Label text="Phone number" />
            <Input placeholder="Phone number" />
          </div>
          <div className="flex flex-col gap-[6px]">
            <Label text="Your email" />
            <Input placeholder="Your email" />
          </div>
          <div className="flex flex-col gap-[6px]">
            <Label text="Your message" />
            <Input placeholder="Your message" />
          </div> */}
          <Button text="Submit" icon={ArrowRight} />
        </form>
        <img
          src={RequestImage}
          alt="RequestImage"
          className="w-[525px] h-[424px]"
        />
      </div>
    </div>
  );
};

export default RequestQuoteSection;
