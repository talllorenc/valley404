import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "@/services/user.service";

const useAuth = () => {
	const { data: user, ...rest } = useQuery({
		queryKey: ["auth"],
		queryFn: getCurrentUser,
		staleTime: Infinity,
		refetchOnWindowFocus: false,
	});

	return {
		user,
		...rest,
	};
};

export default useAuth;
