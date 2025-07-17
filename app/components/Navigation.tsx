import Image from "next/image";

export default function Navigation() {
  return (
    <nav className="flex justify-between items-center px-8 py-6">
      <div className="flex items-center">
        <div className="mr-10">
          <Image
            src="/next.svg" // Replace with Cycle logo when available
            alt="Cycle Logo"
            width={120}
            height={20}
            priority
            className="dark:invert"
          />
        </div>
        <div className="flex gap-8">
          <div className="flex items-center">
            <span className="text-sm font-medium">Product</span>
            <svg
              className="ml-1 w-4 h-4"
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
          <span className="text-sm font-medium">Changelog</span>
          <span className="text-sm font-medium">Manifesto</span>
          <div className="flex items-center">
            <span className="text-sm font-medium">Resources</span>
            <svg
              className="ml-1 w-4 h-4"
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
      <div className="flex gap-4">
        <button className="text-black text-sm font-medium px-4 py-2">
          Log in
        </button>
        <button className="bg-black text-white rounded-full text-sm font-medium px-6 py-2">
          Get started
        </button>
      </div>
    </nav>
  );
}
