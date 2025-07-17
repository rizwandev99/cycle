"use client";
import FeatureCard from "./FeatureCard";
import Image from "next/image";

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      {/* Section heading - kept within a max width container */}
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            The fastest feedback
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            capture you'll ever see
          </h2>
        </div>
      </div>

      {/* Feature cards - full width container with equal spacing */}
      <div className="w-full px-6 mb-16">
        <div className="flex flex-col lg:flex-row justify-between max-w-7xl mx-auto">
          <div className="max-w-sm w-full mx-auto lg:mx-0 mb-10 lg:mb-0">
            <FeatureCard
              icon={
                <div className="bg-blue-50 w-10 h-10 rounded-lg flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-blue-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
              }
              title="Capture feedback from anywhere"
              description="Connect your sources (Slack, Intercom, Hubspot, Email) & more to create feedback with context"
            />
          </div>

          <div className="max-w-sm w-full mx-auto lg:mx-0 mb-10 lg:mb-0">
            <FeatureCard
              icon={
                <div className="bg-indigo-50 w-10 h-10 rounded-lg flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-indigo-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              }
              title="Record & transcribe customer calls"
              description="Invite Cycle's recorder to any Zoom, G Meet or MS Teams call to fetch transcripts & summaries"
            />
          </div>

          <div className="max-w-sm w-full mx-auto lg:mx-0">
            <FeatureCard
              icon={
                <div className="bg-purple-50 w-10 h-10 rounded-lg flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-purple-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              }
              title="Document your user research"
              description="Co-write docs in real-time, add things like topics & taggings, and translate or rephrase with AI"
            />
          </div>
        </div>
      </div>

      {/* App Screenshot - kept within a max width container */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative rounded-lg overflow-hidden bg-white shadow-md border border-gray-100">
          <Image
            src="/images/feedback-photo.png"
            alt="Cycle feedback interface"
            width={1200}
            height={600}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
