import { motion } from 'framer-motion';
import { Calendar, Clock, X } from 'lucide-react';
import { useState, useEffect } from 'react';

interface BookDemoModalProps {
  onClose: () => void;
  selectedPackage: {
    type: 'starter' | 'premium';
    price: number;
  } | null;
}

export const BookDemoModal = ({ onClose, selectedPackage }: BookDemoModalProps) => {
  const [widgetHeight, setWidgetHeight] = useState(500);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredTime: ''
  });

  useEffect(() => {
    // Dynamically load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Dynamically load Calendly styles
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Function to update widget height based on window size
    const updateHeight = () => {
      const width = window.innerWidth;
      if (width <= 480) {
        setWidgetHeight(300); // Mobile devices
      } else if (width <= 768) {
        setWidgetHeight(400); // Tablets
      } else {
        setWidgetHeight(500); // Desktops
      }
    };

    // Add event listener for window resize
    window.addEventListener('resize', updateHeight);
    updateHeight(); // Set initial height

    // Clean up on unmount
    return () => {
      document.body.removeChild(script);
      document.head.removeChild(link);
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/50 backdrop-blur-sm"
    >
      <motion.div 
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold">Book Your Free Demo Call</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="mb-6 p-4 bg-purple-50 rounded-xl">
          <div className="flex items-center space-x-3 mb-2">
            <Calendar className="h-5 w-5 text-purple-600" />
            <p className="text-purple-900 font-semibold">30-Minute Demo Call</p>
          </div>
          <p className="text-gray-600">
            Learn how our TikTok Shop solution can help you start earning immediately.
          </p>
        </div>

        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/theaffiliateshq/30min"
          style={{ minWidth: '320px', height: `${widgetHeight}px` }}
        ></div>

        <p className="mt-4 text-center text-sm text-gray-500">
          By booking a demo, you agree to our Terms of Service and Privacy Policy
        </p>
      </motion.div>
    </motion.div>
  );
};
