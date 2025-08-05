import React from 'react';
import './globals.css';

export default function Landing(): React.JSX.Element {
  const handleMarket1 = () => {
    window.location.href = '/market1';
  };

  const handleMarket2 = () => {
    window.location.href = '/market2';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Welcome to Perp City</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover the future of decentralized perpetual trading across multiple markets
          </p>
        </div>

        {/* Markets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Market 1 Card */}
          <div 
            onClick={handleMarket1}
            className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer group"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Market 1</h3>
              <p className="text-gray-300 mb-4">Advanced Perpetual Trading Platform</p>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex justify-between">
                  <span>24h Volume:</span>
                  <span className="text-green-400">$2.1B</span>
                </div>
                <div className="flex justify-between">
                  <span>Active Traders:</span>
                  <span className="text-blue-400">12,847</span>
                </div>
                <div className="flex justify-between">
                  <span>Avg. Spread:</span>
                  <span className="text-purple-400">0.02%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Market 2 Card */}
          <div 
            onClick={handleMarket2}
            className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer group"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Market 2</h3>
              <p className="text-gray-300 mb-4">Professional Derivatives Exchange</p>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex justify-between">
                  <span>24h Volume:</span>
                  <span className="text-green-400">$1.8B</span>
                </div>
                <div className="flex justify-between">
                  <span>Active Traders:</span>
                  <span className="text-blue-400">9,234</span>
                </div>
                <div className="flex justify-between">
                  <span>Avg. Spread:</span>
                  <span className="text-purple-400">0.015%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-8">Why Choose Perp City?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
              <div className="w-12 h-12 bg-blue-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-gray-300">Sub-second execution with advanced order matching</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
              <div className="w-12 h-12 bg-green-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Trading</h3>
              <p className="text-gray-300">Enterprise-grade security with multi-layer protection</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
              <div className="w-12 h-12 bg-purple-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Low Fees</h3>
              <p className="text-gray-300">Competitive pricing with volume-based discounts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
