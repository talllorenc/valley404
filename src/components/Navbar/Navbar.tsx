"use client";

import Link from "next/link";
import Image from "next/image";
import ThemeSwitcher from "@/components/tl-ui/ThemeSwitcher";
import AuthButton from "@/components/Auth/AuthButton/AuthButton";
import { HiBars2 } from "react-icons/hi2";
import { useState } from "react";
import MenuNavbarModal from "@/components/Menu/MenuNavbar/MenuNavbarModal";
import useKeydown from "@/hooks/useKeydown";
import { IoCloseOutline } from "react-icons/io5";
import MenuItems from "../Menu/MenuNavbar/MenuItems";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	useKeydown(["Ctrl", "Q"], toggleMenu);

	return (
		<header className="w-full fixed top-0 z-50 py-3 px-4 bg-white dark:bg-[#131316] border-b border-black/20 dark:border-white/20">
			<div className="flex items-center justify-between">
				<div className="flex items-end gap-4">
					<Link href="/">
						<Image
							src="/mainLogo.png"
							alt="logo image"
							width={40}
							height={40}
							className="rounded transistion duration-200 hover:shadow-buttonDark dark:hover:shadow-buttonLight hover:scale-90"
							priority
						/>
					</Link>

					<MenuItems />
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
