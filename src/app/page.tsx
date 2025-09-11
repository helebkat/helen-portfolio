// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import { allison, darumadrop } from "./fonts";

export default function Home() {
  return (
    <main className="relative min-h-dvh overflow-hidden" style={{ backgroundColor: '#B0C09D' }}>
      {/* Top nav — Allison @ 60px on xl, smaller on mobile */}
      <header className="absolute inset-x-0 top-6 z-10">
        <nav
          className={`${allison.className} mx-auto flex max-w-7xl items-center justify-center gap-15 text-white/95`}
          style={{ fontSize: 'clamp(28px, 4vw, 60px)' }}
        >
          <Link href="/about" className="hover:opacity-90">About</Link>
          <Link href="/resume" className="hover:opacity-90">Resume</Link>
          <Link href="/projects" className="hover:opacity-90">Projects</Link>
          <Link href="/hobbies" className="hover:opacity-90">Hobbies</Link>
        </nav>
      </header>

      {/* Helen's */}
      <section className="absolute bottom-20 left-6 sm:bottom-[200px] sm:left-10 z-[1] max-[639px]:bottom-20">
        <h1
          className={`${darumadrop.className} leading-[0.83] max-[639px]:!text-[64px] max-[639px]:leading-[0.9]`}
          style={{ color: '#EFEBE0', fontSize: 'clamp(72px, 16vw, 280px)' }}
        >
          Helen&apos;s
        </h1>
      </section>

      {/* Portfolio */}
      <section className="absolute bottom-8 left-6 sm:bottom-10 sm:left-10 z-50 max-[639px]:bottom-6">
        <h2
          className={`${darumadrop.className} leading-[0.83] max-[639px]:!text-[56px] max-[639px]:leading-[0.9]`}
          style={{ color: '#EFEBE0', fontSize: 'clamp(72px, 16vw, 240px)' }}
        >
          Portfolio
        </h2>
      </section>

      {/* Duck — desktop unchanged; mobile: scale down + slight re-position */}
      <div className="absolute bottom-2 left-32 sm:bottom-4 sm:left-48 xl:bottom-1 xl:left-[25rem] z-20 max-[50px]:left-24 max-[50px]:bottom-3">
        <div className="transform transition-transform duration-300 hover:rotate-12">
          <Image
            src="/duck.png"
            alt="duck doodle"
            width={453}
            height={483}
            className="h-auto opacity-95 -scale-x-100 max-[50px]:!w-[50px]"
            style={{ width: 'clamp(180px, 35vw, 390px)' }}
            priority
          />
        </div>
      </div>

      {/* Flower — unchanged */}
      <div className="pointer-events-none absolute bottom-0 right-4 sm:right-40 z-10">
        <Image
          src="/flower 1.png"
          alt="flower doodle"
          width={300}
          height={300}
          className="h-auto opacity-95"
          style={{ width: 'clamp(140px, 25vw, 300px)' }}
          priority
        />
      </div>
    </main>
  );
}
