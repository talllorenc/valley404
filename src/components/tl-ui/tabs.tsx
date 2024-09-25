"use client";

import * as React from "react";

interface ITabsContext {
	activeTab: string;
	setActiveTab: (value: string) => void;
}

export interface ITabsProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
	defaultValue: string;
}

export interface ITabsListProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
}

export interface ITabProps extends React.HTMLAttributes<HTMLButtonElement> {
	value: string;
	children: React.ReactNode;
}

export interface ITabsContentProps
	extends React.HTMLAttributes<HTMLDivElement> {
	value: string;
	children: React.ReactNode;
}

// Create context for active tab
const TabsContext = React.createContext<ITabsContext>({
	activeTab: "",
	setActiveTab: () => {},
});

const Tabs: React.FC<ITabsProps> = ({
	children,
	defaultValue,
	className,
	...props
}) => {
	const [activeTab, setActiveTab] = React.useState(defaultValue);

	return (
		<TabsContext.Provider value={{ activeTab, setActiveTab }}>
			<div className={`flex flex-col ${className}`} {...props}>
				{children}
			</div>
		</TabsContext.Provider>
	);
};

const TabsList: React.FC<ITabsListProps> = ({
	children,
	className,
	...props
}) => {
	return (
		<div
			className={`flex overflow-x-auto p-1 items-center justify-start rounded-lg bg-black/10 dark:bg-white/10 transition-colors ${className}`}
			{...props}>
			{children}
		</div>
	);
};

const Tab: React.FC<ITabProps> = ({ value, children, className, ...props }) => {
	const { activeTab, setActiveTab } = React.useContext(TabsContext);

	return (
		<button
			className={`w-full items-center justify-center whitespace-nowrap h-8 px-6 transition-colors ${
				activeTab === value &&
				"bg-black dark:bg-white text-white dark:text-black rounded-lg"
			} ${className}`}
			onClick={() => setActiveTab(value)}
			{...props}>
			{children}
		</button>
	);
};

const TabsContent: React.FC<ITabsContentProps> = ({
	value,
	children,
	className,
	...props
}) => {
	const { activeTab } = React.useContext(TabsContext);

	return activeTab === value ? (
		<div className={`mt-4 ${className}`} {...props}>
			{children}
		</div>
	) : null;
};

export { Tabs, TabsList, Tab, TabsContent };
