import Link from "next/link";
import Image from "next/image";

const AuthButton = () => {
	return (
		<Link
			href="/sign-in"
			className="flex items-center gap-2 bg-blue shadow-buttonBlue hover:shadow-buttonBlueBrick transition duration-200 px-4 py-2 rounded-md font-bold text-light">
			<Image src="/Buttons/user.png" alt="user icon" width={20} height={20} />
			Log in
		</Link>
	);
};

export default AuthButton;
