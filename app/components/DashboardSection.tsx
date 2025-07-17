import FeatureRequestsPanel from "./FeatureRequestsPanel";
import FeedbackStatusPanel from "./FeedbackStatusPanel";
import CustomerFeedbackPanel from "./CustomerFeedbackPanel";
import CustomerQuotesPanel from "./CustomerQuotesPanel";
import Image from "next/image";

export default function DashboardSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main container with border */}
        <div className="border border-gray-200 rounded-xl bg-white p-8 flex flex-col md:flex-row gap-8">
          {/* Left side with person and icons - with equal spacing */}
          <div className="w-full md:w-1/4 flex flex-col items-center border border-dashed border-blue-200 rounded-lg p-6 min-h-[600px]">
            {/* Person image - at top with equal spacing */}
            <div className="w-full mb-auto mt-6 pb-8">
              <Image
                src="/images/person.png"
                alt="Person with pen"
                width={250}
                height={200}
                className="w-full h-auto"
              />
            </div>

            {/* Icons grid - in middle with equal spacing */}
            <div className="grid grid-cols-4 gap-4 w-full max-w-xs mb-auto mt-0 py-8">
              {/* First row */}
              <div className="bg-[#f5f8fc] rounded-full p-3 flex items-center justify-center">
                <Image
                  src="/images/logos.png"
                  alt="Camera icon"
                  width={20}
                  height={20}
                />
              </div>
              <div className="bg-[#f5f8fc] rounded-full p-3 flex items-center justify-center">
                <div className="w-5 h-5 bg-red-500 rounded"></div>
              </div>
              <div className="bg-[#f5f8fc] rounded-full p-3 flex items-center justify-center">
                <div className="w-5 h-5 bg-gray-500 rounded"></div>
              </div>
              <div className="bg-[#f5f8fc] rounded-full p-3 flex items-center justify-center">
                <div className="w-5 h-5 bg-gray-500 rounded"></div>
              </div>

              {/* Second row */}
              <div className="bg-[#f5f8fc] rounded-full p-3 flex items-center justify-center">
                <div className="w-5 h-5 text-purple-500">✨</div>
              </div>
              <div className="bg-[#f5f8fc] rounded-full p-3 flex items-center justify-center">
                <div className="w-5 h-5 text-orange-500">🔥</div>
              </div>
              <div className="bg-[#f5f8fc] rounded-full p-3 flex items-center justify-center">
                <div className="w-5 h-5 text-blue-500">❄️</div>
              </div>
              <div className="bg-[#f5f8fc] rounded-full p-3 flex items-center justify-center">
                <div className="w-5 h-5 bg-blue-500 rounded"></div>
              </div>

              {/* Third row */}
              <div className="bg-[#f5f8fc] rounded-full p-3 flex items-center justify-center">
                <div className="w-5 h-5 text-red-500">🎯</div>
              </div>
              <div className="bg-[#f5f8fc] rounded-full p-3 flex items-center justify-center">
                <div className="w-5 h-5 text-blue-500">🔊</div>
              </div>
              <div className="bg-[#f5f8fc] rounded-full p-3 flex items-center justify-center">
                <div className="w-5 h-5 bg-blue-500 rounded"></div>
              </div>
              <div className="bg-[#f5f8fc] rounded-full p-3 flex items-center justify-center">
                <div className="w-5 h-5 text-gray-500">📊</div>
              </div>
            </div>

            {/* Globe image - at bottom with equal spacing */}
            <div className="w-full flex justify-center mb-6 mt-auto pt-8">
              <Image
                src="/images/globe.png"
                alt="Globe"
                width={80}
                height={80}
              />
            </div>
          </div>

          {/* Right side with dashboard panels */}
          <div className="w-full md:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First row */}
              <div>
                {/* Panel header with icon and text */}
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-1 rounded mr-2">
                    <svg
                      className="w-4 h-4 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-medium text-gray-800">
                    Top feature requests
                  </h3>
                </div>
                <div className="h-full">
                  <Image
                    src="/images/top-feature-requests.png"
                    alt="Top feature requests"
                    width={500}
                    height={250}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div>
                {/* Panel header with icon and text */}
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-1 rounded mr-2">
                    <svg
                      className="w-4 h-4 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-medium text-gray-800">Feedback status</h3>
                </div>
                <div className="h-full">
                  <Image
                    src="/images/feedback-status.png"
                    alt="Feedback status"
                    width={500}
                    height={250}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Second row */}
              <div>
                {/* Panel header with icon and text */}
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-1 rounded mr-2">
                    <svg
                      className="w-4 h-4 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-medium text-gray-800">
                    Customers with most feedback
                  </h3>
                </div>
                <div className="h-full">
                  <Image
                    src="/images/customers-with-most-feedback.png"
                    alt="Customers with most feedback"
                    width={500}
                    height={250}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div>
                {/* Panel header with icon and text */}
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-1 rounded mr-2">
                    <svg
                      className="w-4 h-4 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-medium text-gray-800">
                    Summary of customer quotes
                  </h3>
                </div>
                <div className="h-full">
                  <Image
                    src="/images/summary of customer quotes.png"
                    alt="Summary of customer quotes"
                    width={500}
                    height={250}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Book demo button */}
        <div className="flex justify-center mt-10">
          <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
            Book demo
          </button>
        </div>
      </div>
    </section>
  );
}
