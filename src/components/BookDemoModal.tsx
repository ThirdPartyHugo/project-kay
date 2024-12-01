import { motion } from 'framer-motion';
import { Calendar, Clock, X } from 'lucide-react';
import { useState } from 'react';

interface BookDemoModalProps {
  onClose: () => void;
  selectedPackage: {
    type: 'starter' | 'premium';
    price: number;
  } | null;
}

export const BookDemoModal = ({ onClose, selectedPackage }: BookDemoModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredTime: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically:
    // 1. Save the demo booking
    // 2. Send confirmation email
    // 3. Schedule the call
    // 4. If selectedPackage exists, redirect to checkout after booking
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
          <p className="text-gray-600">Learn how our TikTok Shop solution can help you start earning immediately.</p>
          {selectedPackage && (
            <div className="mt-3 pt-3 border-t border-purple-100">
              <p className="text-purple-900 font-semibold">Selected Package:</p>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Preferred Time
            </label>
            <select
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              value={formData.preferredTime}
              onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
            >
              <option value="">Select a time...</option>
              <option value="morning">Morning (9AM - 12PM EST)</option>
              <option value="afternoon">Afternoon (12PM - 5PM EST)</option>
              <option value="evening">Evening (5PM - 8PM EST)</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-bold text-xl shadow-xl hover:shadow-2xl transition-all flex items-center justify-center space-x-2"
          >
            <Clock className="h-5 w-5" />
            <span>Schedule Demo Call</span>
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-500">
          By booking a demo, you agree to our Terms of Service and Privacy Policy
        </p>
      </motion.div>
    </motion.div>
  );
}