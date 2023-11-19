import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const VoteChart = ({ data }) => {
  const chartRef = useRef();

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        datasets: [
          {
            label: 'Votes',
            data: data,
            backgroundColor: ['#458EE6', '#34D399', '#EF4444', '#6B7280'],
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      chart.destroy();
    };
  }, [data]);

  return (
    <div className="w-full max-w-md">
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default VoteChart;
