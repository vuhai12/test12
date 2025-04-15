type Props = {
  placeholder: string;
};

const Input = ({ placeholder }: Props) => {
  return (
    <input
      placeholder={placeholder}
      className="w-[525px] h-[40px] border-[0.5px] border-[#BDBDBD] pl-[12px] text-[14px] text-[#262626]"
    />
  );
};

export default Input;
