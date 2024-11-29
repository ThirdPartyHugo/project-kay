import { motion } from 'framer-motion';
import { Building2, Menu, X } from 'lucide-react';
import { useState } from 'react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Benefits', href: '#benefits' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Warranty', href: '#warranty' }
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="fixed w-full top-0 z-50 backdrop-blur-lg bg-white/90 shadow-lg"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.a 
            href="/"
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <Building2 className="h-8 w-8 text-purple-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
              The Affiliates HQ
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-purple-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.nav
          initial={false}
          animate={isMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          className={`md:hidden overflow-hidden ${isMenuOpen ? 'mt-4' : ''}`}
        >
          <div className="py-2 space-y-1">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="block py-2 px-4 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
                whileTap={{ scale: 0.98 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>
        </motion.nav>
      </div>
    </motion.header>
  );
};