import { AnimatePresence, motion } from "framer-motion";
import MenuUserItems from "@/components/Menu/MenuUser/MenuUserItems";
import Image from "next/image";
import LogoutButton from "@/components/Auth/LogoutButton/LogoutButton";

type User = {
	_id: string;
	name: string;
	verified: boolean;
	email: string;
	solutions: string[];
	image?: string;
	createdAt: string;
	updatedAt: string;
};

interface Props {
	isMenuOpen: boolean;
	closeMenu: () => void;
	user: User;
}

const MenuUserModal = ({ isMenuOpen, closeMenu, user }: Props) => {
	return (
		<AnimatePresence>
			{isMenuOpen && (
				<motion.div
					initial={{ opacity: 0, translateY: 0 }}
					animate={{
						opacity: 1,
						translateY: 0,
					}}
					transition={{ duration: 0.2 }}
					exit={{ opacity: 0, translateY: 0 }}
					onClick={(e) => e.stopPropagation()}
					className="fixed right-4 top-16 max-w-xs w-full bg-white rounded-xl border border-black/20 dark:border-white/20">
					<div className="flex flex-col">
						<div className="flex items-center gap-2 p-2 border-b border-dark/20">
							<Image
								src={user.image || "/User/no-user.png"}
								alt="User avatar"
								width={40}
								height={40}
								className="rounded-full"
							/>
							<div className="flex flex-col overflow-hidden">
								<p className="truncate font-bold text-black">{user.email}</p>
								<p className="truncate ">{user.name}</p>
							</div>
						</div>

						<MenuUserItems closeMenu={closeMenu} />

						<div className="p-2 mx-auto">
							<LogoutButton />
						</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default MenuUserModal;
