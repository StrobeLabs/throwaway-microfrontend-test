import React from 'react';

export default function Market1(): React.JSX.Element {
  const handleBack = () => {
    window.location.href = '/';
  };

  return (
    <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white min-h-screen">
      {/* Back Button */}
      <div className="p-6">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-200 border border-white/10 hover:border-white/20"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to All Markets
        </button>
      </div>

      {/* Market Header */}
      <div className="text-center py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-green-400">Live Trading</span>
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Market 1
          </h1>
          <p className="text-xl text-blue-200 mb-8">Advanced Perpetual Trading Platform</p>
          
          {/* Market Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="text-2xl font-bold text-green-400">$1,234.56</div>
              <div className="text-sm text-gray-300">Current Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="text-2xl font-bold text-green-400">+2.34%</div>
              <div className="text-sm text-gray-300">24h Change</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="text-2xl font-bold text-blue-400">$2.1B</div>
              <div className="text-sm text-gray-300">24h Volume</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="text-2xl font-bold text-purple-400">12,847</div>
              <div className="text-sm text-gray-300">Active Traders</div>
            </div>
          </div>
        </div>
      </div>

      {/* Trading Interface */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Book */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Order Book</h3>
              <div className="flex gap-2">
                <button className="px-3 py-1 text-xs bg-blue-500/20 rounded-full border border-blue-400/30">Bids</button>
                <button className="px-3 py-1 text-xs bg-red-500/20 rounded-full border border-red-400/30">Asks</button>
              </div>
            </div>
            <div className="space-y-2">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center py-3 px-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/5"
                >
                  <span className="text-green-400 font-medium">
                    ${(1000 - i * 10).toFixed(2)}
                  </span>
                  <span className="text-gray-300">
                    {(Math.random() * 100).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Trading Chart */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Price Chart</h3>
              <div className="flex gap-2">
                <button className="px-3 py-1 text-xs bg-white/10 rounded-full">1H</button>
                <button className="px-3 py-1 text-xs bg-blue-500/20 rounded-full border border-blue-400/30">4H</button>
                <button className="px-3 py-1 text-xs bg-white/10 rounded-full">1D</button>
              </div>
            </div>
            <div className="h-64 bg-gradient-to-t from-green-500/20 to-red-500/20 rounded-xl flex items-end justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
              <div className="text-4xl font-bold text-green-400 relative z-10">
                $1,234.56
              </div>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-green-400 font-semibold">+2.34%</span>
              <span className="text-gray-400 text-sm">24h Change</span>
            </div>
          </div>

          {/* Trading Panel */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-xl">
            <h3 className="text-xl font-semibold mb-6">Trade</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-3">Amount</label>
                <div className="relative">
                  <input
                    type="number"
                    placeholder="0.00"
                    className="w-full px-4 py-3 bg-white/10 rounded-xl border border-white/20 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-400">
                    USDC
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-3">Price</label>
                <input
                  type="number"
                  placeholder="1234.56"
                  className="w-full px-4 py-3 bg-white/10 rounded-xl border border-white/20 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <button className="px-6 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Buy
                </button>
                <button className="px-6 py-4 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Sell
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 