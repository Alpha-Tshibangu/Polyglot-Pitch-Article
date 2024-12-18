import { TrendingUp, Globe, Target } from 'lucide-react'

const MarketAnalysis = () => {
  return (
    <section className="max-w-3xl space-y-8">
      <div className="space-y-6">
        {/* TAM */}
        <div className="flex gap-4">
          <div className="mt-1">
            <Globe className="h-5 w-5 text-blue-600 dark:text-purple-400" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">TAM</h3>
              <span style={{ display: 'inline' }} className="text-sm text-gray-600 dark:text-gray-400">(Total Addressable Market)</span>
            </div>
            <div className="space-y-3 text-gray-600 dark:text-gray-300">
              <p>
                The global language services market is projected to reach{' '}
                <span style={{ display: 'inline' }} className="font-semibold text-blue-600 dark:text-purple-400">
                  $108 billion by 2032
                </span>, driven by demand across industries like healthcare, e-commerce, and legal.
              </p>
              <p>
                Within this, AI-powered translation (NLP and neural machine translation) is a fast-growing segment, expected to hit{' '}
                <span style={{ display: 'inline' }} className="font-semibold text-blue-600 dark:text-purple-400">
                  $27 billion by 2030
                </span>, reflecting the rise of real-time translation solutions.
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Sources: Slator, Grand View Research
              </div>
            </div>
          </div>
        </div>

        {/* SAM */}
        <div className="flex gap-4">
          <div className="mt-1">
            <TrendingUp className="h-5 w-5 text-blue-600 dark:text-purple-400" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">SAM</h3>
              <span style={{ display: 'inline' }} className="text-sm text-gray-600 dark:text-gray-400">(Serviceable Available Market)</span>
            </div>
            <div className="space-y-3 text-gray-600 dark:text-gray-300">
              <p>
                Polyglot targets industries requiring{' '}
                <span style={{ display: 'inline' }} className="font-semibold text-blue-600 dark:text-purple-400">
                  real-time AI translation
                </span>{' '}for remote work, education, and global events. This AI-driven segment, focused on multilingual communication, is estimated at{' '}
                <span style={{ display: 'inline' }} className="font-semibold text-blue-600 dark:text-purple-400">
                  $12-15 billion
                </span>, as organisations seek seamless communication tools for international collaboration.
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Source: Mordor Intelligence
              </div>
            </div>
          </div>
        </div>

        {/* SOM */}
        <div className="flex gap-4">
          <div className="mt-1">
            <Target className="h-5 w-5 text-blue-600 dark:text-purple-400" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">SOM</h3>
              <span style={{ display: 'inline' }} className="text-sm text-gray-600 dark:text-gray-400">(Serviceable Obtainable Market)</span>
            </div>
            <div className="space-y-3 text-gray-600 dark:text-gray-300">
              <p>
                In the near term, Polyglot aims to capture{' '}
                <span style={{ display: 'inline' }} className="font-semibold text-blue-600 dark:text-purple-400">
                  $50-100 million
                </span>{' '}by onboarding users (quantities provided in {' '}
                <span style={{ display: 'inline' }} className="font-semibold text-blue-600 dark:text-purple-400">
                  &#39;Pricing Models and Comparisons&#39;
                </span>{' '}section), including SMBs, educational institutions, and event organisers, with a focus on real-time translation for global events.
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Sources: Statista, Slator
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MarketAnalysis