import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '../components/Footer';

const Careers = () => {
  const [activeTab, setActiveTab] = useState('positions');

  const jobPositions = [
    {
      id: 1,
      title: 'Senior React Developer',
      type: 'Full-time',
      location: 'Remote',
      department: 'Engineering',
      description: 'We are looking for an experienced React developer to join our team and help build amazing web applications.',
      requirements: [
      '5+ years of experience with React',
      'Strong knowledge of TypeScript',
      'Experience with state management (Redux, Zustand)',
      'Familiarity with modern build tools',
      'Excellent problem-solving skills'
      ],
      benefits: [
        'Competitive salary',
        'Remote work options',
        'Health insurance',
        'Professional development',
        'Flexible hours'
      ]
    },
    {
      id: 2,
      title: 'Mobile App Developer',
      type: 'Full-time',
      location: 'Hybrid',
      department: 'Engineering',
      description: 'Join our mobile team to create innovative iOS and Android applications that users love.',
      requirements: [
        '3+ years of mobile development experience',
        'Experience with React Native or Flutter',
        'Knowledge of native iOS/Android development',
        'Understanding of mobile UI/UX principles',
        'Experience with app store deployment'
      ],
      benefits: [
        'Competitive salary',
        'Latest devices for development',
        'Conference attendance',
        'Health insurance',
        'Stock options'
      ]
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      type: 'Full-time',
      location: 'Remote',
      department: 'Design',
      description: 'Help us create beautiful and intuitive user experiences across web and mobile platforms.',
      requirements: [
        '3+ years of UI/UX design experience',
        'Proficiency in Figma, Sketch, or Adobe XD',
        'Strong portfolio showcasing web and mobile work',
        'Understanding of design systems',
        'Experience with user research and testing'
      ],
      benefits: [
        'Competitive salary',
        'Remote work options',
        'Design tools and resources',
        'Professional development',
        'Creative freedom'
      ]
    }
  ];

  const cultureValues = [
    {
      icon: '🚀',
      title: 'Innovation',
      description: 'We encourage creative thinking and experimentation to solve complex problems.'
    },
    {
      icon: '🤝',
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and diverse perspectives.'
    },
    {
      icon: '📈',
      title: 'Growth',
      description: 'Continuous learning and professional development are core to our culture.'
    },
    {
      icon: '🎯',
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from code to customer service.'
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
              Join Our Team
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're looking for passionate individuals who want to make a difference 
              in the world of technology.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-12"
          >
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setActiveTab('positions')}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                  activeTab === 'positions'
                    ? 'bg-white text-primary-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Open Positions
              </button>
              <button
                onClick={() => setActiveTab('culture')}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                  activeTab === 'culture'
                    ? 'bg-white text-primary-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Our Culture
              </button>
            </div>
          </motion.div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {activeTab === 'positions' && (
              <motion.div
                key="positions"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {jobPositions.map((job) => (
                  <motion.div
                    key={job.id}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="card"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          <span className="flex items-center">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                            {job.type}
                          </span>
                          <span className="flex items-center">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                            {job.location}
                          </span>
                          <span className="flex items-center">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                            {job.department}
                          </span>
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="btn-primary mt-4 lg:mt-0"
                      >
                        Apply Now
                      </motion.button>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {job.description}
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Requirements</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-primary-600 mr-2 mt-1">•</span>
                              <span className="text-gray-600">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Benefits</h4>
                        <ul className="space-y-2">
                          {job.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-green-600 mr-2 mt-1">✓</span>
                              <span className="text-gray-600">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === 'culture' && (
              <motion.div
                key="culture"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                  {cultureValues.map((value) => (
                    <motion.div
                      key={value.title}
                      variants={itemVariants}
                      className="card text-center"
                    >
                      <div className="text-4xl mb-4">{value.icon}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="mt-16 text-center"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Why Work With Us?
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                    We offer a supportive environment where you can grow your skills, 
                    work on exciting projects, and make a real impact in the tech industry.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="btn-primary text-lg px-8 py-4"
                  >
                    Send Your Resume
                  </motion.button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers; 