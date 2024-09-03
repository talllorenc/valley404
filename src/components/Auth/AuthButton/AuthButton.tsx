import Link from "next/link";
import { FaRegUser } from "react-icons/fa";

const AuthButton = () => {
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
