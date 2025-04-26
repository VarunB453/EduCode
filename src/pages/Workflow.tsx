
import React from "react";
import { motion } from "framer-motion";
import { GitMerge, CheckCircle, Bot, Share } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

const workflows = [
  {
    icon: <GitMerge className="w-6 h-6" />,
    title: "Code merge made easy",
    description: "Seamlessly merge your code with built-in version control",
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: "Review code without worry",
    description: "Automated code review and quality checks",
  },
  {
    icon: <Bot className="w-6 h-6" />,
    title: "AI Assistance to reduce time",
    description: "Let AI help you write better code faster",
  },
  {
    icon: <Share className="w-6 h-6" />,
    title: "Share work in minutes",
    description: "Instantly share your work with team members",
  },
];

const Workflow = () => {
  return (
    <div className="min-h-screen bg-educode-dark">
      <AnimatedBackground />
      <Navigation />
      <section className="py-20 px-4 bg-virtualr-dark/50 pt-28">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold">
              Accelerate your coding workflow
            </h2>
            <p className="text-virtualr-muted mt-4">
              Streamline your development process
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {workflows.map((workflow, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass p-6 rounded-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="text-virtualr-accent">{workflow.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {workflow.title}
                    </h3>
                    <p className="text-virtualr-muted">{workflow.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Workflow;
