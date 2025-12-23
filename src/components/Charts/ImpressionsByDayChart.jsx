import { Line } from 'react-chartjs-2';

import * as S from './Charts.styled';

const ImpressionsByDayChart = () => {
  const totalImpressions = 6994653;

  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Impressions',
        data: [980000, 920000, 960000, 910000, 990000, 870000, 1070000],
        borderColor: '#6366F1',
        fill: true,
        tension: 0.1,
        pointRadius: 0, // to remove circles on data-points
        backgroundColor: (context) => {
          const { ctx, chartArea } = context.chart;
          if (!chartArea) return null;

          const gradient = ctx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom
          );

          gradient.addColorStop(0, "rgba(99,102,241,0.35)");
          gradient.addColorStop(1, "rgba(99,102,241,0)");

          return gradient;
        },
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: ctx => ctx.raw.toLocaleString(),
        },
      },
    },
    scales: { // to hide x/y axis marks
      x: { display: false },
      y: { display: false },
    },
  };

  return (
    <S.Card>
      <S.Title>Total Impressions by Day</S.Title>
      <S.TotalNumber>{totalImpressions.toLocaleString()}</S.TotalNumber>
      <Line data={data} options={options} />
    </S.Card>
  );
};

export default ImpressionsByDayChart;

