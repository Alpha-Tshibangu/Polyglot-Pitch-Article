import { DollarSign, Code, Users, Rocket, LineChart } from 'lucide-react'

const FundingSection = () => {
  return (
    <section className="max-w-3xl space-y-8">
      {/* Header */}
      <div className="border-l-4 border-green-500 pl-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Funding Overview
        </h2>
        <p className="text-lg font-semibold mt-2 text-green-600 dark:text-green-400">
          Raising $175,000 Pre-Seed Round
        </p>
      </div>

      {/* Fund Allocation */}
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="mt-1">
            <Code className="h-5 w-5 text-blue-500 dark:text-blue-400" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">
              Product Development & Cloud Infrastructure
            </h3>
            <p className="mt-1 text-gray-600 dark:text-gray-300">
              Investment in <span className="font-semibold">cloud GPU services</span> and 
              <span className="font-semibold"> hosting</span> to support proprietary derivative 
              AI models, ensuring lowest latency translation possible.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="mt-1">
            <Rocket className="h-5 w-5 text-purple-500 dark:text-purple-400" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">
              Transition to Full-Time Development
            </h3>
            <p className="mt-1 text-gray-600 dark:text-gray-300">
              Enabling <span className="font-semibold">full-time development</span> as the first 
              full-time engineer, accelerating core features:
            </p>
            <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-300 list-disc ml-6">
              <li>Speech-to-speech translation</li>
              <li>Group multilingual video conferencing and streaming</li>
              <li>Enterprise customisations</li>
            </ul>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="mt-1">
            <Users className="h-5 w-5 text-green-500 dark:text-green-400" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">
              Hiring and Sales
            </h3>
            <p className="mt-1 text-gray-600 dark:text-gray-300">
              Recruiting an additional <span className="font-semibold">engineer</span> and 
              <span className="font-semibold"> sales and business development personnel</span>. 
              Focus on customer acquisition targeting SMBs, event organisers, and enterprises.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="mt-1">
            <DollarSign className="h-5 w-5 text-orange-500 dark:text-orange-400" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">
              Go-to-Market and Operations
            </h3>
            <p className="mt-1 text-gray-600 dark:text-gray-300">
              Investment in <span className="font-semibold">sales and marketing efforts</span>, 
              targeting early adopters and larger organisations. Includes infrastructure, 
              cloud hosting, and customer support costs.
            </p>
          </div>
        </div>
      </div>

      {/* Projections */}
      <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-8">
        <div className="flex items-start gap-4">
          <div className="mt-1">
            <LineChart className="h-5 w-5 text-purple-600 dark:text-purple-400" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">
              18-24 Month Projections
            </h3>
            <div className="mt-4 space-y-4 text-gray-600 dark:text-gray-300">
              <div className="flex items-baseline gap-3">
                <span className="w-2 h-2 rounded-full bg-purple-600 dark:bg-purple-400 mt-2"></span>
                <div>
                  <span className="font-semibold">$500K ARR</span> target
                </div>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="w-2 h-2 rounded-full bg-purple-600 dark:bg-purple-400 mt-2"></span>
                <div>
                  <span className="font-semibold">Approx. 595 paying users</span> through mixed revenue streams:
                  <ul className="mt-3 space-y-2 ml-4">
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400"></span>
                      Freemium subscriptions
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400"></span>
                      Event-based contracts
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400"></span>
                      Enterprise contracts
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FundingSection