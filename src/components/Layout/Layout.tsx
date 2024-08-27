"use client";

type PropsType = {
	children: React.ReactNode;
};

const Layout = ({ children }: PropsType) => {
	return (
		<main className="flex-1 flex flex-col">
			<section className="flex-1 container xs:py-16 sm:py-16 lg:py-20">
				{children}
			</section>
		</main>
	);
};

export default Layout;
