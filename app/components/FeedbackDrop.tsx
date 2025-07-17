import Image from "next/image";

export default function FeedbackDrop() {
  return (
    <div className="border border-dashed border-[#c2d4e8] rounded-lg p-20 bg-white/90 flex flex-col items-center justify-center">
      <div className="mb-4">
        <Image
          src="/vercel.svg" // Replace with appropriate icon
          alt="Drop icon"
          width={48}
          height={48}
          className="opacity-80"
        />
      </div>
      <p className="text-[#2c4b7a] font-medium">
        Drop anything to capture feedback
      </p>
    </div>
  );
}
