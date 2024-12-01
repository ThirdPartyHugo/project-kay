import { motion } from 'framer-motion';
import Countdown from 'react-countdown';
import { CheckCircle2, Sparkles, Users, Clock, Calendar } from 'lucide-react';

const deadline = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

interface HeroProps {
  onBookDemo: () => void;
}

export const Hero = ({ onBookDemo }: HeroProps) => {
  return (
    <div className="relative min-h-[90vh] pt-28 pb-20 overflow-hidden bg-gradient-to-b from-purple-50 to-white">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] rounded-full bg-gradient-to-b from-purple-100 to-pink-100 opacity-50 blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[1000px] h-[1000px] rounded-full bg-gradient-to-t from-purple-100 to-pink-100 opacity-50 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-6">
        {/* Limited time offer banner */}
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-8 rounded-2xl mb-16 max-w-3xl mx-auto text-center shadow-xl"
        >
          <div className="flex items-center justify-center space-x-3 text-sm md:text-base">
            <Sparkles className="h-5 w-5" />
            <span className="font-bold">LIMITED TIME OFFER:</span>
            <span>Ready-to-Use US TikTok Shop Affiliate Account - Save 50% - Ends In:</span>
          </div>
          <Countdown
            date={deadline}
            renderer={({ days, hours, minutes, seconds }) => (
              <div className="flex justify-center space-x-6 mt-3 font-mono text-lg">
                <span>{days}d</span>
                <span>{hours}h</span>
                <span>{minutes}m</span>
                <span>{seconds}s</span>
              </div>
            )}
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Skip the{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
              5,000 Followers
            </span>
            {' '}Requirement
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12">
            Get instant access to a pre-approved US TikTok Shop affiliate account and start earning today!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              className="flex items-center justify-center space-x-3 text-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <CheckCircle2 className="h-6 w-6 text-green-500" />
              <span>Same-Day Live Setup</span>
            </motion.div>
            <motion.div
              className="flex items-center justify-center space-x-3 text-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <CheckCircle2 className="h-6 w-6 text-green-500" />
              <span>Pre-Approved Account</span>
            </motion.div>
            <motion.div
              className="flex items-center justify-center space-x-3 text-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <CheckCircle2 className="h-6 w-6 text-green-500" />
              <span>Start Earning Today</span>
            </motion.div>
          </div>
          
          <motion.button
            onClick={onBookDemo}
            className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl shadow-xl hover:shadow-2xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Calendar className="h-6 w-6 mr-3" />
            Book Your Free Demo
            <motion.span
              className="ml-2"
              initial={{ x: 0 }}
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          style={{marginBottom:"100px"}}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
            <Users className="h-10 w-10 text-purple-600 mb-6" />
            <h3 className="text-3xl font-bold mb-2">12,000+</h3>
            <p className="text-gray-600 text-lg">Satisfied Clients</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
            <Clock className="h-10 w-10 text-purple-600 mb-6" />
            <h3 className="text-3xl font-bold mb-2">Same Day</h3>
            <p className="text-gray-600 text-lg">Account Setup</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
            <Users className="h-10 w-10 text-purple-600 mb-6" />
            <h3 className="text-3xl font-bold mb-2">5,000+</h3>
            <p className="text-gray-600 text-lg">Real US Followers</p>
          </div>
        </motion.div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L48 8.875C96 17.75 192 35.5 288 44.375C384 53.25 480 53.25 576 44.375C672 35.5 768 17.75 864 26.625C960 35.5 1056 71 1152 79.875C1248 88.75 1344 71 1392 62.125L1440 53.25V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V0Z" fill="white" />
        </svg>
      </div>
    </div>
  );
};