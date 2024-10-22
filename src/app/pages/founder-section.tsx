import { ExternalLink, Code, Users, HeartHandshake, Megaphone } from 'lucide-react'
import { useState } from 'react'
import dynamic from 'next/dynamic'

const Image = dynamic(() => import('next/image'), { ssr: false })

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20" height="20" fill="currentColor">
    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
  </svg>
);

const MediumIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="20" height="20" fill="currentColor">
    <path d="M180.5,74.262C80.813,74.262,0,155.633,0,256S80.819,437.738,180.5,437.738,361,356.373,361,256,280.191,74.262,180.5,74.262Zm288.25,10.646c-49.845,0-90.245,76.619-90.245,171.095s40.406,171.1,90.251,171.1,90.251-76.619,90.251-171.1H559C559,161.5,518.6,84.908,468.752,84.908Zm139.506,17.821c-17.526,0-31.735,68.628-31.735,153.274s14.2,153.274,31.735,153.274S640,340.631,640,256C640,171.351,625.785,102.729,608.258,102.729Z"/>
  </svg>
);

const FileIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="20" height="20" fill="currentColor">
    <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/>
  </svg>
);

function CircularImageSkeleton() {
  return (
    <div className="w-12 mr-4 h-12 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-full"></div> 
  )
}

const FounderSection = () => {
  const [profileImageLoaded, setProfileImageLoaded] = useState(false)  
  return (
    <div className="space-y-16">
      {/* Founder Introduction */}
      <section className="max-w-3xl">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex flex-col items-center md:items-start">
            <div className="relative w-32 h-32 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-customPurple dark:ring-purple-900">
              {!profileImageLoaded && <CircularImageSkeleton />}
              <Image
                src="/profile_picture.jpeg?height=128&width=128"
                alt="Author"
                width={128}
                height={128}
                onLoad={() => setProfileImageLoaded(true)}
                priority
                className={`rounded-full mr-3.5 ${profileImageLoaded ? 'block' : 'hidden'}`}
              />
            </div>

            <div className="flex flex-col space-y-2 mt-6">
              <a
                href="https://www.linkedin.com/in/alpha-tshibangu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-customPurple dark:text-gray-400 dark:hover:text-purple-400 transition-colors flex items-center"
              >
                <LinkedInIcon />
                <span className="ml-2 text-sm">LinkedIn</span>
              </a>
              <a
                href="https://medium.com/@alphatshibangu/what-i-learnt-from-a-conversation-with-one-of-singapores-most-prominent-entrepreneurs-b81a0b1107d8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-customPurple dark:text-gray-400 dark:hover:text-purple-400 transition-colors flex items-center"
              >
                <MediumIcon />
                <span className="ml-2 text-sm">Medium</span>
              </a>
              <a
                href="https://docs.google.com/document/d/1kM8E8UjfSA1c9_W0BYgnDTrLjSp45sR4/edit?usp=sharing&ouid=111384638528796485945&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-customPurple dark:text-gray-400 dark:hover:text-purple-400 transition-colors flex items-center"
              >
                <FileIcon />
                <span className="ml-2 text-sm">Resume</span>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <div className="border-l-4 border-customPurple-500 pl-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                Alpha Tshibangu
              </h2>
              <p className="text-customPurple dark:text-purple-400 font-medium">
                Founder & Lead Developer, Polyglot
              </p>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I&#39;m currently building the MVP for Polyglot leveraging my deep understanding of AI development and multilingual technology. 
              With expertise in software engineering and product development, I have designed Polyglot to tackle 
              real-time multilingual communication challenges. I am committed to scaling the platform, ensuring it 
              meets global demands across industries such as education, small businesses, and events.
            </p>
          </div>
        </div>
      </section>

      {/* Future Hiring Section */}
      <section className="max-w-3xl space-y-8">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Future Hiring Needs
          </h3>
          
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed border-l-4 border-gray-200 dark:border-gray-700 pl-4">
            As Polyglot grows, I&#39;m building a robust team to scale operations and accelerate product development.
            Each role is designed to support Polyglot&#39;s rapid scaling and market expansion:
          </p>
        </div>

        <div className="space-y-8 ml-4">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-lg">AI Engineers</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 ml-9 border-l border-blue-200 dark:border-blue-800 pl-4">
              Refine and expand real-time translation features, ensuring accuracy and speed through advanced machine learning.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-lg">Sales & Business Development</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 ml-9 border-l border-purple-200 dark:border-purple-800 pl-4">
              Drive partnerships with enterprises, educational institutions, and event organizers to secure key deals.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <HeartHandshake className="h-6 w-6 text-green-600 dark:text-green-400" />
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-lg">Customer Success Team</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 ml-9 border-l border-green-200 dark:border-green-800 pl-4">
              Manage onboarding and provide ongoing support to ensure user satisfaction and retention.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <Megaphone className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-lg">Marketing Lead</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 ml-9 border-l border-orange-200 dark:border-orange-800 pl-4">
              Establish strong brand presence and craft targeted campaigns for strategic sectors like SMBs and event management.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FounderSection