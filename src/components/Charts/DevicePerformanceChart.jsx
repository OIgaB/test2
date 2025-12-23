import { Bar } from 'react-chartjs-2';

import * as S from './Charts.styled';

const DevicePerformanceChart = () => {
  const data = {
    labels: ['Roku', 'Fire TV', 'Apple TV', 'Samsung TV'], // x-axis
    datasets: [
      {
        label: 'Completed Views',
        data: [12000, 9000, 15000, 7000],
        backgroundColor: '#9e9ff3',
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
  };

  return (
    <S.Card>
      <S.Title>Performance by Device</S.Title>
      <Bar data={data} options={options} />
    </S.Card>
  );
};

export default DevicePerformanceChart;
