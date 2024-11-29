import { motion } from 'framer-motion';
import { Video, Shield, Zap, Headphones, Target, BookOpen } from 'lucide-react';
import { FadeInWhenVisible } from './FadeInWhenVisible';
import { AnimatedGradientBorder } from './AnimatedGradientBorder';

const features = [
  {
    icon: Shield,
    title: 'Pre-Approved Account',
    description: 'Skip the 5,000 followers requirement with our verified accounts. Start selling immediately.'
  },
  {
    icon: Video,
    title: 'Same-Day Live Setup',
    description: 'Join our expert onboarding call immediately after purchase. Available 7 days a week.'
  },
  {
    icon: Target,
    title: 'Premium Products',
    description: 'Access carefully selected products with proven market demand and high commission rates.'
  },
  {
    icon: Headphones,
    title: '1-on-1 Expert Support',
    description: 'Get personalized guidance through live onboarding calls to maximize your success.'
  },
  {
    icon: BookOpen,
    title: 'Proven Strategies',
    description: 'Step-by-step video tutorials and content templates to help you succeed faster.'
  },
  {
    icon: Zap,
    title: 'Instant Access',
    description: 'Your account comes fully configured with all necessary verifications and approvals.'
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <FadeInWhenVisible>
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              Why Over{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                12,000+ Users
              </span>{' '}
              Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get instant access to your pre-approved US TikTok Shop affiliate account and start earning today with our same-day setup system.
            </p>
          </div>
        </FadeInWhenVisible>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FadeInWhenVisible key={feature.title} delay={index * 0.1}>
              <AnimatedGradientBorder className="p-8">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative"
                >
                  <feature.icon className="h-12 w-12 text-purple-600 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-600 text-lg">{feature.description}</p>
                </motion.div>
              </AnimatedGradientBorder>
            </FadeInWhenVisible>
          ))}
        </div>

        <FadeInWhenVisible delay={0.6}>
          <div className="mt-20 text-center">
            <motion.div
              className="inline-block bg-gradient-to-r from-purple-100 to-pink-100 p-8 rounded-2xl"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                🔥 Limited Time Bonus
              </h3>
              <ul className="text-lg text-gray-700 space-y-2">
                <li>✓ Complete TikTok Marketing Course ($380 Value)</li>
                <li>✓ 30+ Proven Viral Niche Ideas</li>
                <li>✓ Immediate Live Setup Call</li>
              </ul>
            </motion.div>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};