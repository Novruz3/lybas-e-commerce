export const lineChartDataTotalSpent = [
  {
    name: "TMT",
    data: ['1321TMT', '323TMT', '123TMT', 66, 49, 68, '2321TMT', '223TMT', '523TMT', 66, 49, 68, '321TMT', '123TMT', '23TMT', 66, 49, 68, '2321TMT', '123TMT', '12TMT', 66, 49, 68, '2321TMT', '123TMT', '123TMT', 66, 49, 68,],
  },
];

export const lineChartOptionsTotalSpent = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  colors: ["#4318FF"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    type: "line",
  },
  xaxis: {
    categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
    labels: {
      style: {
        colors: "#A3AED0",
        fontSize: "12px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: true,
    },
  },
  yaxis: {
    show: false,
  },
  legend: {
    show: false,
  },
  grid: {
    show: false,
    column: {
      color: ["#7551FF", "#39B8FF"],
      opacity: 0.5,
    },
  },
  color: ["#7551FF", "#39B8FF"],
};
