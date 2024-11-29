import { useState } from 'react';
import { motion } from 'framer-motion';
import { loadStripe } from '@stripe/stripe-js';
import { Lock, CreditCard } from 'lucide-react';
import { STRIPE_CONFIG } from '../config/stripe';

const stripePromise = loadStripe(STRIPE_CONFIG.publicKey);

interface CheckoutFormProps {
  packageType: 'starter' | 'premium';
  price: number;
  onClose: () => void;
}

export const CheckoutForm = ({ packageType, price, onClose }: CheckoutFormProps) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: 'US'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const stripe = await stripePromise;
      if (!stripe) throw new Error('Stripe failed to load');

      // Here you would typically make an API call to your backend to create a Stripe session
      setLoading(false);
    } catch (error) {
      console.error('Checkout error:', error);
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/50 backdrop-blur-sm"
    >
      <motion.div 
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8"
        initial={{ y: 50 }}
        animate={{ y: 0 }}
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold">Complete Your Order</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ✕
          </button>
        </div>

        <div className="mb-6 p-4 bg-purple-50 rounded-xl">
          <p className="text-lg font-semibold text-purple-900">
            {packageType === 'premium' ? 'Premium' : 'Starter'} Package
          </p>
          <p className="text-3xl font-bold text-purple-700">${price}</p>
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

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-bold text-xl shadow-xl hover:shadow-2xl transition-all flex items-center justify-center space-x-2"
          >
            {loading ? (
              <span>Processing...</span>
            ) : (
              <>
                <CreditCard className="h-5 w-5" />
                <span>Secure Checkout</span>
                <Lock className="h-4 w-4" />
              </>
            )}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p className="flex items-center justify-center space-x-2">
            <Lock className="h-4 w-4" />
            <span>Secure payment powered by Stripe</span>
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};