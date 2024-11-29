import { motion } from 'framer-motion';
import { CheckCircle, Star } from 'lucide-react';
import { AnimatedGradientBorder } from '../AnimatedGradientBorder';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  name: string;
  price: number;
  originalPrice: number;
  features: PricingFeature[];
  isPopular?: boolean;
  onCheckout: () => void;
  icon?: React.ReactNode;
  delay?: number;
}

export const PricingCard = ({
  name,
  price,
  originalPrice,
  features,
  isPopular,
  onCheckout,
  icon,
  delay = 0
}: PricingCardProps) => {
  return (
    <AnimatedGradientBorder className="p-8">
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="relative h-full"
      >
        <div className="flex flex-col h-full">
          <div className="mb-8">
            <div className="flex items-center space-x-2 mb-2">
              <h3 className="text-3xl font-bold">{name}</h3>
              {icon}
            </div>
            <p className="text-gray-600 text-xl">
              {isPopular ? 'Complete success system' : 'Start earning immediately'}
            </p>
          </div>
          
          <div className="mb-8">
            <motion.span 
              className="text-gray-500 line-through text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: delay + 0.5 }}
            >
              ${originalPrice}
            </motion.span>
            <motion.div 
              className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              ${price}
            </motion.div>
            <span className="text-sm text-gray-500">One-time payment</span>
          </div>
          
          <div className="space-y-4 mb-8 flex-grow">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.text}
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: delay + (index * 0.1) }}
              >
                {feature.included ? (
                  <Star className="h-6 w-6 text-yellow-500 fill-current flex-shrink-0" />
                ) : (
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                )}
                <span className="text-lg">{feature.text}</span>
              </motion.div>
            ))}
          </div>
          
          <motion.button 
            onClick={onCheckout}
            className={`w-full text-white py-4 rounded-xl font-bold text-xl shadow-xl hover:shadow-2xl transition-all ${
              isPopular 
                ? 'bg-gradient-to-r from-yellow-500 to-orange-500'
                : 'bg-gradient-to-r from-purple-600 to-pink-600'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isPopular ? 'Get Premium Access' : 'Get Started Today'}
          </motion.button>
        </div>
      </motion.div>
    </AnimatedGradientBorder>
  );
};