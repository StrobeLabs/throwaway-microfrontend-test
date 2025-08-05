import React from 'react';

export default function Market2(): React.JSX.Element {
  const handleBack = () => {
    window.location.href = '/';
  };

  return (
    <div className="bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white min-h-screen">
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
            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-emerald-400">Live Trading</span>
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Market 2
          </h1>
          <p className="text-xl text-emerald-200 mb-8">Professional Derivatives Exchange</p>
          
          {/* Market Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="text-2xl font-bold text-emerald-400">$2,567.89</div>
              <div className="text-sm text-gray-300">Current Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="text-2xl font-bold text-emerald-400">+5.67%</div>
              <div className="text-sm text-gray-300">24h Change</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="text-2xl font-bold text-teal-400">$1.2B</div>
              <div className="text-sm text-gray-300">24h Volume</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="text-2xl font-bold text-cyan-400">9,234</div>
              <div className="text-sm text-gray-300">Active Traders</div>
            </div>
          </div>
        </div>
      </div>

      {/* Trading Interface */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          {/* Market Overview */}
          <div className="xl:col-span-2 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Market Overview</h3>
              <div className="flex gap-2">
                <button className="px-3 py-1 text-xs bg-emerald-500/20 rounded-full border border-emerald-400/30">Overview</button>
                <button className="px-3 py-1 text-xs bg-white/10 rounded-full">Analytics</button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-xl p-4 border border-white/5 hover:bg-white/10 transition-colors">
                <div className="text-2xl font-bold text-emerald-400">$2,567.89</div>
                <div className="text-sm text-gray-300">Current Price</div>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/5 hover:bg-white/10 transition-colors">
                <div className="text-2xl font-bold text-emerald-400">+5.67%</div>
                <div className="text-sm text-gray-300">24h Change</div>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/5 hover:bg-white/10 transition-colors">
                <div className="text-2xl font-bold text-emerald-400">$1.2B</div>
                <div className="text-sm text-gray-300">24h Volume</div>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/5 hover:bg-white/10 transition-colors">
                <div className="text-2xl font-bold text-emerald-400">$45.6M</div>
                <div className="text-sm text-gray-300">Open Interest</div>
              </div>
            </div>
          </div>

          {/* Quick Trade */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-xl">
            <h3 className="text-xl font-semibold mb-6">Quick Trade</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-3">Position Size</label>
                <select className="w-full px-4 py-3 bg-white/10 rounded-xl border border-white/20 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all">
                  <option>1x</option>
                  <option>2x</option>
                  <option>5x</option>
                  <option>10x</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-3">Amount (USDC)</label>
                <input
                  type="number"
                  placeholder="1000"
                  className="w-full px-4 py-3 bg-white/10 rounded-xl border border-white/20 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <button className="px-6 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Long
                </button>
                <button className="px-6 py-4 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Short
                </button>
              </div>
            </div>
          </div>

          {/* Recent Trades */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Recent Trades</h3>
              <button className="px-3 py-1 text-xs bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                View All
              </button>
            </div>
            <div className="space-y-3">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center py-3 px-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/5"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${
                      Math.random() > 0.5 ? 'bg-emerald-400' : 'bg-rose-400'
                    }`} />
                    <span className="text-sm font-medium">
                      ${(2500 + Math.random() * 200).toFixed(2)}
                    </span>
                  </div>
                  <span className="text-xs text-gray-400">
                    {(Math.random() * 10).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Advanced Trading Panel */}
        <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-xl">
          <h3 className="text-xl font-semibold mb-6">Advanced Trading</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium mb-3">Stop Loss</label>
              <input
                type="number"
                placeholder="2400"
                className="w-full px-4 py-3 bg-white/10 rounded-xl border border-white/20 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-3">Take Profit</label>
              <input
                type="number"
                placeholder="2700"
                className="w-full px-4 py-3 bg-white/10 rounded-xl border border-white/20 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-3">Leverage</label>
              <select className="w-full px-4 py-3 bg-white/10 rounded-xl border border-white/20 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all">
                <option>1x</option>
                <option>2x</option>
                <option>5x</option>
                <option>10x</option>
                <option>20x</option>
                <option>50x</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 