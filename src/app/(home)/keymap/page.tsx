import { Metadata } from "next";
import Layout from "@/components/Layout/Layout";
import KeymapPage from "@/components/Pages/KeymapPage";

export const metadata: Metadata = {
	title: "Keymap | Valley 404",
	description: "Valley 404 - Keymap",
	openGraph: {
		title: "Keymap | Valley 404",
		description: "Valley 404 - Keymap",
		url: "/keymap",
		siteName: "valley404",
		locale: "en",
		type: "website",
	},
};

const page = () => {
	return (
		<Layout>
			<KeymapPage />
		</Layout>
	);
};

export default page;
