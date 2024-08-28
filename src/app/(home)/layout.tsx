import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default async function HomeLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex-grow flex-1 flex flex-col pt-[65px] overflow-x-hidden">
			<Navbar />
			{children}
			<Footer />
		</div>
	);
}
