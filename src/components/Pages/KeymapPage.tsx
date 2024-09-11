import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import Keymap from "@/components/Keymap/Keymap";

const KeymapPage = () => {
	return (
		<div className="flex flex-col">
			<BreadCrumbs />
			<h1 className="font-bold text-5xl text-center">Useful shortcuts</h1>
			<div className="flex flex-col mt-8 text-center">
				<p>
					On this page you will find all the necessary keyboard shortcuts that
					will help you interact with the portal efficiently and quickly.
					Explore the available keymaps below to speed up your workflows and
					unlock the full potential of your interaction with the portal
				</p>
			</div>

			<div className="mt-28">
				<Keymap />
			</div>
		</div>
	);
};

export default KeymapPage;
