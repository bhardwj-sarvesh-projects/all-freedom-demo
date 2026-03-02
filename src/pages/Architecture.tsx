import { Brain, Layers, Lock, Globe, Zap, Shield, Network, Database } from 'lucide-react';

export default function Architecture() {
  return (
    <div className="max-w-6xl mx-auto space-y-12 animate-fade-in">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <div className="p-3 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl">
            <Network className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white">System Architecture</h1>
        </div>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Enterprise-grade infrastructure built for global scale and zero downtime
        </p>
      </div>

      <div className="relative min-h-[600px]">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-cyan-500/5 to-purple-500/5 rounded-3xl" />

        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
            </linearGradient>
          </defs>

          <ConnectionLine x1="50%" y1="20%" x2="25%" y2="40%" />
          <ConnectionLine x1="50%" y1="20%" x2="75%" y2="40%" />
          <ConnectionLine x1="25%" y1="40%" x2="50%" y2="60%" />
          <ConnectionLine x1="75%" y1="40%" x2="50%" y2="60%" />
          <ConnectionLine x1="50%" y1="60%" x2="25%" y2="80%" />
          <ConnectionLine x1="50%" y1="60%" x2="75%" y2="80%" />
        </svg>

        <div className="relative z-10 space-y-12 py-12">
          <div className="flex justify-center">
            <ArchitectureNode
              icon={Brain}
              title="AI Intelligence Layer"
              description="Neural networks processing tax optimization and risk analysis"
              color="from-purple-500 to-pink-500"
              size="large"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ArchitectureNode
              icon={Layers}
              title="Blockchain Layer"
              description="Multi-chain infrastructure spanning Solana, Polygon, and Ethereum"
              color="from-blue-500 to-cyan-500"
            />
            <ArchitectureNode
              icon={Lock}
              title="Security & Encryption"
              description="End-to-end encryption with zero-knowledge proof systems"
              color="from-emerald-500 to-teal-500"
            />
          </div> 

          <div className="flex justify-center">
            <ArchitectureNode
              icon={Globe}
              title="Distributed Infrastructure"
              description="Global edge network with regional data sovereignty compliance"
              color="from-cyan-500 to-blue-500"
              size="large"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ArchitectureNode
              icon={Zap}
              title="Real-time Processing"
              description="Sub-millisecond transaction processing with automatic failover"
              color="from-yellow-500 to-orange-500"
            />
            <ArchitectureNode
              icon={Database}
              title="Data Sovereignty"
              description="Jurisdiction-specific data storage with encrypted replication"
              color="from-pink-500 to-rose-500"
            />
          </div> 
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
        <FeatureHighlight
          icon={Shield}
          title="Zero-Point-of-Failure Design"
          description="Redundant systems across multiple geographic regions ensure continuous operation even during infrastructure failures"
        />
        <FeatureHighlight
          icon={Lock}
          title="Privacy-First Architecture"
          description="Client-side encryption and zero-knowledge proofs ensure data privacy without sacrificing functionality"
        />
        <FeatureHighlight
          icon={Globe}
          title="Complaince Gateway"
          description="Streamline your regulatory requirements with integrated AML, zk-KYC, and immutable audit trails. Ensure maximum security and privacy for users"
        />
         <FeatureHighlight
          icon={Globe}
          title="Global Infrastructure Readiness"
          description="Distributed edge computing nodes positioned strategically for optimal latency and regulatory compliance"
        />
      </div>

      <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Technical Specifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <TechSpec label="Transaction Speed" value="<100ms" />
          <TechSpec label="Uptime SLA" value="99.99%" />
          <TechSpec label="Data Centers" value="12 Regions" />
          <TechSpec label="Encryption" value="AES-256" />
        </div>
      </div>
    </div>
  );
}

interface ConnectionLineProps {
  x1: string;
  y1: string;
  x2: string;
  y2: string;
}

function ConnectionLine({ x1, y1, x2, y2 }: ConnectionLineProps) {
  return (
    <>
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="url(#gradient1)"
        strokeWidth="2"
        strokeDasharray="5,5"
        className="animate-pulse"
      />
      <circle cx={x1} cy={y1} r="3" fill="#10b981" className="animate-pulse" />
    </>
  );
}

interface ArchitectureNodeProps {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  size?: 'normal' | 'large';
}

function ArchitectureNode({ icon: Icon, title, description, color, size = 'normal' }: ArchitectureNodeProps) {
  const sizeClasses = size === 'large' ? 'max-w-xl' : 'max-w-sm';

  return (
    <div className={`${sizeClasses} w-full group`}>
      <div className="relative">
        <div className={`absolute -inset-1 bg-gradient-to-r ${color} rounded-2xl blur-lg opacity-25 group-hover:opacity-75 transition-opacity duration-500`} />
        <div className="relative bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/50 transition-all duration-300">
          <div className={`p-4 bg-gradient-to-br ${color} rounded-xl w-fit mb-4 mx-auto`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2 text-center">{title}</h3>
          <p className="text-sm text-slate-400 text-center leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}

interface FeatureHighlightProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

function FeatureHighlight({ icon: Icon, title, description }: FeatureHighlightProps) {
  return (
    <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/50 transition-all duration-300 group">
      <div className="p-3 bg-emerald-500/10 rounded-xl w-fit mb-4 group-hover:bg-emerald-500/20 transition-colors">
        <Icon className="w-6 h-6 text-emerald-400" />
      </div>
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
    </div>
  );
}

interface TechSpecProps {
  label: string;
  value: string;
}

function TechSpec({ label, value }: TechSpecProps) {
  return (
    <div className="text-center">
      <p className="text-3xl font-bold text-white mb-1">{value}</p>
      <p className="text-sm text-slate-400">{label}</p>
    </div>
  );
}
