import ArrowDown from "@/assets/images/arrow-down.png";

type Props = {
  page: string;
};

const Link = ({ page }: Props) => {
  return (
    <li className="flex">
      {page}
      {page.toLowerCase() === "service" && (
        <img
          src={ArrowDown}
          alt="ArrowDown"
          className="w-[24px] h-[24px] ml-3"
        />
      )}
    </li>
  );
};

export default Link;
