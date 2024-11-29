import { motion } from 'framer-motion';
import { Calendar, X, AlertCircle } from 'lucide-react';

interface DemoRequiredModalProps {
  onClose: () => void;
  onBookDemo: () => void;
}

export const DemoRequiredModal = ({ onClose, onBookDemo }: DemoRequiredModalProps) => {
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
          <h3 className="text-2xl font-bold text-gray-900">Schedule Your Demo First</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-purple-100">
            <AlertCircle className="h-8 w-8 text-purple-600" />
          </div>
          
          <p className="text-center text-gray-600 mb-6">
            To ensure your success with our TikTok Shop solution, we require a brief demo call before purchase. This allows us to:
          </p>
          
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Understand your goals and experience level
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Explain our same-day setup process
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Answer any questions you may have
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <motion.button
            onClick={onBookDemo}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-bold text-xl shadow-xl hover:shadow-2xl transition-all flex items-center justify-center space-x-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Calendar className="h-5 w-5" />
            <span>Schedule Demo Call</span>
          </motion.button>
          
          <button
            onClick={onClose}
            className="w-full px-6 py-3 text-gray-600 hover:text-gray-800 font-medium"
          >
            Maybe Later
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}