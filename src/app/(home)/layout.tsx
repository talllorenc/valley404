import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";

export default async function HomeLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex-grow flex-1 flex flex-col pt-[65px] overflow-x-hidden">
			<Navbar />
			<BreadCrumbs />
			{children}
			<Footer />
		</div>
	);
}
