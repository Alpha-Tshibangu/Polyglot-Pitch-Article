import React, { useEffect, useRef } from 'react';
import { Chart, TooltipItem, ChartConfiguration, TooltipModel } from 'chart.js';
import { VennDiagramChart } from 'chartjs-chart-venn';

// Define the type for the dataset's data structure
interface VennData {
  sets: string[];
  value: string;
}

const MarketVennDiagram = () => {
  const chartRef = useRef<Chart | null>(null); // Create a ref to store the chart instance

  // Configuration for the Venn diagram with TAM, SAM, and SOM
  const config: ChartConfiguration<'venn', VennData[]> = {
    type: 'venn',
    data: {
      labels: [
        'TAM', // Total Addressable Market
        'SAM', // Serviceable Available Market
        'SOM', // Serviceable Obtainable Market
        'TAM ∩ SAM', // Intersection of TAM and SAM
        'TAM ∩ SOM', // Intersection of TAM and SOM
        'SAM ∩ SOM', // Intersection of SAM and SOM
        'TAM ∩ SAM ∩ SOM', // Intersection of all three markets
      ],
      datasets: [
        {
          label: 'Market Opportunity',
          data: [
            { sets: ['TAM'], value: "$108 Billion" },
            { sets: ['SAM'], value: "$15 Billion" },
            { sets: ['SOM'], value: "$100 Million" },
            { sets: ['TAM', 'SAM'], value: "$120 Million" },
            { sets: ['TAM', 'SOM'], value: "$90 Million" },
            { sets: ['SAM', 'SOM'], value: "$80 Million" },
            { sets: ['TAM', 'SAM', 'SOM'], value: "$50 Million" },
          ],
        },
      ],
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: 'Polyglot Market Opportunity',
        },
        tooltip: {
          callbacks: {
            label: function (
              this: TooltipModel<'venn'>, // The `this` context for the tooltip model
              tooltipItem: TooltipItem<'venn'>
            ) {
              const dataset = this.chart.data.datasets![tooltipItem.datasetIndex!];
              const label = this.chart.data.labels![tooltipItem.dataIndex!];
              const value = (dataset.data as VennData[])[tooltipItem.dataIndex!].value;
              return `${label}: $${value}M`;
            },
          },
        },
      },
    },
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
