export default function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="relative bg-light flex items-center dark:bg-dark min-h-screen overflow-hidden">
			<div
				className="absolute z-0 top-0 left-0 right-0 bottom-0 overflow-hidden blur-[50px] sm:blur-[100px] select-none pointer-events-none"
				role="region">
				<div className="grad grad-1"></div>
				<div className="grad grad-2"></div>
				<div className="grad grad-3"></div>
			</div>

			<div className="relative max-w-md mx-auto w-full">{children}</div>
		</div>
	);
}
