import Technologies from "@/components/Technologies/Technologies";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";

const AboutPage = () => {
	return (
		<div className="flex flex-col">
			<BreadCrumbs />
			<h1 className="font-bold text-5xl text-center">About</h1>
			<div className="flex flex-col gap-4 items-center justify-center text-center mt-8">
				<p>
					Welcome to Valley 404, a portal dedicated to providing a cutting-edge
					platform where technology meets innovation. Our mission is to create a
					hub for tech enthusiasts, developers, and creators to explore the
					latest in digital advancements and collaborate on groundbreaking
					projects.
				</p>

				<p>
					Whether you are a seasoned professional or just starting your journey,
					Valley 404 is your go-to destination for inspiration, knowledge, and
					growth. Join us in shaping the future of technology, one idea at a
					time.
				</p>
			</div>
			<div className="mt-28">
				<Technologies />
			</div>
		</div>
	);
};

export default AboutPage;
