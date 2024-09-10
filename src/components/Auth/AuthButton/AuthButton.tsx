import Link from "next/link";
import Image from "next/image";
import { FaRegUser } from "react-icons/fa";
import useAuth from "@/hooks/useAuth";
import MountedSpinner from "@/components/UI/MountedSpinner";

const AuthButton = () => {
	const { user, isSuccess, isPending, isError } = useAuth();

	if (isPending) {
		return <MountedSpinner />;
	}

	if (isSuccess && user) {
		return (
			<div className="">
				<div className="flex items-center gap-2 cursor-pointer">
					<Image
						src={user.image || "/User/no-user.png"}
						alt="User avatar"
						width={40}
						height={40}
						className="rounded-full"
					/>
				</div>
			</div>
		);
	}
	return (
		<Link
			href="/sign-in"
			className="flex items-center gap-2 border border-dark dark:border-light hover:shadow-buttonDark dark:hover:shadow-buttonLight transition duration-200 px-4 py-1 rounded-xl">
			<FaRegUser />
			Join
		</Link>
	);
};

export default AuthButton;
