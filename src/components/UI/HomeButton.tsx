import { IButtonLink } from "@/types/button.ui";
import Link from "next/link";

const HomeButton = ({ href, text, icon }: IButtonLink) => {
	return (
		<Link
			href={href}
			className="flex items-center justify-center gap-2 bg-[#02d7f2] text-light rounded-xl px-4 py-1 transition duration-200 hover:opacity-80 ">
			{text}
			{icon}
		</Link>
	);
};

export default HomeButton;
