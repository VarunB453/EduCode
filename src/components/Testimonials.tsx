
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "EduCode has completely transformed how I learn programming. The interactive exercises and real-time feedback make the process engaging and effective.",
    author: "Sarah Johnson",
    role: "Self-taught Developer",
    company: "TechStartup Inc.",
  },
  {
    quote:
      "As someone who struggled with traditional programming courses, EduCode's visual approach and step-by-step guidance helped me finally understand complex concepts.",
    author: "Michael Chen",
    role: "Computer Science Student",
    company: "Stanford University",
  },
  {
    quote:
      "I've tried many programming platforms, but none compare to EduCode's immersive learning experience and supportive community.",
    author: "Emma Williams",
    role: "Career Changer",
    company: "Former Marketing Specialist",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const prev = () => {
    setCurrentIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

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
          <h2 className="text-3xl font-bold">What our students say</h2>
          <p className="text-educode-muted mt-4">
            Join thousands of satisfied learners on their journey to coding mastery
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="testimonial-card text-center"
          >
            <p className="text-lg mb-6">"{testimonials[currentIndex].quote}"</p>
            <div>
              <p className="font-semibold">
                {testimonials[currentIndex].author}
              </p>
              <p className="text-educode-muted">
                {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
              </p>
            </div>
          </motion.div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 hover:text-educode-accent transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 hover:text-educode-accent transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
