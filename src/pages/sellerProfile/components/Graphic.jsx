import LineChart from "./charts/LineChart";
import React, { useState, useEffect, Suspense } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataDayStatistics } from '../../../redux/features/DayStatistics';
import ReactApexChart from "react-apexcharts";


import {
	lineChartOptionsTotalSpent,
} from "./charts/chartsVar";
import { t } from "i18next";



export default function TotalSpent({ className }) {
	const [value, setValue] = useState({
		startDate: new Date(),
		endDate: new Date().setMonth(11)
	});
	const [days, setDays] = useState();
	const data = useSelector((state) => state?.DayStatistics?.data);
	const dispatch = useDispatch();
	useEffect(() => {
		if(!data?.length > 0) dispatch(fetchDataDayStatistics());
		setDaysToStatistics();
	}, [data])



	const setDaysToStatistics = () => {
		const arr = []
		for (let i = 0; i < data?.length; i++) {
			// if(data[i] === undefined){
			// 	arr.push(0);
			// }else{
			// 	arr.push(data[i].income)
			// }
			arr.push(data[i])
			// arr.push(data[i]?.income)
		}
		setDays([{
			name: 'TMT',
			data: [...arr]
		}])
	}


	return (
		<div className={"bg-white p-5 shadow-lybas-1 rounded-lg " + className}>
			{/* <div className="graphic-header flex justify-between items-center">
				<div className="graphic-header_money">
					<div className="text-3xl font-bold">50 357 TMT</div>
					<div className="text-lybas-gray">{t('overalRevenue')}</div>
				</div>
				<div className="graphic-header_date relative border rounded-lg">
					<Datepicker value={value} onChange={handleValueChange} showShortcuts={true} primaryColor={"blue"} />
				</div>
			</div> */}
			<Suspense fallback={<p>Loading...</p>}>
				{/* <LineChart
					chartData={days ? days : [{ name: "TMT", data: [1, 2, 3] }]}
					chartOptions={lineChartOptionsTotalSpent}
				/> */}
				<ReactApexChart
					options={lineChartOptionsTotalSpent}
					series={days ? days : [{ name: "TMT", data: [1, 2, 3] }]}
					type='line'
					width='100%'
					height='100%'
				/>
			</Suspense>
		</div>
	);
}
