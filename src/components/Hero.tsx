
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="text-center space-y-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm uppercase tracking-wider text-educode-accent">
            The Future of Programming Education
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mt-2">
            Master <span className="text-educode-accent">Programming</span> with Interactive Learning
          </h1>
          <p className="text-educode-muted text-lg mt-6 max-w-2xl mx-auto">
            Join thousands of students and professionals on their journey to coding excellence. 
            Our interactive platform makes learning to code engaging, effective, and enjoyable.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/register" className="btn-primary">
            <span>Start for free</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/documentation" className="btn-secondary">
            <span>Documentation</span>
          </Link>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="pt-12"
        >
          <p className="text-educode-muted mb-4">Trusted by developers from</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-70">
            <span className="text-xl font-bold text-educode-light">Google</span>
            <span className="text-xl font-bold text-educode-light">Microsoft</span>
            <span className="text-xl font-bold text-educode-light">Apple</span>
            <span className="text-xl font-bold text-educode-light">Amazon</span>
            <span className="text-xl font-bold text-educode-light">Meta</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
