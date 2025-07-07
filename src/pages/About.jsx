import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const About = () => {
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
              About Devxlab
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are a passionate team of developers, designers, and tech enthusiasts 
              dedicated to creating exceptional digital experiences that drive business growth.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Founded in 2019, Devxlab emerged from a simple belief: technology should 
                empower businesses, not complicate them. We started as a small team of 
                developers with big dreams and have grown into a full-service technology 
                company serving clients worldwide.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our mission is to deliver innovative, scalable, and user-friendly solutions 
                that help businesses thrive in the digital landscape. We believe in 
                building long-term partnerships with our clients, understanding their 
                unique challenges, and providing tailored solutions that drive real results.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gray-100 rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3">✓</span>
                  <span className="text-gray-600">Innovation at the core of everything we do</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3">✓</span>
                  <span className="text-gray-600">Quality and attention to detail</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3">✓</span>
                  <span className="text-gray-600">Client success is our success</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3">✓</span>
                  <span className="text-gray-600">Continuous learning and improvement</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About; 