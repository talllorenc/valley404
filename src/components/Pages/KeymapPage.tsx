import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import Keymap from "@/components/Keymap/Keymap";

const KeymapPage = () => {
	return (
		<div className="flex flex-col">
			<BreadCrumbs />
			<h1 className="font-bold text-5xl text-center">Useful shortcuts</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
				<div className="text-center p-4 border-2 border-dark/50 dark:border-light/50 rounded shadow-buttonDark dark:shadow-buttonLight">
					<p>
						On this page you will find all the necessary keyboard shortcuts that
						will help you interact with the portal efficiently and quickly
					</p>
				</div>
				<div className="text-center p-4 border-2 border-dark/50 dark:border-light/50 rounded shadow-buttonDark dark:shadow-buttonLight">
					<p>
						Explore the available keymaps below to speed up your workflows and
						unlock the full potential of your interaction with the portal
					</p>
				</div>
			</div>

			<div className="mt-28">
				<Keymap />
			</div>
		</div>
	);
};

export default KeymapPage;
