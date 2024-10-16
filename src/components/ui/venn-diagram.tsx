import React, { useEffect, useRef } from 'react';
import { VennDiagramChart } from 'chartjs-chart-venn';

const MarketVennDiagram = () => {
  const chartRef = useRef<any>(null); // Create a ref to store the chart instance

  // Configuration for the Venn diagram with TAM, SAM, and SOM
  const config = {
    type: 'venn', // Type of diagram: venn or euler
    data: {
      labels: [
        'TAM', // Total Addressable Market
        'SAM', // Serviceable Available Market
        'SOM', // Serviceable Obtainable Market
        'TAM ∩ SAM', // Intersection of TAM and SAM
        'TAM ∩ SOM', // Intersection of TAM and SOM
        'SAM ∩ SOM', // Intersection of SAM and SOM
        'TAM ∩ SAM ∩ SOM' // Intersection of all three markets
      ],
      datasets: [
        {
          label: 'Market Opportunity',
          data: [
            { sets: ['TAM'], value: "$108 Billion" }, // TAM: $108 billion
            { sets: ['SAM'], value: "$15 Billion" }, // SAM: $12-15 billion
            { sets: ['SOM'], value: "$100 Million" }, // SOM: $50-100 million
            { sets: ['TAM', 'SAM'], value: "$120 Million" }, // Intersection between TAM and SAM
            { sets: ['TAM', 'SOM'], value: "$90 Million" }, // Intersection between TAM and SOM
            { sets: ['SAM', 'SOM'], value: "$80 Million" }, // Intersection between SAM and SOM
            { sets: ['TAM', 'SAM', 'SOM'], value: "$50 Million" } // Intersection of TAM, SAM, and SOM
          ]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Polyglot Market Opportunity'
      },
      tooltips: {
        callbacks: {
          label: function (tooltipItem, data) {
            const dataset = data.datasets[tooltipItem.datasetIndex];
            const label = data.labels[tooltipItem.index];
            const value = dataset.data[tooltipItem.index].value;
            return `${label}: $${value}M`; // Format the tooltip
          }
        }
      }
    }
  };

  useEffect(() => {
    const ctx = document.getElementById('marketVennChart') as HTMLCanvasElement;

    // Destroy the previous chart instance if it exists
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    // Create a new chart instance and store it in the ref
    chartRef.current = new VennDiagramChart(ctx, config);

    // Clean up the chart on component unmount
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="market-venn-diagram">
      <canvas id="marketVennChart"></canvas>
    </div>
  );
};

export default MarketVennDiagram;
