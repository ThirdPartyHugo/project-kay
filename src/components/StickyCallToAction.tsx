import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';

interface StickyCallToActionProps {
  onCheckout: () => void;
  onBookDemo: () => void;
}

export const StickyCallToAction = ({ onCheckout, onBookDemo }: StickyCallToActionProps) => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2], [100, 0]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-gray-200 shadow-lg"
    >
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <div className="hidden md:block">
          <p className="font-bold text-xl">The Affiliates HQ Special Offer: Only $349</p>
          <p className="text-gray-600">Limited time offer - Act fast!</p>
        </div>
        <div className="flex items-center space-x-4">
          <motion.button
            onClick={onBookDemo}
            className="flex items-center space-x-2 px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-xl font-bold hover:bg-purple-50 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Calendar className="h-5 w-5" />
            <span>Book Demo</span>
          </motion.button>
          
          <motion.button
            onClick={onCheckout}
            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Get Started Now</span>
            <ArrowRight className="h-5 w-5" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};