export interface IButtonLink {
	href: string;
	text: string;
	icon?: React.ReactNode;
}

export interface ISubmitButtonProps {
	text: string;
	icon?: React.ReactNode;
	isDisabled?: boolean;
	onClick?: () => void;
}
