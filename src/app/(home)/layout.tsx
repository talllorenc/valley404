import Navbar from "@/components/Navbar/Navbar";

export default async function HomeLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex-grow flex-1 flex flex-col pt-[72px] overflow-x-hidden">
			<Navbar />
			{children}
		</div>
	);
}
