import { CardTitle } from "@/components/ui/card"

const StrategySection = () => {
  return (
    <div className="space-y-8">
      <section className="space-y-6">
        <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Go-to-Market Strategy
        </CardTitle>
        
        <div className="space-y-4">
          <div className="rounded-lg bg-gray-50 dark:bg-gray-900 p-6 border border-gray-200 dark:border-gray-800">
            <h3 className="flex items-center text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 mr-3">
                1
              </span>
              Product-Led Growth (PLG)
            </h3>
            <p className="text-gray-700 dark:text-gray-300 ml-11">
              Start with a <span className="font-semibold">freemium model</span> targeting 
              <span className="font-semibold"> SMBs and educational institutions</span>. 
              Users can experience Polyglot&#39;s core multilingual features for free, and then upgrade 
              as their needs grow. This approach drives organic growth and lowers acquisition costs, 
              similar to strategies used by SaaS companies like Zoom.
            </p>
          </div>

          <div className="rounded-lg bg-gray-50 dark:bg-gray-900 p-6 border border-gray-200 dark:border-gray-800">
            <h3 className="flex items-center text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 mr-3">
                2
              </span>
              Sales-Led Approach for Enterprises
            </h3>
            <p className="text-gray-700 dark:text-gray-300 ml-11">
              For <span className="font-semibold">larger organizations and universities</span>, adopt a 
              <span className="font-semibold"> sales-led motion</span> with tailored demos and relationship 
              building. This ensures personalized solutions for complex needs, helping to secure enterprise 
              contracts.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Business Model
        </CardTitle>
        
        <div className="space-y-4">
          <div className="rounded-lg bg-gray-50 dark:bg-gray-900 p-6 border border-gray-200 dark:border-gray-800">
            <h3 className="flex items-center text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 mr-3">
                1
              </span>
              Freemium & Per-Seat Pricing
            </h3>
            <p className="text-gray-700 dark:text-gray-300 ml-11">
              Offer <span className="font-semibold">per-seat pricing</span> for SMBs and educational 
              institutions, scaling with team size. Start with free basic features, and upsell advanced 
              options.
            </p>
          </div>

          <div className="rounded-lg bg-gray-50 dark:bg-gray-900 p-6 border border-gray-200 dark:border-gray-800">
            <h3 className="flex items-center text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300 mr-3">
                2
              </span>
              Event-Based Pricing
            </h3>
            <p className="text-gray-700 dark:text-gray-300 ml-11">
              Charge <span className="font-semibold">flat fees</span> for large virtual or hybrid events, 
              catering to event organizers needing real-time translation at scale.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default StrategySection