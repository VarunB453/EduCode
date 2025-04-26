
import { motion } from "framer-motion";
import { Code, Layout, File, ChevronRight } from "lucide-react";

const features = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "Interactive Code Editor",
    description: "Build your programming skills with our powerful, in-browser code editor"
  },
  {
    icon: <Layout className="w-6 h-6" />,
    title: "Multi-Platform Compatibility",
    description: "Practice and learn on any device with seamless synchronization"
  },
  {
    icon: <File className="w-6 h-6" />,
    title: "Comprehensive Curriculum",
    description: "From fundamentals to advanced topics across multiple programming languages"
  },
];

const Features = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold">Learn Programming the Right Way</h2>
          <p className="text-educode-muted mt-4">
            Our platform provides everything you need to master coding
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="feature-card"
            >
              <div className="text-educode-accent mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-educode-muted">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a href="/features" className="inline-flex items-center text-educode-accent hover:underline">
            <span>View all features</span>
            <ChevronRight className="w-4 h-4 ml-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
