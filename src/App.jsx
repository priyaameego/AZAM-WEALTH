import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import InvestmentSolutionsPage from './pages/InvestmentSolutionsPage';
import FinancialEducationPage from './pages/FinancialEducationPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './components/NotFoundPage';

function AppContent() {
  const [selectedService, setSelectedService] = React.useState('');
  const navigate = useNavigate();

  const handleSelectService = (serviceTitle) => {
    setSelectedService(serviceTitle);
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-[#fbfbf9] text-[#202733] flex flex-col selection:bg-[#c6a45c]/25 selection:text-[#142b49]">
      {/* 3D Premium Fixed Navbar with Visible Logo */}
      <Header />

      {/* Distinct Pages Routing */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage onSelectService={handleSelectService} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage onSelectService={handleSelectService} />} />
          <Route path="/investment-solutions" element={<InvestmentSolutionsPage onSelectSolution={handleSelectService} />} />
          <Route path="/financial-education" element={<FinancialEducationPage />} />
          <Route path="/contact" element={<ContactPage prefilledService={selectedService} />} />
          <Route path="*" element={<NotFoundPage onGoHome={() => navigate('/')} />} />
        </Routes>
      </main>

      {/* Luxury Light Footer */}
      <Footer onSelectService={handleSelectService} />

      {/* Floating 3D WhatsApp & Scroll Controls */}
      <FloatingActions />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
