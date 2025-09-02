// app/about/page.tsx
import Image from "next/image";
import { allison, darumadrop } from "../fonts";

export default function About() {
  return (
    <main className="relative min-h-dvh overflow-hidden" style={{ backgroundColor: '#EFEBE0' }}>
      {/* Home icon in top left corner (always visible) */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20
                sm:top-6 sm:left-6 sm:translate-x-0">
        <a href="/" className="block hover:rotate-12 transition-transform duration-300">
          <Image
            src="/flower home.png"
            alt="Home"
            width={80}
            height={80}
            className="h-auto w-[72px] sm:w-[80px]"
            priority
          />
        </a>
      </div>

      {/* Split layout container — stacks on mobile, keeps your 60/40 from md up */}
      <div className="mx-auto max-w-6xl min-h-dvh pt-28 sm:pt-32 px-6 sm:px-8  pb-4 flex flex-col md:flex-row md:items-stretch gap-10 md:gap-6 md:pt-10">
        {/* Left section - Photo with overlaying doodles (60% on desktop) */}
        <div className="relative w-full md:w-[60%] flex items-center justify-center">
          <div className="relative">
            {/* Main photo */}
            <Image
              src="/helen.png"
              alt="Helen"
              width={600}
              height={800}
              className="h-auto w-full max-w-[420px] sm:max-w-[500px]"
              priority
            />

            {/* Doodles overlay on the photo */}
            <div className="absolute inset-0 -top-6 pointer-events-none">
              <Image
                src="/extra.png"
                alt="Doodles overlay"
                width={600}
                height={800}
                className="h-auto w-full max-w-[420px] sm:max-w-[500px]"
                priority
              />
            </div>

            {/* Helen doodle in bottom-right of the photo (hidden on mobile) */}
            <div className="hidden sm:block absolute -bottom-[80px] -right-[130px] pointer-events-none">
                <Image
                    src="/helen_doodle.png"
                    alt="Helen doodle"
                    width={200}
                    height={200}
                    className="h-auto w-[140px] sm:w-[180px] md:w-[200px] opacity-90"
                    sizes="(max-width: 640px) 0px, 200px"  // hint Next/Image to serve 0px on mobile
                    priority
                />
            </div>

          </div>
        </div>

        {/* Right section - Text content (40% on desktop) */}
        <div className="w-full md:w-[60%] flex items-start justify-start md:p-25">
          <div className="max-w-md">
            <div
              className={`${darumadrop.className}
                          text-[16px] sm:text-[18px] lg:text-[19px] xl:text-[21.3px]
                          leading-snug text-left`}
              style={{ color: '#B0C09D' }}
            >
              <p className="mb-4 lg:mb-5">
                Hello, and welcome! I'm Helen. I recently finished my Bachelor's degree in Mathematics with a Minor in Computer Science at the University of Maryland, and I'm currently working on my Master's in Machine Learning.
              </p>

              <p className="mb-4 lg:mb-5">
                Over the past few years, I've grown really passionate about data. I've built models for real estate, healthcare, and image classification using Python, SQL, and statistics, and I'm always looking for new ways to explore and solve meaningful problems.
              </p>

              <p>
                This site is a little window into what I've been working on. I hope you enjoy it!
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
