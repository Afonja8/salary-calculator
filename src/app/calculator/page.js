'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Calculator() {
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
      <div className="mb-8">
        <Link 
          href="/" 
          className="text-blue-500 hover:text-blue-600 mb-4 inline-block"
        >
          ← Back to Home
        </Link>
        <h1 className="text-3xl font-bold">UK Salary Calculator 2024/25</h1>
      </div>
      
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
        <div className="bg-white rounded-lg shadow-md p-6">
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
    </main>
  );
}