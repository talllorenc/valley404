import VerifyCodeBar from "@/components/Auth/VerifyCodeBar/VerifyCodeBar";
import HomeButton from "@/components/UI/HomeButton";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const VerifyEmailPage = () => {
	return (
		<div className="flex flex-col gap-4 p-4">
			<h1 className="font-bold text-5xl text-center">Verify Email</h1>
			<p className="text-center text-dark/50 dark:text-light/50">
				Enter the code sent to your email. It’s valid for 1 hour. After it
				expires, please log in again to request a new one
			</p>
			<VerifyCodeBar />
			<HomeButton
				href="/"
				text="Go back to the home page"
				icon={<FaRegArrowAltCircleRight />}
			/>
		</div>
	);
};

export default VerifyEmailPage;
