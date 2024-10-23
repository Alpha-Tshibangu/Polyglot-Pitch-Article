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

  const hoverColors = [
    'rgba(255, 99, 132, 0.8)',
    'rgba(54, 162, 235, 0.8)',
    'rgba(255, 206, 86, 0.8)',
    'rgba(75, 192, 192, 0.8)',
    'rgba(153, 102, 255, 0.8)',
    'rgba(255, 159, 64, 0.8)',
    'rgba(199, 199, 199, 0.8)',
  ]

  const config: ChartConfiguration<'venn', VennData[]> = {
    type: 'venn',
    data: {
      labels: ['TAM', 'SAM', 'SOM', 'TAM ∩ SAM', 'TAM ∩ SOM', 'SAM ∩ SOM', 'TAM ∩ SAM ∩ SOM'],
      datasets: [{
        label: 'Market Opportunity',
        data: data,
        backgroundColor: 'rgba(200, 200, 200, 0.5)',
        hoverBackgroundColor: hoverColors,
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
        if (elements.length > 0) {
          const element = elements[0]
          const index = element.index
          const rect = chart.canvas.getBoundingClientRect()
          if (event.native) {
            setHoveredInfo({
              x: (event.native as MouseEvent).clientX,
              y: (event.native as MouseEvent).clientY,
              data: data[index],
            })
          }
        } else {
          setHoveredInfo({ x: 0, y: 0, data: null })
        }
      }
    },
  }

  useEffect(() => {
    const ctx = document.getElementById('marketVennChart') as HTMLCanvasElement
    if (chartRef.current) {
      chartRef.current.destroy()
    }
    chartRef.current = new VennDiagramChart(ctx, config)
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy()
      }
    }
  }, [])

  return (
    <Card className="w-full max-w-4xl mx-auto relative">
      <CardHeader className="mb-4">
        <CardTitle className="text-lg">Solving Language Accessibility Market Opportunity</CardTitle>
      </CardHeader>
      <CardContent>
        <canvas id="marketVennChart" aria-label="Market Venn Diagram" role="img"></canvas>
        {hoveredInfo.data && (
          <div
            className="absolute bg-white p-2 rounded text-sm"
            style={{
              position: 'fixed',
              left: `${hoveredInfo.x + 10}px`,
              top: `${hoveredInfo.y}px`,
              transform: 'translate(8px, 8px)',
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