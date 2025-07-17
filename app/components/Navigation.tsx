import Image from "next/image";

export default function Navigation() {
  return (
    <nav className="flex items-center justify-between px-8 py-6 w-full">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/images/cycle-logo.png"
          alt="Cycle Logo"
          width={100}
          height={100}
          priority
        />
      </div>
      {/* Centered nav links */}
      <div className="flex-1 flex justify-center">
        <div className="flex gap-10">
          <div className="flex items-center">
            <span className="text-base font-semibold text-[#222]">Product</span>
            <svg
              className="ml-1 w-4 h-4 text-[#222]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <span className="text-base font-semibold text-[#222]">Changelog</span>
          <span className="text-base font-semibold text-[#222]">Manifesto</span>
          <div className="flex items-center">
            <span className="text-base font-semibold text-[#222]">
              Resources
            </span>
            <svg
              className="ml-1 w-4 h-4 text-[#222]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>
      {/* Login and Get started buttons */}
      <div className="flex gap-4">
        <button className="text-black text-base font-bold px-6 py-3 rounded-lg">
          Log in
        </button>
        <button className="bg-black text-white rounded-full text-base font-bold px-8 py-3 shadow-lg">
          Get started
        </button>
      </div>
    </nav>
  );
}
