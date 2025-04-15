type Props = {
  text: string;
  icon: string;
};

const Button = ({ text, icon }: Props) => {
  return (
    <button className="w-[160px] flex justify-center gap-3 items-center text-white h-[36px] bg-[#FAB107] ml-auto">
      <span>{text}</span>
      <img src={icon} />
    </button>
  );
};

export default Button;
