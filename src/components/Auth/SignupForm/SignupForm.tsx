import Link from "next/link";

const SignupForm = () => {
	return (
		<div className="flex flex-col gap-4 border border-dark/50 dark:border-light/50 p-4 rounded-xl">
			<div className="flex flex-col items-center justify-center text-center">
				<p className="text-lg font-bold">Sign up to Valley404</p>
				<p className="text-dark/50 dark:text-light/50">
					Welcome! Please sign up to continue
				</p>
			</div>

			<form className="flex flex-col gap-4"></form>

			<div className="flex items-center justify-center py-2">
				<span className="text-center">
					Already have an account?
					<Link
						href="/sign-in"
						className="font-medium ml-2 hover:underline text-black dark:text-white">
						Sign in
					</Link>
				</span>
			</div>
		</div>
	);
};

export default SignupForm;
