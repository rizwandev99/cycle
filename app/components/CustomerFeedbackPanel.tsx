export default function CustomerFeedbackPanel() {
  // Mock data for customer feedback
  const customers = [
    { id: 1, name: "Customer 1", feedback: 80 },
    { id: 2, name: "Customer 2", feedback: 45 },
    { id: 3, name: "Customer 3", feedback: 90 },
    { id: 4, name: "Customer 4", feedback: 65 },
    { id: 5, name: "Customer 5", feedback: 75 },
    { id: 6, name: "Customer 6", feedback: 30 },
    { id: 7, name: "Customer 7", feedback: 85 },
  ];

  // Find the maximum feedback value for scaling
  const maxFeedback = Math.max(...customers.map((c) => c.feedback));

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
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
          </svg>
        </div>
        <h2 className="font-medium text-gray-800">
          Customers with most feedback
        </h2>
      </div>

      {/* Bar Chart */}
      <div className="flex items-end justify-between h-48 mt-4">
        {customers.map((customer) => (
          <div key={customer.id} className="flex flex-col items-center">
            <div
              className="w-8 bg-pink-300 rounded-t-md"
              style={{
                height: `${(customer.feedback / maxFeedback) * 100}%`,
              }}
            ></div>
            <div className="mt-2 w-6 h-6 bg-gray-100 rounded-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
