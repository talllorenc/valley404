import React from "react";

interface ISpinnerProps {
	height?: string;
	width?: string;
}

const Spinner: React.FC<ISpinnerProps> = ({
	height = "24px",
	width = "24px",
}) => {
	return (
		<div
			style={{ height: height, width: width }}
			className="flex justify-center items-center">
			<div
				style={{ height: height, width: width }}
				className="border-2 border-t-2 border-gray-600 dark:border-gray-200 border-t-light dark:border-t-dark rounded-full animate-spin"></div>
		</div>
	);
};

export default Spinner;
