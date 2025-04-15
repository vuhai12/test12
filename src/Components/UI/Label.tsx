type Props = {
  text: string;
};

const Label = ({ text }: Props) => {
  return (
    <label className="text-[14px] font-medium text-[#262626]">{text}</label>
  );
};

export default Label;
