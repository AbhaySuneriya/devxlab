import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const Services = () => {
  const services = [
    {
      id: 'web',
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications',
      features: [
        'Custom website development',
        'E-commerce solutions',
        'Progressive Web Apps (PWA)',
        'API development and integration',
        'Performance optimization',
        'SEO-friendly development'
      ],
      icon: '💻',
      color: 'bg-blue-500'
    },
    {
      id: 'mobile',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications',
      features: [
        'iOS and Android development',
        'React Native applications',
        'Flutter cross-platform apps',
        'App store optimization',
        'Push notifications',
        'Offline functionality'
      ],
      icon: '📱',
      color: 'bg-green-500'
    },
    {
      id: 'solutions',
      title: 'Tech Solutions',
      description: 'Custom software and system integrations',
      features: [
        'Custom software development',
        'System integration',
        'Database design and optimization',
        'Cloud infrastructure setup',
        'Automation solutions',
        'Legacy system modernization'
      ],
      icon: '🔧',
      color: 'bg-purple-500'
    },
    {
      id: 'support',
      title: 'Technical Support',
      description: '24/7 support and maintenance services',
      features: [
        'Round-the-clock monitoring',
        'Bug fixes and updates',
        'Performance optimization',
        'Security audits',
        'Backup and recovery',
        'Technical consultation'
      ],
      icon: '🛠️',
      color: 'bg-orange-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="min-h-screen">
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We offer comprehensive technology solutions to help your business 
              thrive in the digital world.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-16"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="order-2 lg:order-1"
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center text-2xl mr-4`}>
                      {service.icon}
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                  </div>
                  <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="text-primary-600 mr-3 mt-1">✓</span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="order-1 lg:order-2"
                >
                  <div className={`${service.color} rounded-lg p-8 text-white`}>
                    <div className="text-6xl mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-lg opacity-90">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and find the perfect solution 
              for your business needs.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block"
            >
              <a
                href="/contact"
                className="btn-primary text-lg px-8 py-4"
              >
                Contact Us Today
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services; 