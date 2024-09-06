import { FaRegArrowAltCircleRight } from "react-icons/fa";
import HomeButton from "@/components/UI/HomeButton";

export default function NotFound() {
	return (
		<div className="flex flex-col gap-4 items-center justify-center h-screen">
			<div className="flex flex-col items-center">
				<p className="text-8xl font bold">404</p>
				<p className="font-medium text-xl">Whoops, that page is gone</p>
			</div>

			<div className="max-w-md mx-auto mt-4">
				<HomeButton
					href="/"
					text="Go back to the home page"
					icon={<FaRegArrowAltCircleRight />}
				/>
			</div>
		</div>
	);
}
