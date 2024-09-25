"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { useState } from "react";
import { IoCheckmarkOutline, IoCopyOutline } from "react-icons/io5";

interface IProps {
	codeBlock: string;
	title?: string;
	icon?: React.ReactNode;
}

const SyntaxHl = ({ codeBlock, title, icon }: IProps) => {
	const [isCopied, setIsCopied] = useState<boolean>(false);

	const copyToClipboard = async () => {
		try {
			await navigator.clipboard.writeText(codeBlock);
			setIsCopied(true);
			setTimeout(() => {
				setIsCopied(false);
			}, 2000);
		} catch (error) {
			console.error("Failed to copy text:", error);
		}
	};

	return (
		<div className="flex flex-col rounded-lg border border-white/20">
			<div className="flex justify-between items-center bg-[#0d1116] py-2 px-4 rounded-t-lg border-b border-white/20 text-white/50">
				<div className="flex items-center gap-2 ">
					{icon}
					<p>{title}</p>
				</div>

				<button
					disabled={isCopied}
					onClick={copyToClipboard}
					className="text-lg p-1 border border-white/20 rounded-lg hover:bg-white/20 cursor-pointer disabled:cursor-not-allowed">
					{isCopied ? <IoCheckmarkOutline /> : <IoCopyOutline />}
				</button>
			</div>

			<SyntaxHighlighter language="typescript" style={dracula}>
				{codeBlock}
			</SyntaxHighlighter>
		</div>
	);
};

export default SyntaxHl;
