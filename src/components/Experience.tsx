import { motion } from 'framer-motion';
import { Code2, Server, Database } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Innovators Inc.',
    period: '2020 - Present',
    description: 'Led development of enterprise-scale applications using React, Node.js, and AWS.',
    icon: Code2
  },
  {
    title: 'Backend Engineer',
    company: 'Data Systems Corp',
    period: '2018 - 2020',
    description: 'Designed and implemented scalable microservices architecture.',
    icon: Server
  },
  {
    title: 'Database Administrator',
    company: 'Global Solutions Ltd',
    period: '2016 - 2018',
    description: 'Optimized database performance and implemented data security measures.',
    icon: Database
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Experience</h2>
          <p className="text-gray-600 dark:text-gray-400">My professional journey in tech</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <exp.icon className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
              <p className="text-purple-600 dark:text-purple-400 mb-2">{exp.company}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">{exp.period}</p>
              <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}