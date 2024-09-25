import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";

const buttonVariants = cva(
	"inline-flex items-center justify-center whitespace-nowrap rounded-lg font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50",
	{
		variants: {
			variant: {
				base: "dark:bg-[#ffffff] dark:text-[#42434D] bg-[#131316] text-[#ffffff] hover:opacity-90 ",
				secondary:
					"bg-black/10 text-black dark:bg-white/10 dark:text-white hover:opacity-90",
				outline:
					"border border-[#131316] dark:border-[#ffffff] text-[#131316] dark:text-[#ffffff] hover:bg-[#131316] dark:hover:bg-[#ffffff] hover:text-[#ffffff] dark:hover:text-[#131316]",
				ghost:
					"hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black",
				link: "underline-offset-4 hover:underline text-black dark:text-white",
			},
			size: {
				sm: "h-8 px-3",
				md: "h-9 px-6",
				lg: "h-10 px-8",
				xl: "h-12 px-10",
				icon: "h-10 w-10",
			},
			animation: {
				none: "",
				press: "active:animate-press",
				pulse: "animate-pulse",
				bounce: "animate-bounce",
				wiggle: "animate-wiggle",
			},
		},
		defaultVariants: {
			variant: "base",
			size: "md",
			animation: "none",
		},
	},
);

interface IButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	children: React.ReactNode;
}

const Button: React.FC<IButtonProps> = ({
	children,
	variant,
	size,
	animation,
	className,
	...props
}) => {
	return (
		<button
			className={buttonVariants({ size, variant, animation, className })}
			{...props}>
			{children}
		</button>
	);
};

Button.displayName = "Button";

export { Button, buttonVariants };
