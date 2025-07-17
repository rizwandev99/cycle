export default function FeedbackStatusPanel() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm h-full">
      {/* Header */}
      <div className="flex items-center mb-6">
        <div className="bg-blue-100 p-1 rounded mr-2">
          <svg
            className="w-4 h-4 text-blue-600"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <h2 className="font-medium text-gray-800">Feedback status</h2>
      </div>

      {/* Circular Chart */}
      <div className="flex justify-center">
        <div className="relative w-40 h-40">
          {/* SVG Circle Chart */}
          <svg className="w-full h-full" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              stroke="#f3f4f6"
              strokeWidth="12"
            />

            {/* Pink segment (~25%) */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              stroke="#f472b6"
              strokeWidth="12"
              strokeDasharray="62.8 251.2"
              strokeDashoffset="0"
              strokeLinecap="round"
              transform="rotate(-90 50 50)"
            />

            {/* Blue segment (~35%) */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              stroke="#60a5fa"
              strokeWidth="12"
              strokeDasharray="87.92 226.08"
              strokeDashoffset="-62.8"
              strokeLinecap="round"
              transform="rotate(-90 50 50)"
            />

            {/* Green segment (~40%) */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              stroke="#34d399"
              strokeWidth="12"
              strokeDasharray="100.48 213.52"
              strokeDashoffset="-150.72"
              strokeLinecap="round"
              transform="rotate(-90 50 50)"
            />

            {/* Center white circle */}
            <circle cx="50" cy="50" r="30" fill="white" />
          </svg>

          {/* Status dots to the right */}
          <div className="absolute top-1/2 -translate-y-1/2 -right-12 flex flex-col gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
            <div className="w-3 h-3 rounded-full bg-pink-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
