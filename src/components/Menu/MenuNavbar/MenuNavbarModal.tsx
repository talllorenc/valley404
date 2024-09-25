import { AnimatePresence, motion } from "framer-motion";

type Props = {
	isMenuOpen: boolean;
	closeMenu: () => void;
};

const MenuNavbarModal = ({ isMenuOpen, closeMenu }: Props) => {
	return (
		<AnimatePresence>
			{isMenuOpen && (
				<motion.div
					onClick={closeMenu}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.15 }}
					className="w-full h-screen fixed top-[65px] left-0 z-50 bg-light/50 dark:bg-black/50">
					<motion.div
						initial={{ x: "-100%", opacity: 0 }}
						animate={{
							x: isMenuOpen ? 0 : "100%",
							opacity: isMenuOpen ? 1 : 0,
						}}
						transition={{ duration: 0.2 }}
						exit={{ x: "-100%", opacity: 0 }}
						onClick={(e) => e.stopPropagation()}
						className="fixed top-[65px] left-0 z-50 max-w-xs w-full h-screen p-4 bg-light dark:bg-dark border-r border-dark/50 dark:border-light/50">
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default MenuNavbarModal;
