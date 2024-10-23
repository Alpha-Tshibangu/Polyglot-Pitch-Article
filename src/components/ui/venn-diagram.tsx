"use client"
import React, { useEffect, useRef, useState } from 'react'
import { Chart, ChartEvent, ChartConfiguration, ActiveElement } from 'chart.js'
import { VennDiagramChart } from 'chartjs-chart-venn'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface VennData {
  sets: string[]
  value: string
  description: string
}

type ChartDatasetBackgroundColor = string | CanvasGradient | CanvasPattern | (string | CanvasGradient | CanvasPattern)[];

const MarketVennDiagram = () => {
  const chartRef = useRef<Chart | null>(null)
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [hoveredInfo, setHoveredInfo] = useState<{ x: number; y: number; data: VennData | null }>({ x: 0, y: 0, data: null })
  const data: VennData[] = [
    { sets: ['TAM'], value: "108 Billion", description: "The global market for language services and technology, including interpretation, translation, language learning tools, and AI language models, is estimated (conservatively) to be around $65-70 billion by 2025 and reach upwards of $104-129 billion by 2032. This broader market reflects the opportunity for multilingual communication technologies across various sectors, such as education, business, travel, media and events." },
    { sets: ['SAM'], value: "15 Billion", description: "AI-driven real-time translation tools have significant potential, particularly in verticals like business collaboration, education, and professional services, and could be a $12-15 billion global market by 2026. This market represents users who are working, collaborating, and communicating globally, such as in remote work, international education, and global businesses." },
    { sets: ['SOM'], value: "100 Million", description: "The initial target market includes small-to-medium businesses, event organisers, and universities that require real-time, multilingual communication. Within the next few years, revenue of $50-100 million is achievable by capturing a fraction of the businesses and institutions seeking seamless communication solutions." },
    { sets: ['TAM', 'SAM'], value: "120 Million", description: "The overlap between the TAM and the SAM is valued at $120 million, representing a small but significant portion of the broader AI-driven language services market. This figure suggests that approximately 0.2-0.3% of the larger TAM of $65-70 billion can be captured by AI-driven translation tools for global business and education sectors, reflecting their growing importance." },
    { sets: ['TAM', 'SOM'], value: "90 Million", description: "The overlap between TAM and the Serviceable Obtainable Market (SOM) is valued at $90 million, which represents a realistic opportunity to tap into SMBs and universities that require real-time multilingual solutions. By capturing around 0.1-0.2% of the TAM, these early adopters will drive initial revenue in the short term, reflecting the immediate potential within the broader market." },
    { sets: ['SAM', 'SOM'], value: "80 Million", description: "The overlap between SAM and SOM is projected at $80 million, targeting early adopters in the AI-driven translation space. Focusing on sectors like education and small-to-medium businesses, this segment represents around 0.5-0.7% of the overall SAM, showcasing the near-term opportunity to convert early demand into substantial revenue." },
    { sets: ['TAM', 'SAM', 'SOM'], value: "50 Million", description: "The intersection of TAM, SAM, and SOM is valued at $50 million, illustrating the combined opportunity for real-time AI translation solutions targeted at event organizers, SMBs, and universities. This reflects a potential capture of 0.07-0.1% of the broader TAM, emphasizing the opportunity to leverage early demand for long-term growth." },
  ]

  const defaultColor = 'rgba(200, 200, 200, 0.5)'
  const defaultColors = Array(data.length).fill(defaultColor)

  const hoverColors = {
    colors: [
      'rgba(178, 95, 118, 0.7)',    // Lighter rose pink
      'rgba(140, 161, 216, 0.7)',   // Lighter periwinkle
      'rgba(232, 222, 199, 0.7)',   // Lighter cream
      'rgba(144, 238, 144, 0.7)',   // Light green
      'rgba(255, 182, 193, 0.7)',   // Light pink
      'rgba(173, 216, 230, 0.7)',   // Light blue
      'rgba(221, 160, 221, 0.7)'    // Light purple
    ],
    backgrounds: [
      'rgba(178, 95, 118, 0.1)',    
      'rgba(140, 161, 216, 0.1)',   
      'rgba(232, 222, 199, 0.1)',   
      'rgba(144, 238, 144, 0.1)',   
      'rgba(255, 182, 193, 0.1)',   
      'rgba(173, 216, 230, 0.1)',   
      'rgba(221, 160, 221, 0.1)'    
    ]
  }

  const config: ChartConfiguration<'venn', VennData[]> = {
    type: 'venn',
    data: {
      labels: ['TAM', 'SAM', 'SOM', 'TAM ∩ SAM', 'TAM ∩ SOM', 'SAM ∩ SOM', 'TAM ∩ SAM ∩ SOM'],
      datasets: [{
        label: 'Market Opportunity',
        data: data,
        backgroundColor: defaultColors as ChartDatasetBackgroundColor,
        borderWidth: 1,
      }],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: false,
        },
      },
      onHover: (event: ChartEvent, elements: ActiveElement[]) => {
        const chart = chartRef.current;
        if (!chart) return;
        
        const dataset = chart.data.datasets[0];
        if (!dataset) return;
      
        if (elements.length > 0) {
          const element = elements[0];
          const index = element.index;
          
          const cardElement = document.querySelector('.market-venn-card') as HTMLElement;
          if (cardElement) {
            cardElement.style.backgroundColor = hoverColors.backgrounds[index];
          }
      
          const newColors = [...defaultColors];
          newColors[index] = hoverColors.colors[index];
          dataset.backgroundColor = newColors as ChartDatasetBackgroundColor;
          
          if (event.native && cardRef.current) {
            const x = (event.native as MouseEvent).clientX - 395;
            const y = (event.native as MouseEvent).clientY - 265;
            
            setHoveredInfo({
              x,
              y,
              data: data[index],
            });
          }
        } else {
          // Reset everything to default state
          const cardElement = document.querySelector('.market-venn-card') as HTMLElement;
          if (cardElement) {
            cardElement.style.backgroundColor = 'white';
          }
          
          dataset.backgroundColor = defaultColors as ChartDatasetBackgroundColor;
          setHoveredInfo({ x: 0, y: 0, data: null });
        }
        
        requestAnimationFrame(() => {
          chart.update('none');
        });
      }
    },
  }

  useEffect(() => {
    const canvas = document.getElementById('marketVennChart') as HTMLCanvasElement
    const ctx = canvas.getContext('2d')
    if (ctx) {
      ctx.font = 'bold 16px Arial'
    }
    
    if (chartRef.current) {
      chartRef.current.destroy()
    }
    
    // Add scroll handler that immediately hides tooltip
    const handleScroll = () => {
      setHoveredInfo({ x: 0, y: 0, data: null })
      const cardElement = document.querySelector('.market-venn-card') as HTMLElement
      if (cardElement) {
        cardElement.style.backgroundColor = 'white'
      }
      if (chartRef.current?.data.datasets[0]) {
        chartRef.current.data.datasets[0].backgroundColor = defaultColors as ChartDatasetBackgroundColor
        chartRef.current.update('none')
      }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    chartRef.current = new VennDiagramChart(canvas, config)
    
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy()
      }
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Card 
      ref={cardRef}
      className="w-full max-w-4xl mx-auto relative market-venn-card" 
      style={{ transition: 'background-color 0.3s ease' }}
    >
      <CardHeader className="mb-4">
        <CardTitle className="text-lg">
          <div className="border-l-4 border-grey pl-4 mt-4 mb-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Solving Language Accessibility Market Opportunity
            </h2>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="relative h-[500px] flex items-center justify-center">
        <canvas id="marketVennChart" aria-label="Market Venn Diagram" role="img"       style={{ 
          width: '100%',
          height: '100%',
          maxHeight: '450px'
        }}>
        </canvas>
        {hoveredInfo.data && (
          <div
            className="absolute bg-white p-2 rounded text-sm"
            style={{
              left: `${hoveredInfo.x}px`,
              top: `${hoveredInfo.y}px`,
              transform: 'translate(5px, 5px)',
              maxWidth: '200px',
              pointerEvents: 'none',
              zIndex: 50,
            }}
          >
            <h3 className="font-semibold">{hoveredInfo.data.sets.join(' ∩ ')}</h3>
            <p>Value: ${hoveredInfo.data.value}</p>
            <p className="text-xs mt-1">{hoveredInfo.data.description}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default MarketVennDiagram