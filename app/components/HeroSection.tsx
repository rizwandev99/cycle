import Image from "next/image";

export default function HeroSection() {
  return (
    <div
      className="text-center flex flex-col w-full"
      style={{ minHeight: "calc(100vh - 400px)" }}
    >
      {/* Main Heading */}
      <h1 className="text-6xl font-bold text-[#111] mb-2 mt-8">
        Your feedback hub,
      </h1>
      <h1 className="text-6xl font-bold text-[#111] mb-6">on autopilot</h1>

      {/* Subtitle */}
      <p className="text-[#555] text-base mb-8 max-w-xl mx-auto mt-4 leading-relaxed">
        Cycle is the fastest way for your team to capture product feedback and
        share customer insights – without the busywork.
      </p>
    </div>
  );
}
