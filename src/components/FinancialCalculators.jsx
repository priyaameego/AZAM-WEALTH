import React, { useState } from 'react';
import { Calculator, ArrowRight } from 'lucide-react';

export default function FinancialCalculators({ onOpenConsultation }) {
  const [activeTab, setActiveTab] = useState('sip'); // 'sip' | 'swp'

  // SIP State
  const [sipMonthly, setSipMonthly] = useState(10000);
  const [sipRate, setSipRate] = useState(12);
  const [sipYears, setSipYears] = useState(10);

  // SWP State
  const [swpPrincipal, setSwpPrincipal] = useState(2500000);
  const [swpMonthlyWithdrawal, setSwpMonthlyWithdrawal] = useState(20000);
  const [swpRate, setSwpRate] = useState(8);
  const [swpYears, setSwpYears] = useState(10);

  // SIP Calculation
  const calculateSIP = () => {
    const P = Number(sipMonthly);
    const i = Number(sipRate) / 100 / 12;
    const n = Number(sipYears) * 12;

    const totalInvested = P * n;
    const futureValue = P * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
    const estimatedReturns = Math.max(0, futureValue - totalInvested);

    return {
      invested: Math.round(totalInvested),
      returns: Math.round(estimatedReturns),
      totalValue: Math.round(futureValue),
    };
  };

  // SWP Calculation
  const calculateSWP = () => {
    let balance = Number(swpPrincipal);
    const withdrawal = Number(swpMonthlyWithdrawal);
    const monthlyRate = Number(swpRate) / 100 / 12;
    const months = Number(swpYears) * 12;
    let totalWithdrawn = 0;

    for (let m = 0; m < months; m++) {
      if (balance <= 0) break;
      const interest = balance * monthlyRate;
      balance = balance + interest - withdrawal;
      totalWithdrawn += withdrawal;
    }

    return {
      initialInvestment: Number(swpPrincipal),
      totalWithdrawn: Math.round(totalWithdrawn),
      finalBalance: Math.round(Math.max(0, balance)),
    };
  };

  const sipResults = calculateSIP();
  const swpResults = calculateSWP();

  const formatINR = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="calculators" className="relative py-24 sm:py-32 bg-white text-[#202733] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#c6a45c]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#f8f7f3] border border-[#c6a45c]/30 shadow-sm">
            <Calculator className="w-3.5 h-3.5 text-[#c6a45c]" />
            <span className="text-xs uppercase tracking-widest font-bold text-[#142b49]">
              Interactive Wealth Modeling
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-[#142b49] tracking-tight">
            Planning & <span className="gold-gradient-text">Calculators</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Estimate the illustrative potential of disciplined monthly investments (SIP) or plan regular monthly cash flows (SWP).
          </p>

          {/* Tab Selector */}
          <div className="inline-flex p-1.5 rounded-xl bg-[#f8f7f3] border border-[#c6a45c]/30 mt-4 shadow-sm">
            <button
              onClick={() => setActiveTab('sip')}
              className={`px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'sip'
                  ? 'bg-gradient-to-r from-[#c6a45c] to-[#9e7d36] text-white shadow-md'
                  : 'text-slate-600 hover:text-[#142b49]'
              }`}
            >
              SIP Growth Calculator
            </button>
            <button
              onClick={() => setActiveTab('swp')}
              className={`px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'swp'
                  ? 'bg-gradient-to-r from-[#c6a45c] to-[#9e7d36] text-white shadow-md'
                  : 'text-slate-600 hover:text-[#142b49]'
              }`}
            >
              SWP Cashflow Calculator
            </button>
          </div>
        </div>

        {/* SIP Calculator Tab */}
        {activeTab === 'sip' && (
          <div className="max-w-4xl mx-auto rounded-2xl bg-white border-2 border-[#c6a45c]/30 p-6 sm:p-10 shadow-xl animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Sliders Input Column */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Monthly Investment */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs uppercase tracking-wider font-bold text-[#142b49]">
                      Monthly SIP Amount
                    </span>
                    <span className="text-sm font-bold text-[#c6a45c] font-mono">
                      {formatINR(sipMonthly)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="100000"
                    step="1000"
                    value={sipMonthly}
                    onChange={(e) => setSipMonthly(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#c6a45c]"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>₹1,000</span>
                    <span>₹50,000</span>
                    <span>₹1,00,000</span>
                  </div>
                </div>

                {/* Expected Rate of Return */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs uppercase tracking-wider font-bold text-[#142b49]">
                      Expected Return (Annualized)
                    </span>
                    <span className="text-sm font-bold text-[#c6a45c] font-mono">
                      {sipRate}% p.a.
                    </span>
                  </div>
                  <input
                    type="range"
                    min="6"
                    max="18"
                    step="0.5"
                    value={sipRate}
                    onChange={(e) => setSipRate(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#c6a45c]"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>6% (Conservative)</span>
                    <span>12% (Balanced)</span>
                    <span>18% (Aggressive)</span>
                  </div>
                </div>

                {/* Investment Horizon */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs uppercase tracking-wider font-bold text-[#142b49]">
                      Time Horizon
                    </span>
                    <span className="text-sm font-bold text-[#c6a45c] font-mono">
                      {sipYears} {sipYears === 1 ? 'Year' : 'Years'}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    step="1"
                    value={sipYears}
                    onChange={(e) => setSipYears(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#c6a45c]"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>1 Year</span>
                    <span>15 Years</span>
                    <span>30 Years</span>
                  </div>
                </div>

              </div>

              {/* Output Display Card */}
              <div className="lg:col-span-5 p-6 rounded-xl bg-[#f8f7f3] border border-[#c6a45c]/40 flex flex-col justify-between space-y-6 shadow-sm">
                <div>
                  <span className="text-[11px] uppercase tracking-widest text-[#c6a45c] font-bold block mb-1">
                    Projected Corpus
                  </span>
                  <p className="text-3xl sm:text-4xl font-serif font-black text-[#142b49]">
                    {formatINR(sipResults.totalValue)}
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-200 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>Total Invested:</span>
                    <strong className="text-[#142b49] font-mono">{formatINR(sipResults.invested)}</strong>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Estimated Growth:</span>
                    <strong className="text-emerald-700 font-mono">{formatINR(sipResults.returns)}</strong>
                  </div>
                </div>

                <button
                  onClick={() => onOpenConsultation(`SIP Planning: ₹${sipMonthly}/mo for ${sipYears} yrs`)}
                  className="w-full py-3 rounded-xl text-xs uppercase tracking-wider font-bold text-white bg-gradient-to-r from-[#c6a45c] to-[#9e7d36] hover:shadow-lg hover:shadow-[#c6a45c]/30 transition-all cursor-pointer flex items-center justify-center space-x-2"
                >
                  <span>Build This SIP Portfolio</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>
        )}

        {/* SWP Calculator Tab */}
        {activeTab === 'swp' && (
          <div className="max-w-4xl mx-auto rounded-2xl bg-white border-2 border-[#c6a45c]/30 p-6 sm:p-10 shadow-xl animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Sliders Input Column */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Total Investment Amount */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs uppercase tracking-wider font-bold text-[#142b49]">
                      Total Initial Corpus
                    </span>
                    <span className="text-sm font-bold text-[#c6a45c] font-mono">
                      {formatINR(swpPrincipal)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="500000"
                    max="20000000"
                    step="100000"
                    value={swpPrincipal}
                    onChange={(e) => setSwpPrincipal(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#c6a45c]"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>₹5 Lakh</span>
                    <span>₹1 Crore</span>
                    <span>₹2 Crore</span>
                  </div>
                </div>

                {/* Monthly Withdrawal */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs uppercase tracking-wider font-bold text-[#142b49]">
                      Desired Monthly Withdrawal
                    </span>
                    <span className="text-sm font-bold text-[#c6a45c] font-mono">
                      {formatINR(swpMonthlyWithdrawal)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="5000"
                    max="150000"
                    step="2500"
                    value={swpMonthlyWithdrawal}
                    onChange={(e) => setSwpMonthlyWithdrawal(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#c6a45c]"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>₹5,000</span>
                    <span>₹75,000</span>
                    <span>₹1,50,000</span>
                  </div>
                </div>

                {/* Expected Return Rate */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs uppercase tracking-wider font-bold text-[#142b49]">
                      Expected Annual Yield on Balance
                    </span>
                    <span className="text-sm font-bold text-[#c6a45c] font-mono">
                      {swpRate}% p.a.
                    </span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="14"
                    step="0.5"
                    value={swpRate}
                    onChange={(e) => setSwpRate(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#c6a45c]"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>5% (Conservative)</span>
                    <span>8% (Moderate)</span>
                    <span>14% (Aggressive)</span>
                  </div>
                </div>

                {/* Duration */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs uppercase tracking-wider font-bold text-[#142b49]">
                      Withdrawal Horizon
                    </span>
                    <span className="text-sm font-bold text-[#c6a45c] font-mono">
                      {swpYears} {swpYears === 1 ? 'Year' : 'Years'}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="25"
                    step="1"
                    value={swpYears}
                    onChange={(e) => setSwpYears(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#c6a45c]"
                  />
                </div>

              </div>

              {/* Output Display Card */}
              <div className="lg:col-span-5 p-6 rounded-xl bg-[#f8f7f3] border border-[#c6a45c]/40 flex flex-col justify-between space-y-6 shadow-sm">
                <div>
                  <span className="text-[11px] uppercase tracking-widest text-[#c6a45c] font-bold block mb-1">
                    Total Income Withdrawn
                  </span>
                  <p className="text-3xl sm:text-4xl font-serif font-black text-[#142b49]">
                    {formatINR(swpResults.totalWithdrawn)}
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-200 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>Initial Investment:</span>
                    <strong className="text-[#142b49] font-mono">{formatINR(swpResults.initialInvestment)}</strong>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Estimated Remaining Corpus:</span>
                    <strong className="text-[#c6a45c] font-mono">{formatINR(swpResults.finalBalance)}</strong>
                  </div>
                </div>

                <button
                  onClick={() => onOpenConsultation(`SWP Plan: ₹${swpMonthlyWithdrawal}/mo withdrawal from ₹${swpPrincipal}`)}
                  className="w-full py-3 rounded-xl text-xs uppercase tracking-wider font-bold text-white bg-gradient-to-r from-[#c6a45c] to-[#9e7d36] hover:shadow-lg hover:shadow-[#c6a45c]/30 transition-all cursor-pointer flex items-center justify-center space-x-2"
                >
                  <span>Structure Your SWP Plan</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>
        )}

        {/* Calculator Disclaimer */}
        <p className="mt-8 text-center text-xs text-slate-500 italic max-w-2xl mx-auto">
          * Calculator results are for illustrative purposes based on assumed rates of compounding. Mutual fund investments are subject to market risks. Actual returns will vary depending on prevailing market conditions and fund performance.
        </p>

      </div>
    </section>
  );
}
