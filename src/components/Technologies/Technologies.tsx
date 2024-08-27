import Image from "next/image";

const images = [
	{
		id: 1,
		src: "/Technologies/next-js.svg",
		alt: "next-js image",
		desc: "Next.js",
	},
	{
		id: 2,
		src: "/Technologies/typescript.svg",
		alt: "typescript image",
		desc: "TypeScript",
	},
	{
		id: 3,
		src: "/Technologies/tailwind.svg",
		alt: "tailwind image",
		desc: "Tailwind",
	},
	{
		id: 4,
		src: "/Technologies/nodejs.svg",
		alt: "nodejs image",
		desc: "Node.js",
	},
	{
		id: 5,
		src: "/Technologies/mongodb.svg",
		alt: "mongodb image",
		desc: "MongoDB",
	},
	{
		id: 6,
		src: "/Technologies/postgresql.svg",
		alt: "postgresql image",
		desc: "PostgreSQL",
	},
];

const Technologies = () => {
	return (
		<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-8 gap-5">
			{images.map((image) => (
				<div
					key={image.id}
					className="flex flex-col items-center border px-8 py-4 justify-between rounded transition duration-200 hover:shadow-buttonDark dark:hover:shadow-buttonLight">
					<Image src={image.src} alt={image.alt} width={50} height={50} />
					<p className="mt-2 text-center text-lg font-medium">{image.desc}</p>
				</div>
			))}
		</div>
	);
};

export default Technologies;
