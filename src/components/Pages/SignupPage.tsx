import HomeButton from "@/components/tl-ui/HomeButton";
import SignupForm from "@/components/Auth/SignupForm/SignupForm";

const SignupPage = () => {
	return (
		<div className="flex flex-col gap-4 px-4">
			<SignupForm />
			<HomeButton />
		</div>
	);
};

export default SignupPage;
