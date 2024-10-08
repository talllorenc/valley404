"use client";

import Link from "next/link";
import Image from "next/image";
import { FaRegUser } from "react-icons/fa";
import useAuth from "@/hooks/useAuth";
import MountedSpinner from "@/components/UI/MountedSpinner";
import MenuUserModal from "@/components/Menu/MenuUser/MenuUserModal";
import { useState } from "react";
import { Button } from "@/components/tl-ui/button";

const AuthButton = () => {
	const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
	const { user, isSuccess, isPending, isError } = useAuth();

	const toggleMenu = (): void => {
		setMenuOpen(!isMenuOpen);
	};

	if (isPending) {
		return <MountedSpinner />;
	}

	if (isSuccess && user) {
		return (
			<div className="cursor-pointer">
				<Image
					src={user.image || "/User/no-user.png"}
					alt="User avatar"
					width={40}
					height={40}
					className="rounded-full"
					onClick={toggleMenu}
				/>

				<MenuUserModal
					isMenuOpen={isMenuOpen}
					closeMenu={() => setMenuOpen(false)}
					user={user}
				/>
			</div>
		);
	}
	return (
		<Link href="/sign-in">
			<Button variant="outline" className="text-black dark:text-white">
				Join
				<FaRegUser className="ml-2" />
			</Button>
		</Link>
	);
};

export default AuthButton;
