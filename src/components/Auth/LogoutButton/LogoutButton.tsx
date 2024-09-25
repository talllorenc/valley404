import { FaSignOutAlt } from "react-icons/fa";
import { useMutation } from "@tanstack/react-query";
import { logout } from "@/services/auth.service";
import Spinner from "@/components/UI/Spinner";
import { Button } from "@/components/tl-ui/button";

const LogoutButton = () => {
	const { mutate, isPending } = useMutation({
		mutationFn: logout,
		onSuccess: () => {
			window.location.href = "/";
		},
	});

	return (
		// <button
		// 	type="submit"
		// 	onClick={() => mutate()}
		// 	className="flex items-center justify-center border border-dark/20 bg-light text-dark hover:bg-red-500 transition duration-200 px-4 py-1 rounded-xl">
		// 	{isPending ? (
		// 		<Spinner />
		// 	) : (
		// 		<div className="flex items-center gap-2">
		// 			Log out
		// 			<FaSignOutAlt />
		// 		</div>
		// 	)}
		// </button>
		<Button className="bg-red-500 text-white dark:text-white dark:bg-red-500" onClick={() => mutate()} disabled={isPending}>
			Log out <FaSignOutAlt className="ml-2" />
		</Button>
	);
};

export default LogoutButton;
