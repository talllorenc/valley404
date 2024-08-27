import { IButtonLink } from "@/types/button.link";
import Link from "next/link";
import Image from "next/image";

const ButtonLink = ({ href, text }: IButtonLink) => {
  return (
    <Link
      href={href}
      className="flex items-center gap-1 hover:shadow-buttonLight hover:dark:shadow-buttonDark transition duration-200 bg-bgDark dark:bg-bgLight text-light dark:text-dark rounded p-2 font-bold"
    >
      {text}
      <Image
        src="/Buttons/arrow-right2.png"
        alt="arrow icon"
        width={20}
        height={20}
      />
    </Link>
  );
};

export default ButtonLink;
