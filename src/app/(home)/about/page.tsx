import Layout from "@/components/Layout/Layout";
import { Metadata } from "next";
import AboutPage from "@/components/Pages/AboutPage";
import SocialsMenu from "@/components/SotialsMenu/SotialsMenu";
import { CiMail } from "react-icons/ci";
import Link from "next/link";
import { Button } from "@/components/tl-ui/button";

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
			<div className="relative bg-light dark:bg-dark">
				<div
					style={{ backgroundImage: 'url("/About/mainBg.png")' }}
					className="bg-cover bg-bottom bg-no-repeat min-h-[70vh] overflow-hidden blur-xl"></div>
				<div className="absolute bottom-0 right-4 z-20">
					<SocialsMenu />
				</div>
				<div className="absolute inset-0 flex items-center justify-center flex-col gap-8">
					<p className="text-white text-4xl md:text-6xl font-bold uppercase text-center">
						Your adventure begins here
					</p>

					<div className="flex items-center gap-4">
						<Link href="/solutions">
							<Button>Solutions</Button>
						</Link>
						{/* <Link
							href="/contacts"
							className="flex items-center gap-2 text-light bg-dark hover:opacity-80 transition duration-200 px-4 py-1 rounded-xl">
							<Button variant="outline">
								<CiMail className="mr-2" />
								Contact
							</Button>
						</Link> */}
					</div>
				</div>
			</div>
			<Layout>
				<AboutPage />
			</Layout>
		</div>
	);
};

export default page;
