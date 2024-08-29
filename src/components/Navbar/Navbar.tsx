"use client";

import Link from "next/link";
import Image from "next/image";
import ThemeSwitcher from "@/components/UI/ThemeSwitcher";
import AuthButton from "@/components/Auth/AuthButton/AuthButton";
import { HiBars2 } from "react-icons/hi2";
import { useState } from "react";
import MenuNavbarModal from "@/components/Menu/MenuNavbar/MenuNavbarModal";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header className="w-full fixed top-0 z-50 py-3 px-4 bg-light dark:bg-dark backdrop-blur bg-opacity-50 dark:backdrop-blur dark:bg-opacity-50 border-b border-dark/50 dark:border-light/50">
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-4">
					<Link href="/">
						<Image
							src="/mainLogo.png"
							alt="logo image"
							width={40}
							height={40}
							className="rounded transistion duration-200 hover:shadow-buttonDark dark:hover:shadow-buttonLight hover:scale-90"
						/>
					</Link>

					<div
						className="hover:shadow-buttonDark dark:hover:shadow-buttonLight transition duration-200 border-dark dark:border-light border p-1 rounded"
						onClick={toggleMenu}>
						<HiBars2 className="text-3xl" />
					</div>
				</div>

				<div className="flex items-center gap-4">
					<ThemeSwitcher />
					<AuthButton />
				</div>
			</div>
			<MenuNavbarModal isMenuOpen={isMenuOpen} closeMenu={toggleMenu} />
		</header>
	);
};

export default Navbar;
