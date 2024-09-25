"use client";

import * as React from "react";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	error?: string | undefined;
	touched?: boolean | undefined;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const Input: React.FC<IInputProps> = ({
	touched,
	error,
	className,
	...props
}) => {
	return (
		<div className="flex gap-1 flex-col w-full">
			<input
				autoComplete="off"
				{...props}
				className={`bg-transparent border-2 text-black dark:text-white rounded-lg px-4 h-9 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white placeholder-black/50 dark:placeholder-white/50 disabled:cursor-not-allowed disabled:opacity-50 ${className} ${
					error && touched
						? "border-[#FF3333]"
						: "border-transparent"
				}`}
			/>
			{touched && error && (
				<span className="text-[#B00000] dark:text-[#FF3333] text-sm">
					{error}
				</span>
			)}
		</div>
	);
};

Input.displayName = "Input";

export { Input };
