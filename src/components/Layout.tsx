import { Link, useLocation } from 'react-router-dom';
import { Shield, Brain, GitBranch, LayoutDashboard } from 'lucide-react';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/ai-tax-engine', label: 'AI Tax Oracle', icon: Brain },
    { path: '/shield-flow', label: 'Shield Flow', icon: Shield },
    { path: '/architecture', label: 'Architecture', icon: GitBranch },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <nav className="border-b border-slate-800/50 bg-slate-950/50 backdrop-blur-xl sticky top-0 z-50"> 
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <img 
                  src="https://drive.google.com/thumbnail?id=17Y3EBRZE_Iu2-lBYeuX06IAcH3RwjO5D" 
                  alt="All Freedom Logo" className="w-8 h-8"/> 
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                ALL Freedom
              </span>
            </div>

            <div className="flex space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'bg-emerald-500/20 text-emerald-400'
                        : 'text-slate-400 hover:text-emerald-400 hover:bg-slate-800/50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="hidden sm:inline text-sm font-medium">{item.label}</span>
                  </Link>
                ); 
              })}
            </div>
          </div>
        </div>
      </nav> 

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      <div className="fixed bottom-4 right-4 px-3 py-1.5 bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-full text-xs text-slate-400">
        Privacy First • Non-Custodial • Comlpiance Ready
      </div>
    </div>
  );
}
