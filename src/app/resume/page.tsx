// app/resume/page.tsx
import Image from "next/image";
import Link from "next/link";
import { allison, darumadrop } from "../fonts";

export default function Resume() {
  return (
    <main className="relative min-h-dvh overflow-hidden" style={{ backgroundColor: '#B0C09D' }}>
      {/* Home icon in top left corner (always visible) */}
      <div
        className="absolute top-4 left-1/2 -translate-x-1/2 z-20
                   sm:top-6 sm:left-6 sm:translate-x-0"
      >
        <Link href="/" className="block hover:rotate-12 transition-transform duration-300">
          <Image
            src="/flower-home.png"
            alt="Home"
            width={60}
            height={60}
            className="h-auto w-[100px]"
            priority
          />
        </Link>
      </div>

      {/* Star doodle in top right (hidden on mobile) */}
      <div className="hidden sm:block absolute right-2 top-4 sm:right-4 sm:top-6 md:right-6 md:top-8 z-10 pointer-events-none">
        <Image
          src="/star-1.png"
          alt="Star doodle"
          width={300}
          height={300}
          className="h-auto w-[110px] sm:w-[180px] md:w-[240px] xl:w-[300px] opacity-100 rotate-0 sm:rotate-[-10deg] md:rotate-[-18deg] xl:rotate-[-25deg]"
          sizes="(max-width: 640px) 110px,
                 (max-width: 768px) 180px,
                 (max-width: 1280px) 240px,
                 300px"
          priority
        />
      </div>

      {/* Main content container — stacks on mobile, 2 columns from md up */}
      <div className="mx-auto max-w-6xl min-h-dvh pt-28 sm:pt-32 px-6 sm:px-8 flex flex-col md:flex-row md:gap-16">
        {/* Left Column - Work Experience */}
        <div className="w-full md:w-1/2 md:pr-8">
          <h1
            className={`${allison.className} mb-8 sm:mb-12 relative z-20`}
            style={{ color: '#FFFFFF', fontSize: 'clamp(40px, 8vw, 100px)' }}
          >
            Work Experience
          </h1>

          <div className={`${darumadrop.className} space-y-8`} style={{ color: '#EFEBE0' }}>
            {/* Financial Data Analyst */}
            <div>
              <p className="text-base sm:text-lg mb-2">October 2024 - Present</p>
              <h3 className="text-lg sm:text-xl font-bold mb-3" style={{ color: '#FFFFFF' }}>
                Financial Data Analyst | Hines
              </h3>
              <ul className="space-y-2 text-sm sm:text-base">
                <li>• Built ROI forecasting tools and zoning arbitrage detection using GIS, optimizing capital investments</li>
                <li>• Created predictive vacancy models (85% AUC) reducing portfolio volatility by 8%</li>
                <li>• Delivered dashboards accelerating asset repositioning decisions</li>
              </ul>
            </div>

            {/* AI/ML Research Assistant */}
            <div>
              <p className="text-base sm:text-lg mb-2">April 2024 - August 2025</p>
              <h3 className="text-lg sm:text-xl font-bold mb-3" style={{ color: '#FFFFFF' }}>
                AI/ML Research Assistant
              </h3>
              <ul className="space-y-2 text-sm sm:text-base">
                <li>• Boosted SQL query generation accuracy by 25% with prompt refinement & logic-aware fixes</li>
                <li>• Deployed RAG pipeline (ChromaDB) improving complex query execution by 30%</li>
                <li>• Analyzed 2K+ queries to cut invalid rates by 18%</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column - Education */}
        <div className="w-full md:w-1/2 md:pl-8 mt-16 md:mt-0">
          <h2
            className={`${allison.className} mb-8 sm:mb-12`}
            style={{ color: '#FFFFFF', fontSize: 'clamp(40px, 8vw, 100px)' }}
          >
            Education
          </h2>

          <div className={`${darumadrop.className} space-y-6`} style={{ color: '#EFEBE0' }}>
            {/* Masters */}
            <div>
              <p className="text-base sm:text-lg mb-2">May 2026</p>
              <h3 className="text-lg sm:text-xl font-bold mb-1" style={{ color: '#FFFFFF' }}>
                University of Maryland - College Park
              </h3>
              <p className="text-base sm:text-lg" style={{ color: '#FFFFFF' }}>
                Masters of Science in Machine Learning
              </p>
            </div>

            {/* Bachelors */}
            <div>
              <p className="text-base sm:text-lg mb-2">May 2024</p>
              <h3 className="text-lg sm:text-xl font-bold mb-1" style={{ color: '#FFFFFF' }}>
                University of Maryland - College Park
              </h3>
              <p className="text-base sm:text-lg" style={{ color: '#FFFFFF' }}>
                Bachelors of Science in Mathematics
              </p>
              <p className="text-sm sm:text-base" style={{ color: '#FFFFFF' }}>
                Minor in Computer Science
              </p>
            </div>

            {/* Associates */}
            <div>
              <p className="text-base sm:text-lg mb-2">May 2022</p>
              <h3 className="text-lg sm:text-xl font-bold mb-1" style={{ color: '#FFFFFF' }}>
                Bard College at Simon&apos;s Rock
              </h3>
              <p className="text-base sm:text-lg" style={{ color: '#FFFFFF' }}>
                Associate in Arts with Distinction in Mathematics
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="min-h-dvh pt-16 sm:pt-24 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Skills heading */}
          <h2
            className={`${allison.className} mb-10 sm:mb-16`}
            style={{ color: '#FFFFFF', fontSize: 'clamp(40px, 8vw, 120px)' }}
          >
            Skills
          </h2>

          {/* Skills content */}
          <div className={`${darumadrop.className}`}>
            {/* Languages */}
            <div className="mb-8 flex flex-col sm:flex-row items-start">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-0 sm:mr-8 min-w-[120px]" style={{ color: '#FFFFFF' }}>
                Languages
              </h3>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {["Python","SQL","R","Matlab","Java"].map((label) => (
                  <div
                    key={label}
                    className="px-4 sm:px-6 py-2.5 sm:py-3 border-2 border-white/30 rounded-lg transition-colors duration-300 hover:bg-white hover:border-white cursor-pointer"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                  >
                    <span className="text-base sm:text-lg transition-colors duration-300 hover:text-[#B0C09D]" style={{ color: '#FFFFFF' }}>
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ML & Data */}
            <div className="mb-8 flex flex-col sm:flex-row items-start">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-0 sm:mr-8 min-w-[120px]" style={{ color: '#FFFFFF' }}>
                ML &amp; Data
              </h3>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {["Pandas","NumPy","Scikit-learn","TensorFlow","LightGBM","LangChain","PyTorch","Snowflake","Excel"].map((label) => (
                  <div
                    key={label}
                    className="px-4 sm:px-6 py-2.5 sm:py-3 border-2 border-white/30 rounded-lg transition-colors duration-300 hover:bg-white hover:border-white cursor-pointer"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                  >
                    <span className="text-base sm:text-lg transition-colors duration-300 hover:text-[#B0C09D]" style={{ color: '#FFFFFF' }}>
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="mb-8 flex flex-col sm:flex-row items-start">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-0 sm:mr-8 min-w-[120px]" style={{ color: '#FFFFFF' }}>
                Tools
              </h3>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {["Power BI","Git","Docker","AWS","ChromaDB"].map((label) => (
                  <div
                    key={label}
                    className="px-4 sm:px-6 py-2.5 sm:py-3 border-2 border-white/30 rounded-lg transition-colors duration-300 hover:bg-white hover:border-white cursor-pointer"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                  >
                    <span className="text-base sm:text-lg transition-colors duration-300 hover:text-[#B0C09D]" style={{ color: '#FFFFFF' }}>
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Focus */}
            <div className="mb-8 flex flex-col sm:flex-row items-start">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-0 sm:mr-8 min-w-[120px]" style={{ color: '#FFFFFF' }}>
                Focus
              </h3>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {["Predictive Modeling","RAG","Data Visualization","Forecasting"].map((label) => (
                  <div
                    key={label}
                    className="px-4 sm:px-6 py-2.5 sm:py-3 border-2 border-white/30 rounded-lg transition-colors duration-300 hover:bg-white hover:border-white cursor-pointer"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                  >
                    <span className="text-base sm:text-lg transition-colors duration-300 hover:text-[#B0C09D]" style={{ color: '#FFFFFF' }}>
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Flower doodle in bottom right (hidden on mobile) */}
      <div className="hidden sm:block absolute -bottom-10 -right-10 z-10 pointer-events-none">
        <Image
          src="/flower-2.png"
          alt="Flower doodle"
          width={400}
          height={400}
          className="h-auto w-[300px] opacity-100"
          sizes="(max-width: 640px) 0px, 300px"
          priority
        />
      </div>
    </main>
  );
}
