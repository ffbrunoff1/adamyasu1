import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, BookOpen, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'About', id: 'about' },
    { name: 'Book', id: 'services' },
    { name: 'Contact', id: 'contact' },
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/adamyasu',
      color: 'hover:text-pink-500',
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:adam@adamyasu.com',
      color: 'hover:text-blue-500',
    },
  ];

  return (
    <footer className="bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>

      <motion.div
        className="absolute top-10 right-10 text-accent-beige/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        <BookOpen size={100} />
      </motion.div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid lg:grid-cols-4 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="flex items-center space-x-3">
                <img
                  src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1754180253351_0.png"
                  alt="Adam Yasu"
                  className="h-12 w-auto filter invert"
                />
              </div>

              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                Transform your reality with practical guidance. Align yourself
                with your desires and discover the path to self-realization and
                spiritual growth.
              </p>

              <div className="flex items-center space-x-2 text-accent-beige">
                <Heart className="w-5 h-5" />
                <span className="text-sm font-medium">
                  Transforming lives through practical wisdom
                </span>
              </div>

              <div className="flex space-x-4">
                {socialLinks.map(link => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target={link.url.startsWith('http') ? '_blank' : undefined}
                    rel={
                      link.url.startsWith('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 bg-white/10 rounded-full flex items-center justify-center transition-colors ${link.color}`}
                  >
                    <link.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-xl font-serif font-bold">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map(link => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-gray-300 hover:text-accent-beige transition-colors duration-300"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-xl font-serif font-bold">Get the Book</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Start your transformation journey with "Be it to Get it" -
                practical guidance for self-realization.
              </p>
              <motion.a
                href="mailto:adam@adamyasu.com?subject=Book Inquiry - Be it to Get it"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 bg-accent-gold text-primary font-semibold rounded-full hover:bg-accent-beige transition-all duration-300"
              >
                Order Now
                <BookOpen className="ml-2" size={18} />
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="border-t border-gray-700 mt-12 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Adam Yasu. All rights reserved.
                Transform your reality with practical guidance.
              </p>

              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-accent-gold text-primary rounded-full flex items-center justify-center hover:bg-accent-beige transition-colors duration-300"
                aria-label="Back to top"
              >
                <ArrowUp size={20} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
