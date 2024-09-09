import UserMainInfo from "@/components/User/UserMainInfo/UserMainInfo";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";

const UserPage = () => {
	return (
		<div className="flex flex-col">
			<BreadCrumbs />
			<h1 className="font-bold text-5xl">Profile</h1>
			<UserMainInfo />
		</div>
	);
};

export default UserPage;
