"use client";

import * as React from "react";

interface ILabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
	children: React.ReactNode;
}

const Label: React.FC<ILabelProps> = ({ className, children, ...props }) => {
	return (
		<label {...props} className={`${className}`}>
			{children}
		</label>
	);
};

Label.displayName = "Label";

export { Label };
