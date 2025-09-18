// app/projects/page.tsx
import Image from "next/image";
import Link from "next/link";
import { allison, darumadrop } from "../fonts";

export default function Projects() {
  return (
    <main className="relative min-h-dvh overflow-hidden" style={{ backgroundColor: '#EFEBE0' }}>
      {/* Home icon in top left corner (always visible) */}
      <div
        className="absolute top-4 left-1/2 -translate-x-1/2 z-20
                   sm:top-6 sm:left-6 sm:translate-x-0"
      >
        <Link href="/" className="block hover:rotate-12 transition-transform duration-300">
          <Image
            src="/flower-home.png"
            alt="Home"
            width={80}
            height={80}
            className="h-auto w-[72px] sm:w-[80px]"
            priority
          />
        </Link>
      </div>

      {/* Main content container */}
      <div className="mx-auto max-w-6xl min-h-dvh pt-28 sm:pt-32 px-6 sm:px-8 pb-16">
        {/* Page Title */}
        <h1
          className={`${allison.className} mb-12 sm:mb-16 text-center`}
          style={{ color: '#B0C09D', fontSize: 'clamp(40px, 8vw, 100px)' }}
        >
          Projects
        </h1>

        {/* Projects Grid */}
        <div className="space-y-16 sm:space-y-20">
          {/* Project 1: Real Estate ROI Forecasting */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
            <div className="lg:w-1/2">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/30">
                <h2
                  className={`${darumadrop.className} text-2xl sm:text-3xl font-bold mb-4`}
                  style={{ color: '#B0C09D' }}
                >
                  Real Estate ROI Forecasting Tool
                </h2>
                <p className={`${darumadrop.className} text-base sm:text-lg mb-4`} style={{ color: '#B0C09D' }}>
                  Built comprehensive ROI forecasting tools using GIS data and zoning arbitrage detection to optimize capital investments for real estate portfolio management.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Python", "GIS", "Pandas", "Scikit-learn", "Power BI"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full border border-white/30"
                      style={{ color: '#B0C09D', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className={`${darumadrop.className} text-sm`} style={{ color: '#B0C09D' }}>
                  <strong>Impact:</strong> Optimized capital investments and accelerated asset repositioning decisions through data-driven insights.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20">
                  <div className="text-center">
                    <div className="text-4xl sm:text-6xl mb-2">📊</div>
                    <p className={`${darumadrop.className} text-sm`} style={{ color: '#B0C09D' }}>
                      ROI Analysis Dashboard
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2: Predictive Vacancy Models */}
          <div className="flex flex-col lg:flex-row-reverse lg:items-center gap-8 lg:gap-12">
            <div className="lg:w-1/2">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/30">
                <h2
                  className={`${darumadrop.className} text-2xl sm:text-3xl font-bold mb-4`}
                  style={{ color: '#B0C09D' }}
                >
                  Predictive Vacancy Models
                </h2>
                <p className={`${darumadrop.className} text-base sm:text-lg mb-4`} style={{ color: '#B0C09D' }}>
                  Developed machine learning models to predict property vacancy rates with 85% AUC accuracy, reducing portfolio volatility by 8%.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Python", "LightGBM", "Pandas", "NumPy", "Scikit-learn"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full border border-white/30"
                      style={{ color: '#B0C09D', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className={`${darumadrop.className} text-sm`} style={{ color: '#B0C09D' }}>
                  <strong>Impact:</strong> Achieved 85% AUC accuracy and reduced portfolio volatility by 8% through predictive insights.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20">
                  <div className="text-center">
                    <div className="text-4xl sm:text-6xl mb-2">🏠</div>
                    <p className={`${darumadrop.className} text-sm`} style={{ color: '#B0C09D' }}>
                      Vacancy Prediction Model
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3: SQL Query Generation with RAG */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
            <div className="lg:w-1/2">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/30">
                <h2
                  className={`${darumadrop.className} text-2xl sm:text-3xl font-bold mb-4`}
                  style={{ color: '#B0C09D' }}
                >
                  SQL Query Generation with RAG
                </h2>
                <p className={`${darumadrop.className} text-base sm:text-lg mb-4`} style={{ color: '#B0C09D' }}>
                  Enhanced SQL query generation accuracy by 25% using prompt refinement and deployed RAG pipeline with ChromaDB, improving complex query execution by 30%.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Python", "LangChain", "ChromaDB", "RAG", "SQL"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full border border-white/30"
                      style={{ color: '#B0C09D', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className={`${darumadrop.className} text-sm`} style={{ color: '#B0C09D' }}>
                  <strong>Impact:</strong> Boosted query accuracy by 25% and improved complex query execution by 30% through RAG implementation.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20">
                  <div className="text-center">
                    <div className="text-4xl sm:text-6xl mb-2">🔍</div>
                    <p className={`${darumadrop.className} text-sm`} style={{ color: '#B0C09D' }}>
                      RAG Pipeline System
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project 4: Healthcare Data Analysis */}
          <div className="flex flex-col lg:flex-row-reverse lg:items-center gap-8 lg:gap-12">
            <div className="lg:w-1/2">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/30">
                <h2
                  className={`${darumadrop.className} text-2xl sm:text-3xl font-bold mb-4`}
                  style={{ color: '#B0C09D' }}
                >
                  Healthcare Predictive Analytics
                </h2>
                <p className={`${darumadrop.className} text-base sm:text-lg mb-4`} style={{ color: '#B0C09D' }}>
                  Developed predictive models for healthcare outcomes using statistical analysis and machine learning techniques to improve patient care and resource allocation.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Python", "R", "TensorFlow", "Pandas", "Statistics"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full border border-white/30"
                      style={{ color: '#B0C09D', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className={`${darumadrop.className} text-sm`} style={{ color: '#B0C09D' }}>
                  <strong>Impact:</strong> Improved patient care outcomes and optimized resource allocation through predictive healthcare analytics.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20">
                  <div className="text-center">
                    <div className="text-4xl sm:text-6xl mb-2">🏥</div>
                    <p className={`${darumadrop.className} text-sm`} style={{ color: '#B0C09D' }}>
                      Healthcare Analytics
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      {/* Star doodle in top right (hidden on mobile) */}
      <div className="hidden sm:block absolute right-2 top-4 sm:right-4 sm:top-6 md:right-6 md:top-8 z-10 pointer-events-none">
        <Image
          src="/star-1.png"
          alt="Star doodle"
          width={200}
          height={200}
          className="h-auto w-[80px] sm:w-[120px] md:w-[160px] opacity-60 rotate-12"
          priority
        />
      </div>

      {/* Flower doodle in bottom left (hidden on mobile) */}
      <div className="hidden sm:block absolute -bottom-10 -left-10 z-10 pointer-events-none">
        <Image
          src="/flower-2.png"
          alt="Flower doodle"
          width={300}
          height={300}
          className="h-auto w-[200px] opacity-60"
          priority
        />
      </div>
    </main>
  );
}


