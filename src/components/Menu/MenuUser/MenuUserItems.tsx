import { usePathname } from "next/navigation";
import { menuUserLinks } from "@/constants/menu.links";
import Link from "next/link";

type Props = {
	closeMenu: () => void;
};

const MenuUserItems = ({ closeMenu }: Props) => {
	const pathname = usePathname();
	return (
		<nav className="">
			<ul className="flex flex-col">
				{menuUserLinks.map((link) => {
					const isActive = pathname === link.path;
					return (
						<Link
							onClick={closeMenu}
							href={link.path}
							key={link.id}
							className={`flex items-center hover:text-black hover:underline hover:underline-offset-4 transition-all text-black duration-200 cursor-pointer p-2 ${
								isActive && "underline underline-offset-4"
							}`}>
							<p>{link.title}</p>
						</Link>
					);
				})}
			</ul>
		</nav>
	);
};

export default MenuUserItems;
