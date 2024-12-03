import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TikTokShopExplainer } from './components/TikTokShopExplainer';
import { KeyBenefits } from './components/KeyBenefits';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Warranty } from './components/Warranty';
import { StickyCallToAction } from './components/StickyCallToAction';
import { BookDemoModal } from './components/BookDemoModal';
import { DemoRequiredModal } from './components/DemoRequiredModal';
import ReactDOM from "react-dom";

function App() {
  React.useEffect(() => {
    // Example: Applying cache rules dynamically for all images
    const images = document.querySelectorAll("img");
    images.forEach((img) => {
      img.setAttribute("loading", "lazy"); // Lazy-load images for better performance
      // Add custom headers (simulated using attributes)
      img.setAttribute("cache-control", "public, max-age=31536000, immutable");
    });
  }, []);


  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isDemoRequiredModalOpen, setIsDemoRequiredModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<{
    type: 'starter' | 'premium';
    price: number;
  } | null>(null);

  const handleCheckoutAttempt = (type: 'starter' | 'premium', price: number) => {
    setSelectedPackage({ type, price });
    setIsDemoRequiredModalOpen(true);
  };
  

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero onBookDemo={() => setIsDemoModalOpen(true)} />
      <TikTokShopExplainer />
      <KeyBenefits onBookDemo={() => setIsDemoModalOpen(true)} />
      
      <Testimonials />
      <FAQ />
      <Warranty />
      <StickyCallToAction 
        onCheckout={() => handleCheckoutAttempt('starter', 349)}
        onBookDemo={() => setIsDemoModalOpen(true)}
      />
      
      {isDemoModalOpen && (
        <BookDemoModal 
          onClose={() => setIsDemoModalOpen(false)}
          selectedPackage={selectedPackage}
        />
      )}
      
      {isDemoRequiredModalOpen && (
        <DemoRequiredModal
          onClose={() => setIsDemoRequiredModalOpen(false)}
          onBookDemo={() => {
            setIsDemoRequiredModalOpen(false);
            setIsDemoModalOpen(true);
          }}
        />
      )}
    </div>
  );
}

export default App;