import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import { FadeInWhenVisible } from './FadeInWhenVisible';

const faqs = [
  {
    question: "How quickly can I start earning with my TikTok Shop account?",
    answer: "You can start promoting products immediately after our same-day setup call. Many of our clients see their first sales within 24-48 hours of going live with their first promotional content."
  },
  {
    question: "Do I need any previous experience with TikTok or affiliate marketing?",
    answer: "No experience needed! Our comprehensive training and live coaching sessions will teach you everything from basic TikTok navigation to advanced affiliate marketing strategies."
  },
  {
    question: "What makes your TikTok Shop accounts different from others?",
    answer: "Our accounts are 100% organically grown with real US-based followers, fully verified, and come with immediate live setup support. We're the only provider offering same-day live onboarding calls."
  },
  {
    question: "How much can I realistically earn per month?",
    answer: "Earnings vary based on effort and strategy. Our top performers consistently earn $5,000+ monthly, with some reaching $10,000+. We provide all the training and support needed to help you maximize your earnings potential."
  }
];

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      
      className="border-b border-gray-200 py-6"
      initial={false}
      animate={{ backgroundColor: isOpen ? 'rgba(124, 58, 237, 0.05)' : 'transparent' }}
      transition={{ duration: 0.2 }}
    >
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl font-semibold pr-8">{question}</span>
        {isOpen ? (
          <Minus className="h-6 w-6 text-purple-600 flex-shrink-0" />
        ) : (
          <Plus className="h-6 w-6 text-purple-600 flex-shrink-0" />
        )}
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pt-4 text-gray-600 text-lg">{answer}</p>
      </motion.div>
    </motion.div>
  );
};

export const FAQ = () => {
  return (
    <section id="faq" className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <FadeInWhenVisible>
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about our TikTok Shop affiliate accounts and success program.
            </p>
          </div>
        </FadeInWhenVisible>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FadeInWhenVisible key={index} delay={index * 0.1}>
              <FAQItem question={faq.question} answer={faq.answer} />
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
};