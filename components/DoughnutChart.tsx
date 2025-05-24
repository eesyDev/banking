'use client';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const DoghnutChart = ({ accounts } : DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: "Banks",
        data: [1250, 3456, 890],
        backgroundColor: ['#0747b6', '#2265d8', '#2f91fa']
      }
    ],
    labels: ['Kaspi', 'Halyk', 'Freedom']
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