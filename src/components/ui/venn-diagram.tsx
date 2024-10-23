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
  const [hoveredInfo, setHoveredInfo] = useState<{ x: number; y: number; data: VennData | null }>({ x: 0, y: 0, data: null })
  const data: VennData[] = [
    { sets: ['TAM'], value: "108 Billion", description: "Total Addressable Market: The total market demand for a product or service" },
    { sets: ['SAM'], value: "15 Billion", description: "Serviceable Available Market: The segment of the TAM targeted by your products and services" },
    { sets: ['SOM'], value: "100 Million", description: "Serviceable Obtainable Market: The portion of SAM that you can capture" },
    { sets: ['TAM', 'SAM'], value: "120 Million", description: "Overlap between TAM and SAM" },
    { sets: ['TAM', 'SOM'], value: "90 Million", description: "Overlap between TAM and SOM" },
    { sets: ['SAM', 'SOM'], value: "80 Million", description: "Overlap between SAM and SOM" },
    { sets: ['TAM', 'SAM', 'SOM'], value: "50 Million", description: "Overlap between all three markets" },
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
        const chart = chartRef.current
        if (!chart) return
        
        const dataset = chart.data.datasets[0]
        if (!dataset) return

        if (elements.length > 0) {
          const element = elements[0]
          const index = element.index
          
          // Change the background color of the card
          const cardElement = document.querySelector('.market-venn-card') as HTMLElement
          if (cardElement) {
            cardElement.style.backgroundColor = hoverColors.backgrounds[index]
          }

          // Update only the hovered circle color
          const newColors = [...defaultColors]
          newColors[index] = hoverColors.colors[index]
          dataset.backgroundColor = newColors as ChartDatasetBackgroundColor
          
          if (event.native) {
            setHoveredInfo({
              x: (event.native as MouseEvent).clientX,
              y: (event.native as MouseEvent).clientY,
              data: data[index],
            })
          }
        } else {
          // Reset everything to default state
          const cardElement = document.querySelector('.market-venn-card') as HTMLElement
          if (cardElement) {
            cardElement.style.backgroundColor = 'white'
          }

          dataset.backgroundColor = defaultColors as ChartDatasetBackgroundColor
          setHoveredInfo({ x: 0, y: 0, data: null })
        }
        
        // Use requestAnimationFrame to avoid excessive updates
        requestAnimationFrame(() => {
          chart.update('none')
        })
      }
    },
  }

  useEffect(() => {
    const canvas = document.getElementById('marketVennChart') as HTMLCanvasElement
    const ctx = canvas.getContext('2d')
    if (ctx) {
      ctx.font = 'bold 16px Arial' // Make text bigger and bold
    }
    
    if (chartRef.current) {
      chartRef.current.destroy()
    }
    
    // Set canvas size to make circles bigger
    canvas.style.height = '200px'
    
    chartRef.current = new VennDiagramChart(canvas, config)
    
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy()
      }
    }
  }, [])

  return (
    <Card className="w-full max-w-4xl mx-auto relative market-venn-card" style={{ transition: 'background-color 0.3s ease' }}>
      <CardHeader className="mb-4">
        <CardTitle className="text-lg">Solving Language Accessibility Market Opportunity</CardTitle>
      </CardHeader>
      <CardContent>
        <canvas id="marketVennChart" aria-label="Market Venn Diagram" role="img" style={{ height: '400px' }}></canvas>
        {hoveredInfo.data && (
          <div
            className="absolute bg-white p-2 rounded text-sm"
            style={{
              position: 'fixed',
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
  )
}

export default MarketVennDiagram