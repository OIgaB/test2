import { Doughnut } from 'react-chartjs-2';

import * as S from './Charts.styled';

const CompletedViewsByDeviceChart = () => {
  const data = {
    labels: ['Roku', 'Fire TV', 'Apple TV', 'Samsung TV'],
    datasets: [
      {
        label: 'Completed Views',
        data: [12000, 9000, 15000, 7000],
        backgroundColor: ['#e546c3a2', '#e74388ae', '#818df89d', '#f1b739c1'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const value = context.raw;
            return `${value.toLocaleString()} completed views`;
          },
        },
      },
    },
    cutout: '65%', // what portion of the inner should be cut out
  };

  return (
    <S.Card>
      <S.Title>Completed Views by Device</S.Title>
      <Doughnut data={data} options={options} />
    </S.Card>
  );
};

export default CompletedViewsByDeviceChart;
