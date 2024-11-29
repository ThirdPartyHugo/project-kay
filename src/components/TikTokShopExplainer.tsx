import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Users, Target, Rocket } from 'lucide-react';
import { FadeInWhenVisible } from './FadeInWhenVisible';

export const TikTokShopExplainer = () => {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <FadeInWhenVisible>
          <div className="text-center mb-20">
            <motion.div 
              className="inline-flex items-center justify-center p-6 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <TrendingUp className="h-12 w-12 text-purple-600" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Join the TikTok Shop{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                Affiliate Revolution
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              TikTok Shop is revolutionizing e-commerce with its seamless in-app shopping experience. 
              As an affiliate, you can tap into this massive opportunity without holding inventory.
            </p>
          </div>
        </FadeInWhenVisible>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <FadeInWhenVisible delay={0.2}>
            <div className="space-y-8">
              <h3 className="text-3xl font-bold mb-6">Why TikTok Shop Affiliate?</h3>
              
              <div className="space-y-6">
                {[
                  {
                    icon: DollarSign,
                    title: "High Commission Rates",
                    description: "Earn up to 20% commission on every sale you generate through your affiliate links."
                  },
                  {
                    icon: Users,
                    title: "Massive Audience",
                    description: "Access TikTok's 1 billion+ monthly active users who are ready to buy products they discover."
                  },
                  {
                    icon: Target,
                    title: "Built-in Conversion Tools",
                    description: "Take advantage of TikTok's native shopping features designed to maximize sales."
                  },
                  {
                    icon: Rocket,
                    title: "Rapid Growth Potential",
                    description: "Leverage TikTok's viral nature to scale your earnings quickly and efficiently."
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start space-x-4"
                    whileHover={{ x: 10 }}
                  >
                    <div className="p-3 bg-purple-100 rounded-xl">
                      <item.icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.4}>
            <div className="space-y-8">
              <h3 className="text-3xl font-bold mb-6">Perfect For:</h3>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100">
                <ul className="space-y-4">
                  {[
                    "Aspiring entrepreneurs looking for a low-risk business model",
                    "Content creators wanting to monetize their audience",
                    "Social media marketers seeking new revenue streams",
                    "Anyone interested in earning from TikTok's explosive growth",
                    "Beginners with no prior affiliate marketing experience"
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + (index * 0.1) }}
                    >
                      <div className="h-2 w-2 bg-purple-600 rounded-full" />
                      <span className="text-lg text-gray-700">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100">
                <h4 className="text-2xl font-bold mb-4 text-green-800">What You Can Expect:</h4>
                <ul className="space-y-4">
                  {[
                    "Start earning within your first week",
                    "No technical skills required - we handle the setup",
                    "Full training and support included",
                    "Access to proven product recommendations",
                    "Detailed analytics and performance tracking"
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + (index * 0.1) }}
                    >
                      <div className="h-2 w-2 bg-green-600 rounded-full" />
                      <span className="text-lg text-gray-700">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
};