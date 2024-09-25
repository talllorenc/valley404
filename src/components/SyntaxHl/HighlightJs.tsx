"use client";

import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";
import { useEffect, useRef } from "react";

const HighlightJs = ({ codeBlock }: { codeBlock: string }) => {
	const codeRef = useRef<HTMLElement>(null);

	useEffect(() => {
		if (codeRef.current) {
			hljs.highlightElement(codeRef.current);
		}
	}, []);

	return (
		<pre>
			<code ref={codeRef}>{codeBlock}</code>
		</pre>
	);
};

export default HighlightJs;
