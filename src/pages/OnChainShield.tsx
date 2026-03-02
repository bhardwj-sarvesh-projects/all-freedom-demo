import { Shield, ArrowRight, Wallet, Lock, CheckCircle2, Zap, DollarSign } from 'lucide-react';

export default function OnChainShield() {
  return (
    <div className="max-w-6xl mx-auto space-y-12 animate-fade-in">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <div className="p-3 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white">On-Chain Shield Flow</h1>
        </div>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Secure, transparent capital protection powered by blockchain infrastructure
        </p>
      </div>

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-cyan-500/5 to-emerald-500/5 rounded-3xl blur-3xl" />

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-6">
          <FlowCard
            icon={Wallet}
            title="User Wallet"
            description="Connect your wallet securely"
            details={['Web3 Authentication', 'Multi-sig Support', 'Hardware Wallet Ready']}
            step={1}
          />

          

          <FlowCard
            icon={Shield}
            title="Shield Vault"
            description="Capital enters protection layer"
            details={['Smart Contract Escrow', 'Automated Allocation', 'Real-time Verification']}
            step={2}
          />

          

          <FlowCard
            icon={Lock}
            title="Smart Contract"
            description="Execution & compliance"
            details={['Immutable Logic', 'Regulatory Compliance', 'Audit Trail']}
            step={3}
          />

          

          <FlowCard
            icon={CheckCircle2}
            title="Settlement"
            description="Secure finalization"
            details={['Instant Confirmation', 'Cross-chain Bridge', 'Tax Optimization']}
            step={4}
          />
        </div>
        </div>
        <p className="text-slate-400 max-w-2xl mx-auto text-center">
          Non-Custdial MPC - Secured Architecture
        </p>
      

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <TechCard
          icon={Zap}
          title="Solana"
          subtitle="Fast Execution"
          description="Sub-second transaction finality with low latency for real-time capital movements"
          color="from-purple-500 to-pink-500"
        />
        <TechCard
          icon={Shield}
          title="Polygon"
          subtitle="Low Cost Settlement"
          description="Ethereum-compatible layer 2 solution providing cost-effective transaction processing"
          color="from-blue-500 to-purple-500"
        />
        <TechCard
          icon={DollarSign}
          title="Stablecoin Layer"
          subtitle="USDC / USDT"
          description="Price-stable digital assets ensuring predictable value transfer and settlement"
          color="from-emerald-500 to-cyan-500"
        />
      </div>

      <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Security Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SecurityFeature
            title="End-to-End Encryption"
            description="Military-grade encryption for all data in transit and at rest"
          />
          <SecurityFeature
            title="Multi-Signature Authorization"
            description="Require multiple approvals for high-value transactions"
          />
          <SecurityFeature
            title="Monitoring"
            description="KYT & Security Monitoring Enabled"
          />
          <SecurityFeature
            title="Time-Lock Mechanisms"
            description="Configurable delay periods for added security layer"
          />
          <SecurityFeature
            title="Automated Monitoring"
            description="24/7 surveillance with instant anomaly detection"
          />
        </div>
      </div>
    </div>
  );
}

interface FlowCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  details: string[];
  step: number;
}

function FlowCard({ icon: Icon, title, description, details, step }: FlowCardProps) {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500" />
      <div className="relative bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 h-full">
        <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
          {step}
        </div>

        <div className="p-3 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-xl w-fit mb-4">
          <Icon className="w-6 h-6 text-emerald-400" />
        </div>

        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-sm text-slate-400 mb-4">{description}</p>

        <div className="space-y-2">
          {details.map((detail, i) => (
            <div key={i} className="flex items-center space-x-2 text-xs text-slate-500">
              <div className="w-1 h-1 bg-emerald-400 rounded-full" />
              <span>{detail}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ArrowConnector() {
  return (
    <div className="hidden md:flex items-center justify-center">  
      <div className="relative">
        <ArrowRight className="w-8 h-8 text-emerald-400/50 animate-pulse" />
        <div className="absolute inset-0 bg-emerald-400/20 blur-xl rounded-full" />
      </div>
    </div>
  );
}

interface TechCardProps {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  color: string;
}

function TechCard({ icon: Icon, title, subtitle, description, color }: TechCardProps) {
  return (
    <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/50 transition-all duration-300 group">
      <div className={`p-3 bg-gradient-to-br ${color} bg-opacity-10 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
      <p className="text-sm text-emerald-400 mb-3">{subtitle}</p>
      <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
    </div>
  );
}

interface SecurityFeatureProps {
  title: string;
  description: string;
}

function SecurityFeature({ title, description }: SecurityFeatureProps) {
  return (
    <div className="flex items-start space-x-3">
      <div className="flex-shrink-0 p-2 bg-emerald-500/10 rounded-lg">
        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
      </div>
      <div>
        <h3 className="text-white font-semibold mb-1">{title}</h3>
        <p className="text-sm text-slate-400">{description}</p>
      </div>
    </div>
  );
}
