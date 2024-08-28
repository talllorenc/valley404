"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { menuLinks } from "@/constants/menu.links";

const Footer = () => {
	const pathname = usePathname();

	if (pathname === "/") {
		return null;
	}

	return (
		<footer className="w-full flex flex-col border-t border-dark/50 dark:border-light/50">
			<div className="mx-auto max-w-7xl flex w-full flex-col items-center justify-center px-6 py-8">
				<Link
					href="/"
					className="flex items-center gap-2 transistion duration-200 hover:scale-90">
					<Image
						src="/mainLogo.png"
						alt="logo image"
						width={40}
						height={40}
						className="rounded"
					/>
					<p className="font-keleti text-3xl">Valley404</p>
				</Link>

				<nav className="font-medium mt-4">
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

				<div className="mt-4 text-center">
					<p className="text-dark/50 dark:text-light/50 ">
						&copy;{new Date().getFullYear()} VALLEY404. Kazakhstan, Karaganda.
						All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
