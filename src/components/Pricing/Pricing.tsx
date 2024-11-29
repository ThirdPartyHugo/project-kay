import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import { FadeInWhenVisible } from '../FadeInWhenVisible';
import { PricingCard } from './PricingCard';
import { pricingPackage } from './pricingData';

interface PricingProps {
  onCheckout: (packageType: 'starter' | 'premium', price: number) => void;
}

export const Pricing = ({ onCheckout }: PricingProps) => {
  return (
    <section id="pricing" className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <FadeInWhenVisible>
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              Ready-to-Use TikTok Shop Affiliate Account
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't Have 5,000 Followers? No Problem! Skip the waiting and start earning immediately with our verified account.
            </p>
          </div>
        </FadeInWhenVisible>
        
        <div className="max-w-2xl mx-auto">
          <FadeInWhenVisible delay={0.2}>
            <div className="relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                <motion.div
                  className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-2 rounded-full font-bold flex items-center space-x-2"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span>ONLY 10 ACCOUNTS LEFT</span>
                </motion.div>
              </div>
              
              <PricingCard
                {...pricingPackage}
                icon={<Shield className="h-6 w-6 text-green-500" />}
                onCheckout={() => onCheckout('starter', pricingPackage.price)}
                delay={0.2}
              />
            </div>
          </FadeInWhenVisible>
        </div>

        <FadeInWhenVisible delay={0.6}>
          <div className="mt-16 text-center">
            <div className="inline-block bg-green-50 p-6 rounded-xl border border-green-100">
              <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center justify-center">
                <Shield className="h-5 w-5 mr-2" />
                Same-Day Account Setup Guarantee
              </h3>
              <p className="text-green-700">
                Get your account instantly and join our expert onboarding call immediately after purchase. Start earning today!
              </p>
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};