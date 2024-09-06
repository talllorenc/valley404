"use client";

import React, { useEffect, useRef } from "react";
import EditorJS, { OutputData } from "@editorjs/editorjs";
import { EDITOR_TOOLS } from "@/components/EditorJs/EditorTools";

type Props = {
	data?: OutputData;
	onChange(val: OutputData): void;
	holder: string;
};

export default function EditorBlock({ data, onChange, holder }: Props) {
	const ref = useRef<EditorJS>();

	useEffect(() => {
		if (!ref.current) {
			const editor = new EditorJS({
				holder: holder,
				tools: EDITOR_TOOLS,
				data,
				async onChange(api, event) {
					const data = await api.saver.save();
					onChange(data);
				},
				hideToolbar: false,
				autofocus: true,
			});
			ref.current = editor;
		}

		return () => {
			if (ref.current && ref.current.destroy) {
				ref.current.destroy();
			}
		};
	}, []);

	return <div id={holder} className="prose max-w-full" />;
}
