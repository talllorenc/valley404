"use client";

import { useRef, useState } from "react";

const VerifyCodeBar = () => {
	const [code, setCode] = useState<string>("");

	const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		index: number,
	) => {
		console.log(e.target.value);
	};

	return (
		<div>
			<div className="grid grid-cols-4 gap-4">
				{[0, 1, 2, 3].map((index) => (
					<input
						className="p-4 rounded-xl dark:bg-dark/50 bg-light/50 backdrop-blur-2xl text-center text-2xl font-bold appearance-none focus:outline-none focus:ring-2 focus:ring-dark dark:focus:ring-light"
						key={index}
						type="text"
						maxLength={1}
						onChange={(e) => handleInputChange(e, index)}
						autoFocus={index === 0}
					/>
				))}
			</div>
		</div>
	);
};

export default VerifyCodeBar;
