'use client'

import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'
import { Button } from "@/components/ui/button"
import RevenueBreakdown from '@/components/ui/revenue-breakdown'
import dynamic from 'next/dynamic'
import RevenueCharts from '@/components/ui/revenue-charts'
import StrategySection from './pages/strategy-section'
import ProductRoadmap from './pages/product-roadmap'
import FounderSection from './pages/founder-section'
import FundingSection from './pages/funding-section'
import MarketAnalysis from './pages/market-analysis-section'
import MarketVennDiagram from '@/components/ui/venn-diagram'

// Lazy load the components
const Image = dynamic(() => import('next/image'), { ssr: false })

// Skeleton loader for the image
function ImageSkeleton() {
  return (
    <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-lg"></div>
  )
}

function CircularImageSkeleton() {
  return (
    <div className="w-12 mr-4 h-12 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-full"></div> 
  )
}

interface RevenueData {
  source: string;
  users: number;
  revenue: number;
}

export default function Component() {
  const [darkMode, setDarkMode] = useState(false)
  const [profileImageLoaded, setProfileImageLoaded] = useState(false)  
  const [backgroundImageLoaded, setBackgroundImageLoaded] = useState(false)  
 const [customRevenueData, setCustomRevenueData] = useState<RevenueData[] | null>(null);


  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  // Function to load custom revenue breakdown data
  const loadCustomRevenueData = () => {
    const predictiveRevenueData = [
      { source: 'Enterprise Contracts', users: 5, revenue: 33500 },
      { source: 'Event Based Contracts', users: 300, revenue: 7500 },
      { source: 'Converted Freemium Subscriptions', users: 95250, revenue: 500 }
    ];
    setCustomRevenueData(predictiveRevenueData); // Update the revenue breakdown with new numbers
  
    // Scroll to the breakdown section
    document.getElementById('revenue-breakdown-section')?.scrollIntoView({ behavior: 'smooth' });
  };
  

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <header className="py-4 px-4 sm:px-6 lg:px-8 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-screen-md mx-auto flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Co Ventures Pitch Article</h1>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            className="text-gray-700 dark:text-gray-300"
          >
            {darkMode ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
          </Button>
        </div>
      </header>
      <main className="max-w-screen-md mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <article className="prose dark:prose-invert lg:prose-lg mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-5 text-gray-900 dark:text-gray-100">
            Polyglot: Breaking Language Barriers
          </h1>
          <div className="flex items-center mb-8">
            {!profileImageLoaded && <CircularImageSkeleton />}
            <Image
              src="/profile_picture.jpeg?height=45&width=45"
              alt="Author"
              width={50}
              height={50}
              onLoad={() => setProfileImageLoaded(true)}
              priority
              className={`rounded-full mr-3.5 ${profileImageLoaded ? 'block' : 'hidden'}`}
            />
            <div className="text-gray-600 dark:text-gray-400">
              <p className="font-semibold">Alpha Tshibangu</p>
              <p className="text-sm">October 17, 2024 · 3 min read</p>
            </div>
          </div>
          {!backgroundImageLoaded && <ImageSkeleton />}
          <Image
            src="/polyglot_logo.png?height=500&width=500"
            alt="Blog post cover image"
            width={800}
            height={400}
            priority
            onLoad={() => setBackgroundImageLoaded(true)} 
            className={`w-full object-cover rounded-lg mb-8 ${backgroundImageLoaded ? 'block' : 'hidden'}`}
          />
          <blockquote className="border-l-4 border-gray-300 dark:border-gray-700 pl-4 italic my-8 text-gray-700 dark:text-gray-300">
            &#34;Polyglot&#39;s mission is to break down language barriers and accelerate universal language fluency, making inclusivity and seamless interaction accessible to everyone.&#34; 
          </blockquote>
          <div className="border-l-4 border-blue-600 pl-4 mt-4 mb-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Market Context and Opportunity
            </h2>
          </div>
          <div>
            <MarketAnalysis />
          </div>
          <div className="mt-12 mb-8">
            <MarketVennDiagram />
          </div>
          <p className="text-gray-600 dark:text-gray-300 italic border-l border-gray-200 dark:border-gray-700 pl-4">
            This structure presents a clear path for Polyglot&#39;s growth while demonstrating realistic market sizing and acquisition targets.
          </p>
          <div className="border-l-4 border-orange-500 pl-4 mt-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Revenue Breakdown
            </h2>
          </div>
          <div id="revenue-breakdown-section">
            <RevenueBreakdown initialData={customRevenueData || undefined} />
          </div>
          <div className="mt-4 mb-4">
            <StrategySection />
          </div>
          <div className="mt-4 mb-4">
            <ProductRoadmap />
          </div>
          <div className="border-l-4 border-blue-600 pl-4 mt-4 mb-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Pricing Models and Comparisons
            </h2>
          </div>
          <div className="mt-4 mb-4">
            <RevenueCharts darkMode={darkMode}/>
            <p className="text-gray-700 dark:text-gray-300 mb-4 mt-4 text-lg leading-relaxed italic">
              Curious about how these predictive figures could achieve $50 million ARR? 
              <button 
                onClick={loadCustomRevenueData}
                style={{ textDecoration: 'none' }}
                className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-600 italic"
              >
                Click here to view the breakdown report.
              </button>
            </p>
          </div>
          <div className="border-l-4 border-customPurple pl-4 mt-12 mb-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Team Composition and Hiring
            </h2>
          </div>
          <div className="mt-8 mb-4">
            <FounderSection />
          </div>
          <div className="mt-12 mb-4">
            <FundingSection />
          </div>
        </article>
        <div className="border-l-4 border-customPurple pl-4 mt-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Make Polyglot A Reality
          </h2>
        </div>
        <p className="mt-6">
          Polyglot&#39;s mission is to break down language barriers and accelerate universal language fluency through AI, 
          making inclusivity and seamless interaction accessible to everyone. 
        </p>
        <p className="mt-4">
          This is the future I envision — where language is no longer a barrier, but the bridge that connects us all. 
          Join me, as I break down these barriers and build these bridges. Together, we can turn the words of Ludwig Wittgenstein&#39;s in our favour 
          — &#39;the limits of my language mean the limits of my world&#39; — and with AI-powered communication, the world itself, becomes limitless.
        </p>
      </main>
      <footer className="py-6 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-screen-md mx-auto text-center text-gray-500 dark:text-gray-400">
          © 2024 Polyglot. All rights reserved.
        </div>
      </footer>
    </div>
  )
}