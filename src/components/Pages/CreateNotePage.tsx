"use client";

import { useState } from "react";
import { OutputData } from "@editorjs/editorjs";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("@/components/EditorJs/Editor"), {
	ssr: false,
});

const CreateNotePage = () => {
	const [data, setData] = useState<OutputData>();

	const handleDataChange = (newData: OutputData) => {
		setData(newData);
	};
	return (
		<div>
			<Editor
				data={data}
				onChange={handleDataChange}
				holder="editor-container"
			/>
		</div>
	);
};

export default CreateNotePage;
