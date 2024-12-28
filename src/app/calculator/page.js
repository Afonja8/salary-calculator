export default function Home() {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold mb-6">UK Salary Calculator 2024/25</h1>
        <p className="text-xl text-gray-600 mb-8">
          Calculate your take-home pay instantly and accurately
        </p>
        <a 
          href="/calculator" 
          className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Calculate Now
        </a>
      </div>
    );
  }