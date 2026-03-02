import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import AITaxEngine from './pages/AITaxEngine';
import OnChainShield from './pages/OnChainShield';
import Architecture from './pages/Architecture';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/ai-tax-engine" element={<AITaxEngine />} />
          <Route path="/shield-flow" element={<OnChainShield />} />
          <Route path="/architecture" element={<Architecture />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
