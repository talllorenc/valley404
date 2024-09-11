"use client";

import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
	{
		label: "Likes",
		value: 13,
	},
	{
		label: "Comments",
		value: 52,
	},
];

const PieChartBlock = () => {
	return (
		<ResponsiveContainer width="100%" height={300}>
			<PieChart>
				<Tooltip content={<CustomTooltip />} />
				<Pie
					data={data}
					dataKey="value"
					nameKey="label"
					outerRadius={100}
					fill="#64ed9a"
					label={({ name }) => name}
				/>
			</PieChart>
		</ResponsiveContainer>
	);
};

interface CustomTooltipProps {
	active?: boolean;
	payload?: {
		value: number;
	}[];
	label?: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
	if (active && payload && payload.length) {
		return (
			<div className="bg-dark dark:bg-light text-light dark:text-dark p-4 rounded-xl border border-light/20 dark:border-dark/20 text-lg">
				<div className="flex items-center gap-2">
					<span className="font-bold border border-[#64ed9a] px-1 rounded-xl text-[#64ed9a]">
						{payload[0].value}
					</span>
				</div>
			</div>
		);
	}
};

export default PieChartBlock;
