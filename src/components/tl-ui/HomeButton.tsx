import Link from "next/link";
import { Button } from "@/components/tl-ui/button";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const HomeButton = () => {
	return (
		<Link href="/">
			<Button className="w-full">
				Go back to the home page
				<FaRegArrowAltCircleRight className="ml-2" />
			</Button>
		</Link>
	);
};

export default HomeButton;
