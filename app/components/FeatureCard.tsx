import React, { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 flex flex-col h-full">
      {/* Header with icon and title side by side */}
      <div className="flex items-center mb-5">
        <div className="mr-3 flex-shrink-0">{icon}</div>
        <h3 className="text-base font-semibold text-gray-800 leading-tight">
          {title}
        </h3>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
