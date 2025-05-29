'use client';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const DoghnutChart = ({ accounts } : DoughnutChartProps) => {
  const accountName = accounts.map(a => a.name);
  const balances = accounts.map(a => a.currentBalance);
  const data = {
    datasets: [
      {
        label: "Banks",
        data: balances,
        backgroundColor: ['#0747b6', '#2265d8', '#2f91fa']
      }
    ],
    labels: accountName
  }
  return (
        <Doughnut 
          data={data} 
          options={{
            cutout: '70%',
            plugins: {
              legend: {
                display: false
              }
            }
          }}
        />
  )
}

export default DoghnutChart