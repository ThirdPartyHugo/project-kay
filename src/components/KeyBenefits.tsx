import { motion } from 'framer-motion';
import { Users, Clock, Shield, Headphones, Target } from 'lucide-react';
import { FadeInWhenVisible } from './FadeInWhenVisible';

interface HeroProps {
  onBookDemo: () => void;
}
const benefits = [
  {
    icon: Clock,
    title: "Same-Day Live Setup",
    description: "Get your account and join our expert onboarding call immediately after purchase. Available 7 days a week.",
    gradient: "from-green-400 to-emerald-500"
  },
  {
    icon: Users,
    title: "Skip 5,000 Followers",
    description: "Instant access to a pre-approved account with authentic US followers. Start selling immediately.",
    gradient: "from-blue-400 to-indigo-500"
  },
  {
    icon: Shield,
    title: "Pre-Approved Account",
    description: "Your account comes fully verified and ready for TikTok Shop. No verification hassles or waiting periods.",
    gradient: "from-purple-400 to-pink-500"
  },
  {
    icon: Target,
    title: "Premium Products",
    description: "Access carefully selected products with proven market demand and high commission rates.",
    gradient: "from-orange-400 to-red-500"
  },
  {
    icon: Headphones,
    title: "1-on-1 Expert Support",
    description: "Get personalized guidance through live onboarding calls to maximize your success.\n",
    gradient: "from-indigo-400 to-blue-500"
  }
];

export const KeyBenefits = ({ onBookDemo }: HeroProps) => {
  return (
    <section id="benefits" className="relative py-32 bg-purple-900">
      <div className="container mx-auto px-6 relative">
        <FadeInWhenVisible>
          <div className="text-center mb-20">
            <motion.h2 
              className="text-5xl md:text-6xl font-bold text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Why Choose Our TikTok Shop Solution?
            </motion.h2>
            <motion.p 
              className="text-2xl text-purple-200 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Skip the hassle of building followers and get instant access to a pre-approved US TikTok Shop account
            </motion.p>
          </div>
        </FadeInWhenVisible>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <FadeInWhenVisible key={index} delay={index * 0.2}>
              <motion.div
                className="relative p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.02, translateY: -5 }}
              >
                <div className={`absolute -top-4 -left-4 p-4 rounded-2xl bg-gradient-to-r ${benefit.gradient} shadow-lg`}>
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <div className="ml-12">
                  <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-purple-200 text-lg leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            </FadeInWhenVisible>
          ))}
        </div>

        <FadeInWhenVisible delay={0.8}>
          <motion.div 
            className="mt-20 text-center bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-2xl max-w-2xl mx-auto"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">🔥 Limited Time Bonus</h3>
            <ul className="space-y-4 text-purple-200 text-xl">
              <li>✓ Immediate Live Setup Call</li>
              <li>✓ 30+ Proven Viral Niche Ideas</li>
            </ul>
          </motion.div>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={1}>
          <motion.div
            style={{marginBottom:"60px"}}
            onClick={onBookDemo} 
            className="mt-16 text-center"
            whileHover={{ scale: 1.02 }}
          >
            <a 
              href="#pricing"
              className="inline-block px-12 py-6 text-xl font-bold text-white rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 shadow-xl hover:shadow-2xl transition-all"
            >
              Get Your Pre-Approved Account Now
            </a>
          </motion.div>
        </FadeInWhenVisible>
      </div>

      {/* Add a decorative bottom wave for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L48 8.875C96 17.75 192 35.5 288 44.375C384 53.25 480 53.25 576 44.375C672 35.5 768 17.75 864 26.625C960 35.5 1056 71 1152 79.875C1248 88.75 1344 71 1392 62.125L1440 53.25V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V0Z" fill="currentColor" className="text-gray-50" />
        </svg>
      </div>
    </section>
  );
};