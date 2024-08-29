import Technologies from "@/components/Technologies/Technologies";
import Link from "next/link";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";

const AboutPage = () => {
	return (
		<div className="flex flex-col">
			<BreadCrumbs />
			<h1 className="font-keleti font-medium text-7xl text-center">About</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-5 font-keleti text-2xl mt-8">
				<div className="flex items-center flex-col gap-4 text-center p-4 border-2 border-dark/50 dark:border-light/50 rounded shadow-buttonDark dark:shadow-buttonLight">
					<p>
						Welcome to our portal, specially created for developers. Here you
						will find everything you need to{" "}
						<span className="text-[#5c699f] underline">
							<Link href="/solutions">solve your problem.</Link>
						</span>{" "}
						New solutions, tools and many more interesting things appear daily!
					</p>
				</div>

				<div className="flex items-center flex-col gap-4 text-center p-4 border-2 border-dark/50 dark:border-light/50 rounded shadow-buttonDark dark:shadow-buttonLight">
					<p>
						The portal was developed by{" "}
						<span className="text-[#e39347] underline">
							<a href="https://github.com/talllorenc" target="_blank">
								one person,
							</a>
						</span>{" "}
						so it is possible that there may be errors or bugs. I hope for your{" "}
						<span className="text-[#e39347] underline">
							<Link href="/contact">feedback,</Link>
						</span>{" "}
						because only together we can create something truly valuable!
					</p>
				</div>
			</div>

			<div className="mt-28">
				<Technologies />
			</div>
		</div>
	);
};

export default AboutPage;
