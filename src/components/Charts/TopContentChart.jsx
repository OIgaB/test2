import { Bar } from "react-chartjs-2";

import * as S from './Charts.styled';

const TopContentChart = () => {
  const data = {
    labels: [
      "The Walking Dead",
      "Portlandia",
      "Sister Wives",
      "Ghost Adventures",
      "American Monster",
      "Bridezillas",
      "Beat Bobby Flay",
    ],
    datasets: [
      {
        label: "Impressions",
        data: [99633, 71574, 62995, 51098, 42675, 42328, 41609],
        backgroundColor: "#fa8f2c",
        borderRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: "y", // horizontal bars
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx) => ctx.raw.toLocaleString(),
        },
      },
    },
    scales: {
      x: {
        ticks: {
          callback: (value) => value.toLocaleString(),
        },
      },
    },
  };

  return (
    <S.Card>
      <S.Title>Top Content</S.Title>
      <Bar data={data} options={options} />
    </S.Card>
  );
};

export default TopContentChart;
