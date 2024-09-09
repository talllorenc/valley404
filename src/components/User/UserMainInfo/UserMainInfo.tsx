import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

const UserMainInfo = () => {
	return (
		<div className="mt-8 flex flex-col gap-8">
			<div className="flex items-center gap-4">
				<Image
					src="/User/no-user.png"
					width={80}
					height={80}
					alt="profile image"
				/>

				<div className="flex flex-col">
					<p className="font-bold">talllorenc</p>
					<p className="text-dark/50 dark:text-light/50">2024.12.06</p>
				</div>
			</div>

			<div className="grid grid-cols-2 md:grid-cols-4 gap-5">
				<div className="flex flex-col items-center justify-center border border-dark/50 dark:border-light/50 rounded-xl p-4 transition duration-200 hover:shadow-buttonDark dark:hover:shadow-buttonLight cursor-help">
					<p className="font-bold">Role</p>
					<p className="">administrator</p>
				</div>

				<div className="flex flex-col items-center justify-center border border-dark/50 dark:border-light/50 rounded-xl p-4 transition duration-200 hover:shadow-buttonDark dark:hover:shadow-buttonLight cursor-help">
					<p className="font-bold">Email</p>
					<div className="flex items-center gap-2 text-green-600 dark:text-green-500">
						<FaCheckCircle />
						<p>confirmed</p>
					</div>
				</div>

				<div className="flex flex-col items-center justify-center border border-dark/50 dark:border-light/50 rounded-xl p-4 transition duration-200 hover:shadow-buttonDark dark:hover:shadow-buttonLight cursor-help">
					<p className="font-bold">Date created</p>
					<p>2024.12.06</p>
				</div>

				<div className="flex flex-col items-center justify-center border border-dark/50 dark:border-light/50 rounded-xl p-4 transition duration-200 hover:shadow-buttonDark dark:hover:shadow-buttonLight cursor-help">
					<p className="font-bold">Solutions</p>
					<p>24</p>
				</div>
			</div>
		</div>
	);
};

export default UserMainInfo;
