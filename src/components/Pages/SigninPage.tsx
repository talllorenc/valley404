import SigninForm from "@/components/Auth/SigninForm/SigninForm";
import HomeButton from "@/components/tl-ui/HomeButton";

const SigninPage = () => {
	return (
		<div className="flex flex-col gap-4 p-4">
			<SigninForm />
			<HomeButton />
		</div>
	);
};

export default SigninPage;
