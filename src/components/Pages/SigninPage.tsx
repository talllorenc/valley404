import SigninForm from "@/components/Auth/SigninForm/SigninForm";
import HomeButton from "@/components/UI/HomeButton";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const SigninPage = () => {
	return (
		<div>
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
