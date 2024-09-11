import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import AreaChartBlock from "@/components/Recharts/AreaChartBlock";
import PieChartBlock from "@/components/Recharts/PieChartBlock";

const DashboardPage = () => {
	return (
		<div className="flex flex-col">
			<BreadCrumbs />
			<h1 className="font-bold text-5xl text-center">Dashboard</h1>
			<div className="flex flex-col gap-4 mt-8">
				<div className="border border-dark/20 dark:border-light/20 p-4 rounded-xl">
					<h3 className="font-medium text-3xl text-center">
						Published solutions
					</h3>
					<AreaChartBlock />
				</div>

				<div className="border border-dark/20 dark:border-light/20 p-4 rounded-xl max-w-sm">
					<h3 className="font-medium text-3xl text-center">Likes & Comments</h3>
					<PieChartBlock />
				</div>
			</div>
		</div>
	);
};

export default DashboardPage;
