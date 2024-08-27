import Technologies from "@/components/Technologies/Technologies";

const AboutPage = () => {
	return (
		<div className="flex flex-col gap-12">
			<div className="text-center flex flex-col">
				<p>
					Welcome to our portal, specially created for developers. Here you will
					find everything you need to solve your problem.
				</p>
				<p>
					The portal was developed by one person, so it is possible that there
					may be errors or bugs. I hope for your feedback, because only together
					we can create something truly valuable
				</p>
			</div>

			<Technologies />
		</div>
	);
};

export default AboutPage;
