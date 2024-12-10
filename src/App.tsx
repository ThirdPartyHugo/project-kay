import React, { useState, useEffect } from "react";
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
// Other imports remain the same

function App() {
  const [apiMessage, setApiMessage] = useState("");

  useEffect(() => {
    // Call the serverless function on mount
    fetch("/.netlify/functions/hello")
      .then((response) => response.json())
      .then((data) => {
        setApiMessage(data.message); // Update state with the API response
      })
      .catch((error) => {
        console.error("Error fetching the hello API:", error);
      });

    const images = document.querySelectorAll("img");
    images.forEach((img) => {
      img.setAttribute("loading", "lazy");
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
      <KeyBenefits
        onBookDemo={() => setIsDemoModalOpen(true)}
        onCheckout={handleCheckoutAttempt}
      />
      <Testimonials />
      <FAQ />
      <Warranty />
      <StickyCallToAction
        onCheckout={() => handleCheckoutAttempt('starter', 349)}
        onBookDemo={() => setIsDemoModalOpen(true)}
      />

      {/* Display the API message */}
      <div className="p-4 bg-gray-100 text-center">
        <h2 className="text-lg font-semibold">Serverless API Message</h2>
        <p>{apiMessage || "Loading..."}</p>
      </div>

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
