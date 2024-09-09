import HomeButton from "@/components/UI/HomeButton";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import SignupForm from "@/components/Auth/SignupForm/SignupForm";

const SignupPage = () => {
	return (
		<div className="flex flex-col gap-4 xs:py-16 sm:py-16 lg:py-20 px-4">
			<SignupForm />
			<HomeButton
				href="/"
				text="Go back to the home page"
				icon={<FaRegArrowAltCircleRight />}
			/>
		</div>
	);
};

export default SignupPage;
