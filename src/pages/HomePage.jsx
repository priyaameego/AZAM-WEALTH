import React from 'react';
import HeroSlider from '../components/HeroSlider';
import AboutSection from '../components/AboutSection';
import FounderSection from '../components/FounderSection';
import BusinessGallerySection from '../components/BusinessGallerySection';
import ComplianceSection from '../components/ComplianceSection';
import ServicesSection from '../components/ServicesSection';
import WhyChooseUs from '../components/WhyChooseUs';
import InvestmentSolutionsSection from '../components/InvestmentSolutionsSection';
import FinancialEducationSection from '../components/FinancialEducationSection';
import FinancialCalculators from '../components/FinancialCalculators';
import PremiumCtaBanner from '../components/PremiumCtaBanner';
import ContactSection from '../components/ContactSection';

export default function HomePage({ onSelectService }) {
  return (
    <div className="space-y-0">
      {/* 1. Hero Slider with Ken Burns Effect */}
      <HeroSlider />

      {/* 2. About Azam Wealth */}
      <AboutSection />

      {/* 3. Founder & Leadership Spotlight (Farhan Azam + azam.jpeg) */}
      <FounderSection />

      {/* 4. Corporate Infrastructure & Business Profile Gallery */}
      <BusinessGallerySection />

      {/* 5. Full Financial Services Overview */}
      <ServicesSection onSelectServiceForConsultation={onSelectService} />

      {/* 6. Why Choose Azam Wealth */}
      <WhyChooseUs />

      {/* 7. Investment Solutions Section */}
      <InvestmentSolutionsSection onSelectSolution={onSelectService} />

      {/* 8. Interactive Calculators */}
      <FinancialCalculators onOpenConsultation={onSelectService} />

      {/* 9. Government Registrations & Quality Credentials */}
      <ComplianceSection />

      {/* 10. Financial Education */}
      <FinancialEducationSection />

      {/* 11. Call to Action Banner */}
      <PremiumCtaBanner />

      {/* 12. Contact Us Section */}
      <ContactSection />
    </div>
  );
}
