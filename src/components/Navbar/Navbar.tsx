"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ThemeSwitcher from "@/components/UI/ThemeSwitcher";
import AuthButton from "@/components/Auth/AuthButton/AuthButton";
import { menuLinks } from "@/constants/menu.links";

const Navbar = () => {
	const pathname = usePathname();

	return (
		<header className="w-full fixed top-0 z-50 py-3 px-4 bg-light dark:bg-dark backdrop-blur bg-opacity-50 dark:backdrop-blur dark:bg-opacity-50 border-b border-dark/50 dark:border-light/50">
			<div className="flex items-center justify-between">
				<div className="flex items-end gap-4">
					<Link href="/">
						<Image
							src="/mainLogo.png"
							alt="logo image"
							width={40}
							height={40}
							className="rounded transistion duration-200 hover:shadow-buttonDark dark:hover:shadow-buttonLight hover:scale-90"
						/>
					</Link>

					<nav className="font-medium">
						<ul className="flex items-end gap-4">
							{menuLinks.map((link) => {
								const isActive = pathname === link.path;
								return (
									<li
										key={link.id}
										className={`hover:text-[#ca5954] dark:hover:text-[#eeb551] transition-all duration-200 ${
											isActive ? "text-[#ca5954] dark:text-[#eeb551]" : ""
										}`}>
										<Link href={link.path}>{link.title}</Link>
									</li>
								);
							})}
						</ul>
					</nav>
				</div>

				<div className="flex items-center gap-4">
					<ThemeSwitcher />
					<AuthButton />
				</div>
			</div>
		</header>
	);
};

export default Navbar;
