import { menuLinks } from "@/constants/menu.links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaAngleRight } from "react-icons/fa";

type Props = {
	closeMenu: () => void;
};

const MenuItems = ({ closeMenu }: Props) => {
	const pathname = usePathname();
	return (
		<nav className="font-medium">
			<ul className="flex flex-col gap-2">
				{menuLinks.map((link) => {
					const isActive = pathname === link.path;
					return (
						<Link
							onClick={closeMenu}
							href={link.path}
							key={link.id}
							className={`flex justify-between items-center hover:text-[#ca5954] dark:hover:text-[#eeb551] transition-all duration-200 cursor-pointer ${
								isActive ? "text-[#ca5954] dark:text-[#eeb551]" : ""
							}`}>
							<p>{link.title}</p>
							<FaAngleRight />
						</Link>
					);
				})}
			</ul>
		</nav>
	);
};

export default MenuItems;
