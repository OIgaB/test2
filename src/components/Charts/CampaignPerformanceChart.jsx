import { Line } from 'react-chartjs-2';

import * as S from './Charts.styled';

const CampaignPerformanceChart = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], // x-axis
    datasets: [
      {
        label: 'Impressions', // dataset label (legend)
        data: [12000, 24000, 18000, 22000, 26000, 30000, 34000],
        borderColor: '#5a94eb',
        backgroundColor: 'rgba(70, 139, 229, 0.2)',
        tension: 0.4, // bezier curve tension - controls how tightly or loosely the curve bends between its control points
        // softnes/sharpness of angles
      },
      {
        label: 'Completed Views',
        data: [4000, 5000, 6500, 7000, 8500, 9000, 14000],
        borderColor: '#6ab910',
        backgroundColor: 'rgba(109, 189, 17, 0.2)',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <S.Card>
      <S.Title>Campaign Performance Over Time</S.Title>
      <Line data={data} options={options} />
    </S.Card>
  );
};

export default CampaignPerformanceChart;
