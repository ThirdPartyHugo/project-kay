import { motion } from 'framer-motion';
import { FadeInWhenVisible } from './FadeInWhenVisible';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "California",
    text: "Within my first month, I was already making $2,000+ through TikTok Shop. The coaching made all the difference!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
  },
  {
    name: "David Miller",
    location: "Texas",
    text: "The onboarding process was smooth and the support team is always there when I need them. Best investment I've made!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
  },
  {
    name: "Emily Rodriguez",
    location: "Florida",
    text: "From complete beginner to profitable TikTok Shop seller in just weeks. Their system really works!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150"
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <FadeInWhenVisible>
          <h2 className="text-5xl font-bold text-center mb-20">Success Stories from US Sellers</h2>
        </FadeInWhenVisible>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <FadeInWhenVisible key={index} delay={index * 0.2}>
              <motion.div 
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow"
                whileHover={{ y: -10 }}
              >
                <div className="relative mb-8">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full mx-auto ring-4 ring-purple-100 object-cover"
                  />
                  <motion.div 
                    className="absolute -bottom-4 left-1/2 transform translate-x-1/2 flex"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.2 }}
                  >
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </motion.div>
                </div>
                <p className="text-gray-600 text-lg mb-6 italic">"{testimonial.text}"</p>
                <div className="text-center">
                  <h4 className="font-bold text-xl mb-1">{testimonial.name}</h4>
                  <p className="text-purple-600">{testimonial.location}</p>
                </div>
              </motion.div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
};