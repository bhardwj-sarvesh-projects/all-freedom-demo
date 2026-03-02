import { useState } from 'react';
import { Brain, Sparkles, TrendingUp, DollarSign, Loader2 } from 'lucide-react';

export default function AITaxEngine() {
  const [formData, setFormData] = useState({
    country: 'United States',
    income: '',
    businessType: 'Technology',
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const countries = [
    'United States', 'United Kingdom', 'Germany', 'France', 'Canada',
    'Australia', 'Singapore', 'UAE', 'Switzerland', 'Estonia'
  ];

  const businessTypes = [
    'Technology', 'Consulting', 'E-commerce', 'Finance',
    'Real Estate', 'Healthcare', 'Manufacturing', 'Services'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setShowResults(false);

    setTimeout(() => {
      setIsProcessing(false);
      setShowResults(true);
    }, 2500);
  };

  const savings = formData.income ? Math.round(parseFloat(formData.income) * 0.18) : 0;
  const savingsPercentage = 18;

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-fade-in">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <div className="p-3 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white">AI Tax Oracle (AITO)</h1> 
        </div>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Advanced AI-powered tax optimization simulation. Get instant insights on potential savings.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-white mb-6">Input Parameters</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Country
              </label>
              <select
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                className="w-full bg-slate-800/50 border border-slate-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
              >
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Annual Income (USD)
              </label>
              <input
                type="number"
                value={formData.income}
                onChange={(e) => setFormData({ ...formData, income: e.target.value })}
                placeholder="e.g., 500000"
                className="w-full bg-slate-800/50 border border-slate-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Business Type
              </label>
              <select
                value={formData.businessType}
                onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                className="w-full bg-slate-800/50 border border-slate-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
              >
                {businessTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              disabled={isProcessing || !formData.income}
              className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold py-3 rounded-lg hover:from-emerald-600 hover:to-cyan-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>AI Processing...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  <span>Run AI Optimization</span>
                </>
              )}
            </button>
          </form>
        </div>

        <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-white mb-6">Optimization Results</h2>

          {!showResults && !isProcessing && (
            <div className="h-full flex items-center justify-center text-center">
              <div className="text-slate-500">
                <Brain className="w-16 h-16 mx-auto mb-4 opacity-20" />
                <p>Run the AI engine to see optimization results</p>
              </div>
            </div>
          )}

          {isProcessing && (
            <div className="h-full flex items-center justify-center">
              <div className="text-center">
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <div className="absolute inset-0 border-4 border-emerald-500/20 rounded-full" />
                  <div className="absolute inset-0 border-4 border-emerald-500 rounded-full border-t-transparent animate-spin" />
                  <Brain className="w-12 h-12 text-emerald-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </div>
                <p className="text-slate-300 font-medium">Analyzing tax scenarios...</p>
                <p className="text-slate-500 text-sm mt-2">Processing optimization strategies</p>
              </div>
            </div>
          )}

          {showResults && (
            <div className="space-y-6 animate-fade-in">
              <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 rounded-xl p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Sparkles className="w-5 h-5 text-emerald-400" />
                  <h3 className="text-lg font-semibold text-white">Optimization Opportunity Found</h3>
                </div>
                <p className="text-slate-300 text-sm">
                  AI analysis complete. Strategic optimization pathways identified.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <div className="flex items-center space-x-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs text-slate-400">Potential Savings</span>
                  </div>
                  <p className="text-2xl font-bold text-white">{savingsPercentage}%</p>
                </div>

                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <div className="flex items-center space-x-2 mb-2">
                    <DollarSign className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs text-slate-400">Annual Savings</span>
                  </div>
                  <p className="text-2xl font-bold text-white">${savings.toLocaleString()}</p>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-white">Suggested Strategy</h3>
                <div className="space-y-2">
                  <StrategyStep
                    number={1}
                    text="Establish presence in UAE Free Zone (0% corporate tax)"
                  />
                  <StrategyStep
                    number={2}
                    text="Route intellectual property through Estonia e-Residency"
                  />
                  <StrategyStep
                    number={3}
                    text="Estimated Platform Sucess Fee : 15%"
                  />
                  <StrategyStep
                    number={4}
                    text="Legal Efficiency Zone : 25% - 40%"
                  />
                </div>
              </div>

              <div className="bg-gradient-to-r from-emerald-500/10 to-transparent border-l-4 border-emerald-500 p-4 rounded">
                <p className="text-sm text-slate-300">
                  <span className="font-semibold text-emerald-400">Capital Growth Projection:</span> +{savingsPercentage}% increase in retained earnings over 12 months
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

interface StrategyStepProps {
  number: number;
  text: string;
}

function StrategyStep({ number, text }: StrategyStepProps) {
  return (
    <div className="flex items-start space-x-3 bg-slate-800/30 rounded-lg p-3 border border-slate-700/50">
      <div className="flex-shrink-0 w-6 h-6 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center text-xs font-bold">
        {number}
      </div>
      <p className="text-sm text-slate-300">{text}</p>
    </div>
  );
}
