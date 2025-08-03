import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Award, Target, Lightbulb, Heart } from 'lucide-react';

export default function About() {
  const stats = [
    { number: '10K+', label: 'Readers Transformed', icon: Users },
    { number: '50+', label: 'Countries Reached', icon: Award },
    { number: '95%', label: 'Success Rate', icon: Target },
  ];

  const principles = [
    {
      icon: Lightbulb,
      title: 'Practical Wisdom',
      description:
        'Real-world strategies that work in your daily life, not just theory.',
    },
    {
      icon: Heart,
      title: 'Intuitive Guidance',
      description:
        'Connect with your inner wisdom and natural instincts for better decisions.',
    },
    {
      icon: BookOpen,
      title: 'Structured Approach',
      description:
        'Step-by-step methodology to achieve lasting transformation.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
            About Adam Yasu
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A visionary author dedicated to bridging the gap between spiritual
            wisdom and practical application for real-world transformation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754180246236_sutwvr7z7kg_Adam_Yasu.png"
              alt="Adam Yasu"
              className="w-full h-auto rounded-3xl shadow-2xl hover-lift"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-serif font-bold text-primary mb-6">
              Your Guide to Self-Realization
            </h3>

            <p className="text-lg text-gray-700 leading-relaxed">
              Adam Yasu combines years of spiritual exploration with practical
              methodology to create transformative experiences. His approach is
              grounded in the belief that true change comes from aligning your
              inner desires with actionable steps.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Through his work, Adam has helped thousands discover their
              authentic path and create lasting change in their lives. His
              philosophy centers on the power of conscious alignment and
              intentional living.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <span className="px-4 py-2 bg-accent-beige text-primary rounded-full font-medium">
                Author
              </span>
              <span className="px-4 py-2 bg-accent-beige text-primary rounded-full font-medium">
                Spiritual Guide
              </span>
              <span className="px-4 py-2 bg-accent-beige text-primary rounded-full font-medium">
                Transformation Coach
              </span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-white rounded-2xl shadow-lg hover-lift"
            >
              <stat.icon className="w-12 h-12 text-accent-gold mx-auto mb-4" />
              <div className="text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl"
        >
          <h3 className="text-3xl font-serif font-bold text-primary text-center mb-12">
            Core Principles
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center space-y-4"
              >
                <div className="w-16 h-16 bg-accent-beige rounded-full flex items-center justify-center mx-auto">
                  <principle.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-bold text-primary">
                  {principle.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
