import { TrendingUp, Shield, Globe, Sparkles, CheckCircle2, BarChart3 } from 'lucide-react';
import { useState } from 'react';

export default function Dashboard() {
  const [selectedCountry, setSelectedCountry] = useState('Singapore');

  const countries = ['Singapore', 'UAE', 'Switzerland', 'Estonia', 'Portugal', 'Malta'];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Capital Dashboard</h1>
          <p className="text-slate-400">Real-time overview of your protected assets</p>
        </div>

        <div className="flex items-center space-x-2">
          <Globe className="w-4 h-4 text-emerald-400" />
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className="bg-slate-800/50 border border-slate-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
          >
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Capital"
          value="$2,847,392"
          change="+12.4%"
          icon={TrendingUp}
          positive={true}
        />
        <StatCard
          title="Shield Vault"
          value="$1,920,500"
          change="Protected"
          icon={Shield}
          positive={true}
        />
        <StatCard
          title="Success Fee"
          value="15% Performance-Based"
          change="Excellent"
          icon={Sparkles}
          positive={true}
        />
        <StatCard
          title="Security Status"
          value="Verified"
          change="Active"
          icon={CheckCircle2}
          positive={true}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-white">Capital Growth</h2>
            <div className="flex space-x-2 text-xs">
              <button className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-lg">6M</button>
              <button className="px-3 py-1 text-slate-400 hover:bg-slate-800 rounded-lg transition-colors">1Y</button>
              <button className="px-3 py-1 text-slate-400 hover:bg-slate-800 rounded-lg transition-colors">ALL</button>
            </div>
          </div>
          <CapitalChart />
        </div>

        <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6">
          <div className="flex items-center space-x-2 mb-6">
            <Sparkles className="w-5 h-5 text-emerald-400" />
            <h2 className="text-xl font-semibold text-white">AI Insights</h2>
          </div>
          <div className="space-y-4">
            <InsightCard
              title="Tax Optimization Detected"
              description="Potential 18% savings identified through strategic jurisdiction allocation"
              priority="high"
            />
            <InsightCard
              title="Success Fee Model"
              description="15% Performance based"
              priority="medium"
            />
            <InsightCard
              title="Capital Rebalancing"
              description="Consider moving 12% to low-tax jurisdictions"
              priority="medium"
            />
            <InsightCard
              title="Security Alert"
              description="All systems operational. No threats detected."
              priority="low"
            />
          </div>
        </div>
      </div>

      <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Jurisdiction Distribution</h2>
        <JurisdictionBars />
      </div>
    </div>
  );
}

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ElementType;
  positive: boolean;
}

function StatCard({ title, value, change, icon: Icon, positive }: StatCardProps) {
  return (
    <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/50 transition-all duration-300 group">
      <div className="flex items-start justify-between mb-4">
        <div className="p-2 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-colors">
          <Icon className="w-5 h-5 text-emerald-400" />
        </div>
        <span className={`text-xs font-medium px-2 py-1 rounded-full ${positive ? 'bg-emerald-500/10 text-emerald-400' : 'bg-slate-700 text-slate-400'}`}>
          {change}
        </span>
      </div>
      <h3 className="text-sm text-slate-400 mb-1">{title}</h3>
      <p className="text-2xl font-bold text-white">{value}</p>
    </div>
  );
}

interface InsightCardProps {
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
}

function InsightCard({ title, description, priority }: InsightCardProps) {
  const colors = {
    high: 'border-emerald-500/50 bg-emerald-500/5',
    medium: 'border-cyan-500/50 bg-cyan-500/5',
    low: 'border-slate-700 bg-slate-800/30',
  };

  return (
    <div className={`border ${colors[priority]} rounded-xl p-4 transition-all hover:scale-105`}>
      <h3 className="text-sm font-semibold text-white mb-1">{title}</h3>
      <p className="text-xs text-slate-400">{description}</p>
    </div>
  );
}

function CapitalChart() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const values = [65, 72, 78, 85, 88, 94];

  return (
    <div className="h-64 flex items-end justify-between space-x-2">
      {months.map((month, i) => (
        <div key={month} className="flex-1 flex flex-col items-center space-y-2">
          <div className="w-full bg-slate-800 rounded-t-lg overflow-hidden relative group">
            <div
              className="bg-gradient-to-t from-emerald-500 to-cyan-400 transition-all duration-1000 ease-out hover:from-emerald-400 hover:to-cyan-300"
              style={{
                height: `${(values[i] / 100) * 240}px`,
                animationDelay: `${i * 100}ms`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="text-xs text-slate-400">{month}</span>
        </div>
      ))}
    </div>
  );
}

function JurisdictionBars() {
  const jurisdictions = [
    { name: 'Singapore', percentage: 35, color: 'bg-emerald-500' },
    { name: 'UAE', percentage: 25, color: 'bg-cyan-500' },
    { name: 'Switzerland', percentage: 20, color: 'bg-blue-500' },
    { name: 'Estonia', percentage: 12, color: 'bg-purple-500' },
    { name: 'Portugal', percentage: 8, color: 'bg-pink-500' },
  ];

  return (
    <div className="space-y-4">
      {jurisdictions.map((jurisdiction, i) => (
        <div key={jurisdiction.name} className="group">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-slate-300">{jurisdiction.name}</span>
            <span className="text-sm font-semibold text-white">{jurisdiction.percentage}%</span>
          </div>
          <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
            <div
              className={`h-full ${jurisdiction.color} transition-all duration-1000 ease-out group-hover:opacity-80`}
              style={{
                width: `${jurisdiction.percentage}%`,
                animationDelay: `${i * 100}ms`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
