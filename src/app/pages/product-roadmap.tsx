import { CardTitle } from "@/components/ui/card"
import { Calendar, Users, Video, Building2, Rocket, Target, Cpu } from 'lucide-react'

const ProductRoadmap = () => {
  return (
    <div className="space-y-12">
      {/* Product Features Section */}
      <section>
        <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          Product Features
        </CardTitle>
        <div className="grid gap-6">
          <div className="flex gap-4 p-6 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-800">
            <div className="mt-1">
              <Video className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Speech-to-Speech Translation
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Enabling seamless communication across languages during video calls. This addresses the need for businesses, 
                educational institutions, and event organizers to operate globally without language barriers.
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-6 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800">
            <div className="mt-1">
              <Calendar className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Multilingual Transcription
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Offering real-time transcription in multiple languages, making it easier for teams to document 
                and share meeting notes with international colleagues.
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-6 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800">
            <div className="mt-1">
              <Users className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Group Multilingual Video-Conferencing
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Providing customized solutions for large-scale virtual or hybrid events, enabling real-time 
                translation for diverse audiences.
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-6 rounded-lg bg-orange-50 dark:bg-orange-900/20 border border-orange-100 dark:border-orange-800">
            <div className="mt-1">
              <Building2 className="h-6 w-6 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Enterprise Customization
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Focus on enterprises needing specific language or dialect training for internal communication, 
                which deepens customer engagement and enhances retention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section>
        <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          Roadmap
        </CardTitle>
        <div className="space-y-8">
          <div className="relative pl-8 pb-8 border-l-2 border-purple-200 dark:border-purple-800">
            <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-purple-400 dark:bg-purple-600" />
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                <Rocket className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                Next 3-6 Months
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                <li>
                  <span className="font-semibold">Core AI Translation:</span> Launch real-time video translation 
                  and transcription features.
                </li>
                <li>
                  <span className="font-semibold">Early Customer Acquisition:</span> Focus on acquiring 
                  <span className="italic"> SMBs and educational institutions</span> by promoting the freemium 
                  model to drive user growth.
                </li>
              </ul>
            </div>
          </div>

          <div className="relative pl-8 pb-8 border-l-2 border-blue-200 dark:border-blue-800">
            <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-blue-400 dark:bg-blue-600" />
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                <Target className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                6-12 Months 
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                <li>
                  <span className="font-semibold">Event-Specific Features:</span> Introduce tailored solutions 
                  for <span className="italic">virtual events</span> to target event organizers.
                </li>
                <li>
                  <span className="font-semibold">Enterprise Contracts:</span> Begin closing enterprise deals 
                  by offering <span className="italic">custom language solutions</span> and deep integrations 
                  within companies.
                </li>
              </ul>
            </div>
          </div>

          <div className="relative pl-8">
            <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-green-400 dark:bg-green-600" />
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                <Cpu className="h-5 w-5 text-green-600 dark:text-green-400" />
                12-18 Months
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                <li>
                  <span className="font-semibold">Advanced AI Features:</span> Implement 
                  <span className="italic"> contextual AI understanding</span>, improving translation accuracy 
                  by capturing sentiment and cultural nuances.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-8 text-gray-600 dark:text-gray-300 italic">
          This roadmap aligns with Polyglot's customer needs and demonstrates how each feature contributes 
          to long-term product defensibility.
        </p>
      </section>
    </div>
  )
}

export default ProductRoadmap;