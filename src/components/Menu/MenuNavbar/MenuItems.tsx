import { menuLinks } from "@/constants/menu.links";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuItems = () => {
	const pathname = usePathname();
	return (
		<nav className="w-full">
			<ul className="flex items-center text-contentLight dark:text-contentDark gap-2">
				{menuLinks.map((link) => {
					const isActive = pathname === link.path;
					return (
						<Link
							href={link.path}
							key={link.id}
							className={`hover:text-black dark:hover:text-white transition-all duration-200 cursor-pointer ${
								isActive && "text-black underline underline-offset-4 dark:text-white dark:underline dark:underline-offset-4" 
							}`}>
							<p>{link.title}</p>
						</Link>
					);
				})}
			</ul>
		</nav>
	);
};

export default MenuItems;
