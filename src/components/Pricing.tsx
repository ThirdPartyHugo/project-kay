import { motion } from 'framer-motion';
import { CheckCircle, Sparkles, Zap } from 'lucide-react';
import { AnimatedGradientBorder } from './AnimatedGradientBorder';
import { FadeInWhenVisible } from './FadeInWhenVisible';

interface PricingProps {
  onCheckout: (packageType: 'starter', price: number) => void;
  onBookDemo: () => void;
}

const features = [
  'Pre-Approved US TikTok Shop Account',
  'Same-Day Live Setup Call',
  '5,000+ Real US Followers',
  'Full Account Access & Ownership',
  'Marketing Materials & Templates',
  'Live 1-on-1 Onboarding',
  'Expert Coaching Session',
  'Priority Support',
  '30-Day Money Back Guarantee'
];

export const Pricing = ({ onCheckout, onBookDemo }: PricingProps) => {
  return (
    <section id="pricing" className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <FadeInWhenVisible>
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              Start Earning with TikTok Shop Today
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Skip months of waiting and start promoting products immediately with our pre-approved account solution.
            </p>
          </div>
        </FadeInWhenVisible>

        <div className="max-w-4xl mx-auto">
          <FadeInWhenVisible delay={0.2}>
            <AnimatedGradientBorder className="p-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative h-full"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <motion.div
                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full font-bold flex items-center space-x-2"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Sparkles className="h-5 w-5" />
                    <span>ONLY 10 ACCOUNTS LEFT</span>
                  </motion.div>
                </div>

                <div className="flex flex-col h-full">
                  <div className="mb-8">
                    <h3 className="text-3xl font-bold mb-2">US TikTok Shop Affiliate Account</h3>
                    <p className="text-gray-600 text-xl">Start earning immediately</p>
                  </div>
                  
                  <div className="mb-8">
                    <motion.span 
                      className="text-gray-500 line-through text-xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      $699
                    </motion.span>
                    <motion.div 
                      className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text"
                      initial={{ scale: 0.5 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 100 }}
                    >
                      $349
                    </motion.div>
                    <span className="text-sm text-gray-500">Limited time offer</span>
                  </div>
                  
                  <div className="space-y-4 mb-8 flex-grow">
                    {features.map((feature, index) => (
                      <motion.div 
                        key={feature}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                        <span className="text-lg">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="space-y-4">
                    <motion.button 
                      onClick={() => onBookDemo()}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-bold text-xl shadow-xl hover:shadow-2xl transition-all flex items-center justify-center space-x-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Zap className="h-5 w-5" />
                      <span>Book Your Demo Call</span>
                    </motion.button>

                    <p className="text-center text-sm text-gray-500">
                      Only 10 accounts remaining at this price
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatedGradientBorder>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
};