import { socialsMenu } from "@/constants/socials.menu";
import Image from "next/image";

const SocialsMenu = () => {
	return (
		<div className="p-4 flex gap-4">
			{socialsMenu.map((social) => (
				<a
					key={social.id}
					className="transition duration-200 rounded-full hover:shadow-buttonLight cursor-pointer"
					target="_blank">
					<Image
						src={social.src}
						alt={social.alt}
						width={50}
						height={50}
						className="w-10 h-10"
					/>
				</a>
			))}
		</div>
	);
};

export default SocialsMenu;
