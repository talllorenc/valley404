import SigninForm from "@/components/Auth/SigninForm/SigninForm";
import HomeButton from "@/components/UI/HomeButton";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const SigninPage = () => {
	return (
		<div className="flex flex-col gap-4 xs:py-16 sm:py-16 lg:py-20 px-4">
			<SigninForm />
			<HomeButton
				href="/"
				text="Go back to the home page"
				icon={<FaRegArrowAltCircleRight />}
			/>
		</div>
	);
};

export default SigninPage;
