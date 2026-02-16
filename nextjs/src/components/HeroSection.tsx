// app/components/HeroSection.tsx
import { cn } from "@/lib/utils";
import { Spotlight } from "../ui/spotlight";

export default function HeroSection() {
  return (
    <div className="relative flex h-[40rem] w-full overflow-hidden rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
        )}
      />
    
    <section className="bg-gradient-to-b from-black to-gray-900 text-white min-h-[80vh] flex items-center justify-center px-6">
        
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl sm:text-6xl font-bold mb-6">
          Build Your Future with <span className="text-blue-500">Next.js</span>
        </h1>
        <p className="text-lg sm:text-xl mb-8 text-gray-300">
          Create fast, scalable, SEO-ready applications with the power of App Router and React.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white font-semibold">
            Get Started
          </button>
          <button className="border border-gray-400 hover:bg-gray-800 px-6 py-3 rounded-lg text-white font-semibold">
            Learn More
          </button>
        </div>
      </div>
    </section>
    </div>
  );
}

