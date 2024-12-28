import React, { useState } from 'react';

export const metadata = {
  title: 'UK Salary Calculator 2024/25 | Take Home Pay',
  description: 'Calculate your take-home pay after tax and National Insurance. Updated for 2024/25 tax year.'
};

export default function SalaryCalculator() {
  const [salary, setSalary] = useState('');
  const [period, setPeriod] = useState('yearly');
  const [results, setResults] = useState(null);

  const calculateTax = (yearlyAmount) => {
    // Personal Allowance
    const personalAllowance = 12570;
    const taxableIncome = Math.max(0, yearlyAmount - personalAllowance);
    
    // Calculate Income Tax
    let tax = 0;
    if (taxableIncome > 0) {
      // Basic rate 20% (up to £37,700)
      tax += Math.min(taxableIncome, 37700) * 0.2;
      
      // Higher rate 40% (£37,701 to £150,000)
      if (taxableIncome > 37700) {
        tax += (Math.min(taxableIncome, 150000) - 37700) * 0.4;
      }
    }
    
    // National Insurance
    let ni = 0;
    if (yearlyAmount > 12570) {
      ni = (yearlyAmount - 12570) * 0.12;
    }
    
    return {
      grossIncome: yearlyAmount,
      tax,
      ni,
      takeHome: yearlyAmount - tax - ni
    };
  };

  const handleCalculate = () => {
    if (!salary) return;
    
    const yearlyAmount = period === 'monthly' ? Number(salary) * 12 : Number(salary);
    const calculatedResults = calculateTax(yearlyAmount);
    setResults(calculatedResults);
  };

  return (
    <main className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">UK Salary Calculator 2024/25</h1>
      
      {/* Calculator Input Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-2">Enter Salary</label>
            <input
              type="number"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              className="w-full p-3 border rounded-lg"
              placeholder="e.g. 30000"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Period</label>
            <select
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
              className="w-full p-3 border rounded-lg"
            >
              <option value="yearly">Yearly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
        </div>
        <button
          onClick={handleCalculate}
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Calculate Take Home Pay
        </button>
      </div>

      {/* Results Section */}
      {results && (
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Your Results</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Monthly Take Home</h3>
              <p className="text-3xl font-bold text-green-600">
                £{(results.takeHome / 12).toFixed(2)}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Yearly Take Home</h3>
              <p className="text-3xl font-bold text-green-600">
                £{results.takeHome.toFixed(2)}
              </p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t">
            <h3 className="text-lg font-medium mb-3">Deductions</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Income Tax</span>
                <span className="font-semibold">£{results.tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>National Insurance</span>
                <span className="font-semibold">£{results.ni.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Ad Space */}
      <div className="w-full h-24 bg-gray-100 mb-8 flex items-center justify-center">
        <p className="text-gray-500">Advertisement Space</p>
      </div>

      {/* SEO Content */}
      <div className="prose max-w-none">
        <h2 className="text-2xl font-semibold mb-4">Understanding UK Tax Rates 2024/25</h2>
        <p className="mb-4">
          Our calculator uses the latest tax rates and thresholds for the 2024/25 tax year:
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>Personal Allowance: £12,570 (the amount you don't pay tax on)</li>
          <li>Basic rate: 20% on income between £12,571 to £50,270</li>
          <li>Higher rate: 40% on income between £50,271 to £150,000</li>
          <li>National Insurance: 12% on income above £12,570</li>
        </ul>
      </div>
    </main>
  );
}