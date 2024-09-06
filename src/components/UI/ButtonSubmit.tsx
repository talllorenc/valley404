import Spinner from "@/components/UI/Spinner";
import { ISubmitButtonProps } from "@/types/button.ui";

const ButtonSubmit = ({
	text,
	icon,
	isDisabled,
	onClick,
}: ISubmitButtonProps) => {
	return (
		<button
			onClick={onClick}
			type="submit"
			className={`flex items-center justify-center border border-light/50 dark:border-dark/50 bg-dark dark:bg-light text-light dark:text-dark hover:opacity-80 transition duration-200 px-4 py-1 rounded-xl ${isDisabled ? "cursor-not-allowed opacity-80" : "cursor-pointer"}`}>
			{isDisabled ? (
				<Spinner />
			) : (
				<div className="flex items-center justify-center gap-2">
					{text}
					{icon && <div>{icon}</div>}
				</div>
			)}
		</button>
	);
};

export default ButtonSubmit;
