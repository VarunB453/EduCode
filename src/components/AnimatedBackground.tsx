
import React from "react";
import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Code blocks */}
      <motion.div
        className="absolute w-24 h-24 text-xs font-mono text-educode-accent/20 bg-black/20 p-3 rounded-lg"
        initial={{ x: "10vw", y: "20vh" }}
        animate={{
          x: ["10vw", "15vw", "10vw"],
          y: ["20vh", "25vh", "20vh"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {`function learnToCode() {
          return success;
        }`}
      </motion.div>

      <motion.div
        className="absolute w-32 h-32 text-xs font-mono text-educode-accent/20 bg-black/20 p-3 rounded-lg"
        initial={{ x: "70vw", y: "60vh" }}
        animate={{
          x: ["70vw", "65vw", "70vw"],
          y: ["60vh", "65vh", "60vh"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        {`const knowledge = {
          type: "unlimited",
          access: true
        };`}
      </motion.div>

      <motion.div
        className="absolute w-28 h-28 text-xs font-mono text-educode-accent/20 bg-black/20 p-3 rounded-lg"
        initial={{ x: "30vw", y: "80vh" }}
        animate={{
          x: ["30vw", "35vw", "30vw"],
          y: ["80vh", "75vh", "80vh"],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        {`import { success } from 'educode';
        
export default function YourFuture() {
  return <Bright />;
}`}
      </motion.div>
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-educode-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-educode-accent/10 rounded-full blur-3xl"></div>
    </div>
  );
};

export default AnimatedBackground;
