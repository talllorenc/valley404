import Image from "next/image";
import {
	technologiesBackendArray,
	technologiesFrontendArray,
	technologiesIntegrationsArray,
} from "@/constants/technologies.array";

const Technologies = () => {
	return (
		<div className="flex flex-col">
			<div className="flex items-center flex-col justify-center gap-4 text-center">
				<h2 className="font-medium text-5xl text-center">Technologies</h2>
				<h3 className="text-dark/50 dark:text-light/50">
					Technologies that were used in the development of the portal
				</h3>
			</div>

			<div className="flex flex-col gap-12 mt-8">
				<div className="flex flex-col gap-4">
					<h3 className="font-medium text-3xl text-center">Frontend</h3>
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-8 gap-5">
						{technologiesFrontendArray.map((image) => (
							<div
								key={image.id}
								className="flex flex-col items-center border border-dark/50 dark:border-light/50 p-4 justify-between rounded-xl transition duration-200 hover:shadow-buttonDark dark:hover:shadow-buttonLight cursor-help">
								<Image
									src={image.src}
									alt={image.alt}
									width={50}
									height={50}
									className="w-14 h-14 mx-auto"
								/>
								<p className="mt-2 text-center font-medium">{image.desc}</p>
							</div>
						))}
					</div>
				</div>

				<div className="flex flex-col gap-4">
					<h3 className="font-medium text-3xl text-center">Backend</h3>
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-8 gap-5">
						{technologiesBackendArray.map((image) => (
							<div
								key={image.id}
								className="flex flex-col items-center border border-dark/50 dark:border-light/50 p-4 justify-between rounded-xl transition duration-200 hover:shadow-buttonDark dark:hover:shadow-buttonLight cursor-help">
								<Image
									src={image.src}
									alt={image.alt}
									width={50}
									height={50}
									className="w-14 h-14 mx-auto"
								/>
								<p className="mt-2 text-center font-medium">{image.desc}</p>
							</div>
						))}
					</div>
				</div>

				<div className="flex flex-col gap-4">
					<h3 className="font-medium text-3xl text-center">Integrations</h3>
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-8 gap-5">
						{technologiesIntegrationsArray.map((image) => (
							<div
								key={image.id}
								className="flex flex-col items-center border border-dark/50 dark:border-light/50 p-4 justify-between rounded-xl transition duration-200 hover:shadow-buttonDark dark:hover:shadow-buttonLight cursor-help">
								<Image
									src={image.src}
									alt={image.alt}
									width={50}
									height={50}
									className="w-14 h-14 mx-auto"
								/>
								<p className="mt-2 text-center font-medium">{image.desc}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Technologies;
