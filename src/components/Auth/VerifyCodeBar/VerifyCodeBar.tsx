"use client";

import { useEffect, useRef, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { checkCode } from "@/services/auth.service";
import FormErrors from "@/components/Auth/FormErrors/FormErrors";
import FormSuccess from "@/components/Auth/FormSuccess/FormSuccess";
import Spinner from "@/components/UI/Spinner";

const VerifyCodeBar = () => {
	const [serverError, setServerError] = useState<string | null>(null);
	const [successMessage, setSuccessMessage] = useState<string | null>(null);
	const [code, setCode] = useState<string[]>(["", "", "", ""]);
	const inputRefs = [
		useRef<HTMLInputElement>(null),
		useRef<HTMLInputElement>(null),
		useRef<HTMLInputElement>(null),
		useRef<HTMLInputElement>(null),
	];

	const { mutate, isPending } = useMutation({
		mutationFn: checkCode,
		onSuccess: () => {
			setServerError(null);
			setSuccessMessage("Verification successful. You can now sign in");
		},
		onError: (error: any) => {
			setServerError(
				error.response?.data?.message ||
					"Something went wrong. Please try again.",
			);
		},
	});

	useEffect(() => {
		if (code.every((item) => item !== "")) {
			mutate(code.join(""));
		}
	}, [code]);

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		index: number,
	) => {
		const value = e.target.value;

		setCode((prev) => {
			const newCode = [...prev];
			newCode[index] = value;
			return newCode;
		});

		if (value && index < inputRefs.length - 1) {
			inputRefs[index + 1].current?.focus();
		}
	};

	const handleKeyDown = (
		e: React.KeyboardEvent<HTMLInputElement>,
		index: number,
	) => {
		if (e.key === "Backspace" && !code[index] && index > 0) {
			inputRefs[index - 1].current?.focus();
		}
	};

	const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
		e.preventDefault();
		const pastedData = e.clipboardData.getData("Text");
		if (pastedData.length === 4) {
			setCode(pastedData.split(""));
		}
	};

	if (isPending) {
		return (
			<div className="flex items-center justify-center">
				<Spinner weight="64px" height="64px" />
			</div>
		);
	}

	return (
		<div className="flex flex-col gap-4">
			<div className="grid grid-cols-4 gap-4">
				{[0, 1, 2, 3].map((index) => (
					<input
						className="p-4 rounded-xl dark:bg-dark/50 bg-light/50 backdrop-blur-2xl text-center text-2xl font-bold appearance-none focus:outline-none focus:ring-2 focus:ring-dark dark:focus:ring-light"
						key={index}
						type="text"
						ref={inputRefs[index]}
						value={code[index]}
						maxLength={1}
						onChange={(e) => handleInputChange(e, index)}
						onKeyDown={(e) => handleKeyDown(e, index)}
						autoFocus={index === 0}
						onPaste={handlePaste}
					/>
				))}
			</div>

			{serverError && <FormErrors message={serverError} />}
			{successMessage && <FormSuccess message={successMessage} />}
		</div>
	);
};

export default VerifyCodeBar;
