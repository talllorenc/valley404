import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CookiePanel from "@/components/CookiePanel/CookiePanel";

export default async function HomeLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex-grow flex-1 flex flex-col pt-[65px] overflow-x-hidden">
			<Navbar />
			{children}
			<CookiePanel />
			<Footer />
		</div>
	);
}
