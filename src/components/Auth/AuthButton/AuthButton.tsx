import Link from "next/link";
import { FaRegUser } from "react-icons/fa";

const AuthButton = () => {
	return (
		<Link
			href="/sign-in"
			className="flex items-center gap-2 border border-dark dark:border-light transition duration-200 hover:shadow-buttonDark dark:hover:shadow-buttonLight px-4 py-1 rounded font-bold text-dark dark:text-light">
			<FaRegUser />
			JOIN
		</Link>
	);
};

export default AuthButton;
