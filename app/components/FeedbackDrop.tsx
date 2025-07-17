import Image from "next/image";

export default function FeedbackDrop() {
  return (
    <div
      className="border border-dashed border-[#c2d4e8] rounded-xl p-2 bg-white/90 flex flex-col items-center justify-center w-full max-w-md mx-auto shadow-sm"
      style={{ minHeight: 140 }}
    >
      <div className="mb-2">
        <Image
          src="/images/globe.png"
          alt="Drop icon"
          width={60}
          height={60}
          className="opacity-80"
        />
      </div>
      <p className="text-[#2c4b7a] font-medium text-sm">
        Drop anything to capture feedback
      </p>
    </div>
  );
}
