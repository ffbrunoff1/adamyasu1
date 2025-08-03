import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, BookOpen, Heart } from 'lucide-react';

export default function Hero() {
  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-gradient-dark relative overflow-hidden pt-24 pb-12"
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <motion.div
        className="absolute top-20 left-20 text-accent-beige/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        <Star size={60} />
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-20 text-accent-beige/20"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      >
        <BookOpen size={80} />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-2">
              <div className="flex items-center space-x-2 text-accent-beige">
                <Heart size={20} />
                <span className="text-sm font-medium uppercase tracking-wide">
                  Transform Your Reality
                </span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-serif font-bold text-white leading-tight">
                Align Yourself with Your
                <span className="block gradient-text">Desires</span>
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-200 leading-relaxed max-w-lg"
            >
              Discover your path to self-realization and spiritual growth with
              practical guidance that transforms your reality. Live the life you
              truly want.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('services')}
                className="inline-flex items-center px-8 py-4 bg-accent-gold text-primary font-semibold rounded-full hover:bg-accent-beige transition-all duration-300 custom-shadow"
              >
                Discover the Book
                <ArrowRight className="ml-2" size={20} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('about')}
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-primary transition-all duration-300"
              >
                Learn More
              </motion.button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center space-x-6 pt-4"
            >
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="text-accent-gold fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-200 text-sm">
                Transforming lives through practical wisdom
              </p>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="relative">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 custom-shadow">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754180244758_dit0wa7fsk_ADAM_YASU_1.png"
                alt="Be it to Get it Book"
                className="w-full h-auto rounded-2xl shadow-2xl transition-transform duration-300"
              />
              <div className="absolute -top-4 -right-4 bg-accent-gold text-primary px-4 py-2 rounded-full font-bold text-sm">
                New Release
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
