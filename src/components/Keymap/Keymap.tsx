import { keymapNavigationArray } from "@/constants/keymap.array";

const Keymap = () => {
	return (
		<div className="flex flex-col">
			<div className="flex items-center justify-center text-center font-keleti">
				<h2 className="font-medium text-5xl text-center">Keymap types</h2>
			</div>

			<div className="flex flex-col gap-12 mt-8">
				<h2 className="font-medium text-3xl text-center">Navigation</h2>
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-8 gap-5 cursor-help">
					{keymapNavigationArray.map((item) => (
						<div
							key={item.id}
							className="flex flex-col gap-2 items-center text-center border border-[#3e3c3c] p-1 rounded transition duration-200 hover:shadow-buttonDark dark:hover:shadow-buttonLight">
							<p className="text-2xl font-bold bg-[#535151] dark:bg-[#2a2828] border border-[#3e3c3c] px-2 text-light rounded-full">
								{item.key}
							</p>
							<p className="text-xs font-medium">{item.desc}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Keymap;
