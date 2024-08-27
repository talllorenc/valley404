import { IButtonLink } from "@/types/button.link";
import Link from "next/link";

const ButtonLink = ({
	href,
	text,
	bgColor = "#ede4da",
	textColor = "#17181c",
	icon,
}: IButtonLink) => {
	return (
		<Link
			style={{ backgroundColor: bgColor, color: textColor }}
			href={href}
			className="flex items-center gap-2 px-4 py-2 font-bold rounded transition duration-200 hover:opacity-80 ">
			{text}
			{icon}
		</Link>
	);
};

export default ButtonLink;
