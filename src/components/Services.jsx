import React from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Star,
  Download,
  ArrowRight,
  CheckCircle,
  Heart,
} from 'lucide-react';

export default function Services() {
  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    'Practical step-by-step guidance',
    'Real-world transformation strategies',
    'Alignment techniques for desires',
    'Spiritual development practices',
    'Self-realization methodologies',
    'Intuitive decision-making tools',
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Emotional Alignment',
      description:
        'Learn to align your emotions with your deepest desires for authentic living.',
    },
    {
      icon: Star,
      title: 'Spiritual Growth',
      description:
        'Develop your spiritual awareness while staying grounded in practical reality.',
    },
    {
      icon: CheckCircle,
      title: 'Lasting Change',
      description:
        'Create sustainable transformation that evolves with your personal journey.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
            Be it to Get it
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            A Caminho da Transformação para Viver a Vida que Você Deseja
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl hover-lift">
              <img
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754180244758_dit0wa7fsk_ADAM_YASU_1.png"
                alt="Be it to Get it Book Cover"
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-accent-gold text-primary px-6 py-2 rounded-full font-bold">
                Featured
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-serif font-bold text-primary mb-4">
                Transform Your Reality
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Discover a new way to access what you need with Be it to Get it.
                Our innovative platform bridges the gap between your desires and
                solutions, offering seamless connections to products and
                services that enhance your lifestyle.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you're seeking the latest in technology or unique
                experiences, we provide curated options tailored to your
                preferences. Simplify your journey to obtain what matters most
                with ease and efficiency.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-accent-gold flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 custom-shadow"
            >
              Get Your Copy
              <Download className="ml-2" size={20} />
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl"
        >
          <h3 className="text-3xl font-serif font-bold text-primary text-center mb-12">
            What You'll Experience
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center space-y-4"
              >
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-primary">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="inline-flex items-center space-x-2 bg-accent-beige px-6 py-3 rounded-full">
              <BookOpen className="w-5 h-5 text-primary" />
              <span className="font-semibold text-primary">
                Available in Digital & Physical Formats
              </span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-dark text-white rounded-3xl p-8 lg:p-12">
            <h3 className="text-3xl font-serif font-bold mb-6">
              Start Your Transformation Today
            </h3>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Junte-se a milhares que já começaram sua jornada a caminho da
              transformação para criar a vida que realmente desejam.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center px-8 py-4 bg-accent-gold text-primary font-semibold rounded-full hover:bg-accent-beige transition-all duration-300"
            >
              Begin Your Journey
              <ArrowRight className="ml-2" size={20} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
