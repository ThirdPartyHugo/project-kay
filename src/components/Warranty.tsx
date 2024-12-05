import { motion } from 'framer-motion';
import { Shield, Mail, AlertCircle, CheckCircle2 } from 'lucide-react';
import { FadeInWhenVisible } from './FadeInWhenVisible';

export const Warranty = () => {
  return (
    <section id="warranty" className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <FadeInWhenVisible>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <motion.div 
                className="inline-flex items-center justify-center p-6 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl mb-8 shadow-lg"
                whileHover={{ scale: 1.05 }}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Shield className="h-16 w-16 text-green-600" />
              </motion.div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 text-transparent bg-clip-text">
                  Issues? Get Free Account!
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  In case of any issues with your account, we will replace it for free.
                  All our customers are fully covered by our warranty.
                </p>
              </motion.div>
            </div>

            <div className="space-y-8">
              <motion.div 
                className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Shield className="h-8 w-8 text-green-600 mr-3" />
                  Warranty Coverage
                </h3>
                <p className="text-lg text-gray-600">
                This warranty policy applies to TikTok accounts provided by The Affiliates HQ. We grow our accounts organically which is why our accounts do not get flagged and banned,
                if your account ever faces disqualification or is removed from the creator Rewards program, you will be eligble for a replacement account completely free
                </p>
              </motion.div>

              <motion.div 
                className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-2xl font-bold mb-6">Eligibility Requirements</h3>
                <div className="space-y-6">
                  {[
                    {
                      title: "Email and Password Change",
                      description: "You must change the email and password associated with the account during the onboarding call"
                    },
                    {
                      title: "Compliance with TikTok's Terms",
                      description: "All content must comply with TikTok's terms and conditions"
                    },
                    {
                      title: "14-Day Warranty Period",
                      description: "Valid for 14 days from the date of account delivery"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-green-500 mt-1 flex-shrink-0 mr-4" />
                      <div>
                        <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Mail className="h-8 w-8 text-purple-600 mr-3" />
                  Contact Support
                </h3>
                <div className="space-y-4 text-lg">
                  <p className="text-gray-600">
                    Email: <a href="mailto:theaffiliateshq@gmail.com" className="text-purple-600 hover:underline font-medium">
                      theaffiliateshq@gmail.com
                    </a>
                  </p>
                  <p className="text-gray-600">
                    Website: <a href="https://www.theaffiliateshq.com" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline font-medium">
                      www.TheAffiliatesHQ.com
                    </a>
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="bg-red-50 p-8 rounded-2xl border-2 border-red-100"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-start space-x-4">
                  <AlertCircle className="h-8 w-8 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-red-700">Important Disclaimers</h3>
                    <div className="space-y-4 text-lg text-red-700">
                      <p>
                        We do not offer refunds under any circumstances. Our policy is in place to protect our business 
                        from fraud and ensure that we can continue to provide high-quality accounts to our customers.
                      </p>
                      <p>
                        By using our service and receiving a TikTok account, you agree to adhere to this warranty policy.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};

