import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              About DevXLabs
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are a passionate team of developers, designers, and tech enthusiasts
              dedicated to creating exceptional digital experiences that drive business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
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
                In 2025, straight out of college and full of ambition, we — a group of computer science graduates — founded <strong>DevXLabs</strong> with one goal in mind: to build meaningful tech that solves real-world problems.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We started from our homes with laptops and determination, and today we’re turning client ideas into digital products with speed, quality, and innovation. DevXLabs is not just a company — it’s a movement to show what fresh minds can create with the right vision and team spirit.
              </p>
            </motion.div>

            {/* Values Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gray-100 rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Core Values</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3">✓</span>
                  <span className="text-gray-600">Think fresh, act bold</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3">✓</span>
                  <span className="text-gray-600">Build with empathy and excellence</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3">✓</span>
                  <span className="text-gray-600">Stay transparent and grow together</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3">✓</span>
                  <span className="text-gray-600">Never stop learning and improving</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10">
              At DevXLabs, our mission is to develop intelligent, secure, and scalable IT solutions
              that empower businesses, enhance user experiences, and make a meaningful impact on the world.
              We are equally committed to creating opportunities for freshers by providing them hands-on
              experience and training alongside industry experts — turning today’s learners into tomorrow’s leaders.

            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
              To become a globally respected IT company known for driving innovation, empowering businesses, 
              and nurturing talent — where cutting-edge technology meets human potential to build a smarter, more connected world.
            
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-10">What We Do</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Web Development', desc: 'Custom, responsive websites with modern architecture.' },
                { title: 'App Development', desc: 'Scalable mobile apps built for Android and iOS.' },
                { title: 'UI/UX Design', desc: 'Clean, user-centered design that feels as good as it looks.' },
                { title: 'AI & Automation', desc: 'Smart, automated systems that improve business efficiency.' },
                { title: 'Cloud & DevOps', desc: 'Infrastructure and CI/CD pipelines to support growth.' },
                { title: 'Startup MVPs', desc: 'Launch your idea fast with agile MVP development.' },
              ].map((service, index) => (
                <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h4>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose DevXLabs?</h2>
            <ul className="max-w-3xl mx-auto text-gray-600 space-y-4">
              <li>✅ Fresh minds, fast solutions</li>
              <li>✅ Practical, product-driven approach</li>
              <li>✅ End-to-end support — from idea to launch</li>
              <li>✅ Transparent, agile, and accountable team</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
