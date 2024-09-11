"use client";

import {
	Area,
	AreaChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";

const data = [
	{
		month: "January",
		solutions: 20,
	},
	{
		month: "June",
		solutions: 8,
	},
	{
		month: "April",
		solutions: 37,
	},
	{
		month: "March",
		solutions: 18,
	},
];

const AreaChartBlock = () => {
	return (
		<ResponsiveContainer width="100%" height={300}>
			<AreaChart data={data}>
				<YAxis dataKey="solutions" />
				<XAxis dataKey="month" />
				<Tooltip content={<CustomTooltip />} />

				<Area
					type="monotone"
					dataKey="solutions"
					fill="#6495ED"
					stroke="#64ed9a"
					strokeWidth={2}
					dot={{ stroke: "#64ed9a", strokeWidth: 4, fill: "#64ed9a" }}
					activeDot={{ r: 8 }}
				/>
			</AreaChart>
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
				<p className="font-bold text-[#6495ED]">{label}</p>
				<div className="flex items-center gap-2">
					<p>Solutions</p>
					<span className="font-bold border border-[#64ed9a] px-1 rounded-xl text-[#64ed9a]">
						{payload[0].value}
					</span>
				</div>
			</div>
		);
	}
};

export default AreaChartBlock;
