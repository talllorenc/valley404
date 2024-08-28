import Technologies from "@/components/Technologies/Technologies";

const AboutPage = () => {
	return (
		<div className="flex flex-col">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
				<div className="flex items-center text-center p-4 border-2 border-dark/50 dark:border-light/50 rounded shadow-buttonDark dark:shadow-buttonLight">
					<p>
						Welcome to our portal, specially created for developers. Here you
						will find everything you need to solve your problem. New solutions,
						tools and many more interesting things appear daily
					</p>
				</div>

				<div className="flex items-center flex-col gap-4 text-center p-4 border-2 border-dark/50 dark:border-light/50 rounded shadow-buttonDark dark:shadow-buttonLight">
					<p>
						The portal was developed by one person, so it is possible that there
						may be errors or bugs. I hope for your feedback, because only
						together we can create something truly valuable
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
