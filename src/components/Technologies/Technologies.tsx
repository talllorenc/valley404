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
				<h2 className="font-bold text-4xl text-center uppercase">
					Technologies
				</h2>
				<h3 className="font-medium text-dark/50 dark:text-light/50">
					Technologies that were used in the development of the portal
				</h3>
			</div>

			<div className="flex flex-col gap-12 mt-12">
				<div className="flex flex-col gap-4">
					<h3 className="font-bold text-2xl text-center">FRONTEND</h3>
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-8 gap-5">
						{technologiesFrontendArray.map((image) => (
							<div
								key={image.id}
								className="flex flex-col items-center border border-dark/50 dark:border-light/50 p-4 justify-between rounded transition duration-200 hover:shadow-buttonDark dark:hover:shadow-buttonLight">
								<Image
									src={image.src}
									alt={image.alt}
									width={50}
									height={50}
									className="w-14 h-14 mx-auto"
								/>
								<p className="mt-2 text-center text-lg font-medium">
									{image.desc}
								</p>
							</div>
						))}
					</div>
				</div>

				<div className="flex flex-col gap-4">
					<h3 className="font-bold text-2xl text-center">BACKEND</h3>
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-8 gap-5">
						{technologiesBackendArray.map((image) => (
							<div
								key={image.id}
								className="flex flex-col items-center border border-dark/50 dark:border-light/50 p-4 justify-between rounded transition duration-200 hover:shadow-buttonDark dark:hover:shadow-buttonLight">
								<Image
									src={image.src}
									alt={image.alt}
									width={50}
									height={50}
									className="w-14 h-14 mx-auto"
								/>
								<p className="mt-2 text-center text-lg font-medium">
									{image.desc}
								</p>
							</div>
						))}
					</div>
				</div>

				<div className="flex flex-col gap-4">
					<h3 className="font-bold text-2xl text-center">INTEGRATIONS</h3>
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-8 gap-5">
						{technologiesIntegrationsArray.map((image) => (
							<div
								key={image.id}
								className="flex flex-col items-center border border-dark/50 dark:border-light/50 p-4 justify-between rounded transition duration-200 hover:shadow-buttonDark dark:hover:shadow-buttonLight">
								<Image
									src={image.src}
									alt={image.alt}
									width={50}
									height={50}
									className="w-14 h-14 mx-auto"
								/>
								<p className="mt-2 text-center text-lg font-medium">
									{image.desc}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Technologies;
