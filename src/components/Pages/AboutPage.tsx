import Technologies from "@/components/Technologies/Technologies";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";

const AboutPage = () => {
	return (
		<div className="flex flex-col">
			<BreadCrumbs />
			<h1 className="font-bold text-5xl text-center">About</h1>

			<div className="mt-28">
				<Technologies />
			</div>
		</div>
	);
};

export default AboutPage;
