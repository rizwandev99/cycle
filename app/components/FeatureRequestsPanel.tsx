import Image from "next/image";

export default function FeatureRequestsPanel() {
  // Mock data for feature requests
  const featureRequests = [
    { id: 1, name: "Feature Request 1", progress: 75 },
    { id: 2, name: "Feature Request 2", progress: 60 },
    { id: 3, name: "Feature Request 3", progress: 90 },
    { id: 4, name: "Feature Request 4", progress: 80 },
    { id: 5, name: "Feature Request 5", progress: 40 },
  ];

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
            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5z"></path>
            <path d="M11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
          </svg>
        </div>
        <h2 className="font-medium text-gray-800">Top feature requests</h2>
      </div>

      {/* Feature Request Bars */}
      <div className="space-y-4">
        {featureRequests.map((feature) => (
          <div key={feature.id} className="flex items-center">
            <div className="w-full">
              <div className="flex items-center mb-1">
                <div className="h-2 bg-gray-100 rounded-full w-full">
                  <div
                    className="h-2 bg-blue-400 rounded-full"
                    style={{ width: `${feature.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
