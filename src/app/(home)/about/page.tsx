import Layout from "@/components/Layout/Layout";
import AboutPage from "@/components/Pages/AboutPage";
import { Metadata } from "next";
import SotialsMenu from "@/components/SotialsMenu/SotialsMenu";

export const metadata: Metadata = {
	title: "About portal | Valley 404",
	description: "Valley 404 - About us",
	openGraph: {
		title: "About portal | Valley 404",
		description: "Valley 404 - About us",
		url: "/about",
		siteName: "valley404",
		locale: "en",
		type: "website",
	},
};

const page = () => {
	return (
		<div>
			<div
				style={{ backgroundImage: 'url("/About/mainBg.png")' }}
				className="bg-cover bg-bottom bg-no-repeat min-h-[50vh] md:min-h-[50vh] overflow-hidden flex flex-col gap-4 items-end justify-center border-b-4 border-dark dark:border-light">
				<SotialsMenu />
			</div>
			<Layout>
				<AboutPage />
			</Layout>
		</div>
	);
};

export default page;
