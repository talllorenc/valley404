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
							className={`flex items-center hover:bg-dark/10 transition-all duration-200 cursor-pointer p-2 ${
								isActive && "bg-light/10 dark:bg-dark/10"
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
