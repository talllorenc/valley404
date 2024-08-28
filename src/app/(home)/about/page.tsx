import Layout from "@/components/Layout/Layout";
import AboutPage from "@/components/Pages/AboutPage";
import { Metadata } from "next";
import ButtonLink from "@/components/UI/ButtonLink";
import { IoIosMail } from "react-icons/io";

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
				style={{ backgroundImage: 'url("/mainBg.png")' }}
				className="bg-cover bg-bottom bg-no-repeat min-h-[50vh] md:min-h-[60vh] overflow-hidden flex flex-col gap-4 items-center justify-center border-b-4 border-dark dark:border-light">
				<div className="flex flex-col items-center justify-center gap-2 p-4">
					<h1 className="font-bold text-4xl sm:text-6xl md:text-8xl font-keleti text-white">
						Welcome to Valley
						<span className="text-red-500">404</span>
					</h1>
					<p className="[background:linear-gradient(45deg,#f31260,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] rounded-2xl border border-transparent animate-border px-4 py-2 text-lg md:text-xl font-medium text-light text-center">
						Explore the valleys of programming starting here
					</p>
				</div>

				<div className="flex items-center">
					<ButtonLink href="" text="CONTACT ME" icon={<IoIosMail />} />
				</div>
			</div>
			<Layout>
				<AboutPage />
			</Layout>
		</div>
	);
};

export default page;
