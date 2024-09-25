"use client";

import Image from "next/image";
import { FaCheckCircle, FaInfoCircle } from "react-icons/fa";
import Link from "next/link";
import useAuth from "@/hooks/useAuth";
import Spinner from "@/components/UI/Spinner";
import LogoutButton from "@/components/Auth/LogoutButton/LogoutButton";
import { Button } from "@/components/tl-ui/button";

const UserMainInfo = () => {
	const { user, isSuccess, isPending, isError } = useAuth();

	if (isPending) {
		return (
			<div className="flex items-center justify-center h-[400px]">
				<Spinner width="64px" height="64px" />
			</div>
		);
	}

	if (isSuccess && user) {
		return (
			<div className="mt-8 flex flex-col gap-8">
				<div className="flex items-center flex-col gap-4 md:gap-0 md:flex-row md:justify-between">
					<div className="flex flex-col text-center md:text-left md:flex-row items-center gap-4">
						<Image
							src={user.image || "/User/no-user.png"}
							alt="User avatar"
							width={80}
							height={80}
							className="rounded-full"
						/>

						<div className="flex flex-col">
							<p className="font-bold text-2xl text-black dark:text-white">
								{user.name}
							</p>
							<p className="text-dark/50 dark:text-light/50 text-xl">
								{user.email}
							</p>
						</div>
					</div>

					<LogoutButton />
				</div>

				<div className="grid grid-cols-2 md:grid-cols-4 gap-5 text-center">
					<div className="flex flex-col items-center justify-center border border-black/20 dark:border-white/20 rounded-xl p-4 transition duration-200 hover:shadow-buttonDark dark:hover:shadow-buttonLight cursor-help">
						<p className="font-bold text-black dark:text-white">Role</p>
						<p className="">{user.role}</p>
					</div>

					<div className="flex flex-col items-center justify-center border border-black/20 dark:border-white/20 rounded-xl p-4 transition duration-200 hover:shadow-buttonDark dark:hover:shadow-buttonLight cursor-help">
						<p className="font-bold text-black dark:text-white">Email</p>
						<div className="flex items-center gap-2 text-green-600 dark:text-green-500">
							<FaCheckCircle />
							<p>confirmed</p>
						</div>
					</div>

					<div className="flex flex-col items-center justify-center border border-black/20 dark:border-white/20 rounded-xl p-4 transition duration-200 hover:shadow-buttonDark dark:hover:shadow-buttonLight cursor-help">
						<p className="font-bold text-black dark:text-white">Date created</p>
						<p>
							{user.createdAt
								? new Date(user.createdAt).toLocaleString("ru-RU")
								: "Date not available"}
						</p>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
					<div className="flex items-center flex-col md:flex-row text-center md:text-left gap-4 p-4 border border-black/20 dark:border-white/20 rounded-xl">
						<FaInfoCircle className="hidden md:flex flex-shrink-0 text-4xl text-black dark:text-white" />

						<p className="mt-2">
							If you wish to upgrade your permissions or gain more access on the
							portal, please contact the site administrator.
						</p>

						<Link href="/contact">
							<Button>Contact</Button>
						</Link>
					</div>
				</div>
			</div>
		);
	}
};

export default UserMainInfo;
