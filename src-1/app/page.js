export default function Home() {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            UK Salary Calculator 2024/25
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Calculate your take-home pay instantly
          </p>
          <a 
            href="/calculator" 
            className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Calculate Now
          </a>
        </section>
  
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="p-6 border rounded-lg text-center">
            <h3 className="font-semibold mb-2">Updated for 2024/25</h3>
            <p className="text-gray-600">Latest tax rates and thresholds</p>
          </div>
          <div className="p-6 border rounded-lg text-center">
            <h3 className="font-semibold mb-2">Instant Results</h3>
            <p className="text-gray-600">Calculate your take-home pay in seconds</p>
          </div>
          <div className="p-6 border rounded-lg text-center">
            <h3 className="font-semibold mb-2">Detailed Breakdown</h3>
            <p className="text-gray-600">See all tax and NI deductions</p>
          </div>
        </div>
      </div>
    );
  }