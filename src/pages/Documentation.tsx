
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Documentation = () => {
  return (
    <div className="min-h-screen bg-educode-dark">
      <Navigation />

      <div className="container mx-auto px-4 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Study Resources</h1>
          <p className="text-educode-muted max-w-2xl mx-auto">
            Comprehensive documentation and learning resources to help you master virtual learning and programming
          </p>
        </motion.div>

        <Tabs defaultValue="getting-started" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
            <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>
          
          <TabsContent value="getting-started">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="col-span-1">
                <div className="glass p-6 rounded-xl sticky top-24">
                  <h3 className="text-xl font-semibold mb-4">Quick Navigation</h3>
                  <ul className="space-y-3">
                    <li><a href="#introduction" className="text-educode-accent hover:underline">Introduction</a></li>
                    <li><a href="#prerequisites" className="text-educode-accent hover:underline">Prerequisites</a></li>
                    <li><a href="#environment" className="text-educode-accent hover:underline">Setting Up Your Environment</a></li>
                    <li><a href="#first-steps" className="text-educode-accent hover:underline">First Steps</a></li>
                    <li><a href="#common-concepts" className="text-educode-accent hover:underline">Common Concepts</a></li>
                  </ul>
                </div>
              </div>
              
              <div className="col-span-2 space-y-8">
                <section id="introduction" className="glass p-6 rounded-xl">
                  <h2 className="text-2xl font-semibold mb-4">Introduction to Virtual Learning</h2>
                  <p className="mb-4">
                    Virtual learning represents a paradigm shift in education, offering flexibility and accessibility
                    that traditional learning environments cannot match. With EduCode, you get an immersive, interactive
                    learning experience designed to accelerate your programming journey.
                  </p>
                  <p>
                    Our platform combines live coding environments, instant feedback, and step-by-step tutorials
                    to create a comprehensive learning ecosystem that adapts to your pace and learning style.
                  </p>
                </section>
                
                <section id="prerequisites" className="glass p-6 rounded-xl">
                  <h2 className="text-2xl font-semibold mb-4">Prerequisites</h2>
                  <p className="mb-4">
                    Before diving into EduCode, here's what you'll need:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>A modern web browser (Chrome, Firefox, Safari, or Edge)</li>
                    <li>Stable internet connection</li>
                    <li>Basic computer skills</li>
                    <li>Desire to learn programming (no prior experience required!)</li>
                  </ul>
                </section>
                
                <section id="environment" className="glass p-6 rounded-xl">
                  <h2 className="text-2xl font-semibold mb-4">Setting Up Your Environment</h2>
                  <p className="mb-4">
                    One of the advantages of EduCode is that you don't need to install any software locally.
                    Our cloud-based environment provides everything you need to start coding immediately.
                  </p>
                  <p>
                    Simply create an account, choose your learning path, and you're ready to go!
                  </p>
                </section>
                
                <section id="first-steps" className="glass p-6 rounded-xl">
                  <h2 className="text-2xl font-semibold mb-4">First Steps</h2>
                  <p className="mb-4">
                    After signing up, we recommend starting with these actions:
                  </p>
                  <ol className="list-decimal pl-5 space-y-3">
                    <li>Complete your profile to personalize your learning experience</li>
                    <li>Take the skill assessment to determine your starting point</li>
                    <li>Explore the learning paths available and choose one that aligns with your goals</li>
                    <li>Bookmark the resources you find most relevant for easy access later</li>
                    <li>Join our community forum to connect with other learners</li>
                  </ol>
                </section>
                
                <section id="common-concepts" className="glass p-6 rounded-xl">
                  <h2 className="text-2xl font-semibold mb-4">Common Concepts</h2>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Interactive Lessons</AccordionTrigger>
                      <AccordionContent>
                        Our interactive lessons combine theory with practice, allowing you to write and execute code directly in the browser while learning new concepts.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Code Challenges</AccordionTrigger>
                      <AccordionContent>
                        Test your skills with progressively difficult coding challenges designed to reinforce your understanding and build problem-solving abilities.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Projects</AccordionTrigger>
                      <AccordionContent>
                        Apply what you've learned by building real-world projects that you can add to your portfolio. Each project includes specifications and guidance.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>Peer Review</AccordionTrigger>
                      <AccordionContent>
                        Submit your code for review by fellow learners and experienced developers to receive constructive feedback and improve your coding practices.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                      <AccordionTrigger>Achievement System</AccordionTrigger>
                      <AccordionContent>
                        Track your progress and stay motivated with our achievement system that rewards your milestones and consistent learning habits.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </section>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="tutorials">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Tutorial cards */}
              {[
                { 
                  title: "Getting Started with HTML & CSS", 
                  level: "Beginner", 
                  duration: "2 hours",
                  description: "Learn the fundamentals of web development with HTML and CSS."
                },
                { 
                  title: "JavaScript Fundamentals", 
                  level: "Beginner", 
                  duration: "4 hours",
                  description: "Master the basics of JavaScript programming language."
                },
                { 
                  title: "Python for Data Science", 
                  level: "Intermediate", 
                  duration: "6 hours",
                  description: "Learn how to use Python for data analysis and visualization."
                },
                { 
                  title: "Building APIs with Node.js", 
                  level: "Intermediate", 
                  duration: "5 hours",
                  description: "Create robust RESTful APIs using Node.js and Express."
                },
                { 
                  title: "React Application Development", 
                  level: "Intermediate", 
                  duration: "8 hours",
                  description: "Build modern web applications with React framework."
                },
                { 
                  title: "Machine Learning Basics", 
                  level: "Advanced", 
                  duration: "10 hours",
                  description: "Introduction to machine learning algorithms and applications."
                },
              ].map((tutorial, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass p-6 rounded-xl hover:shadow-lg transition-all"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">{tutorial.title}</h3>
                  </div>
                  <p className="text-educode-muted mb-4">{tutorial.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      <span className="px-2 py-1 bg-educode-primary/20 text-educode-accent text-xs rounded-full">{tutorial.level}</span>
                      <span className="px-2 py-1 bg-educode-primary/20 text-educode-accent text-xs rounded-full">{tutorial.duration}</span>
                    </div>
                    <a href="#" className="text-educode-accent hover:underline text-sm font-medium">Start &rarr;</a>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="resources">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="glass p-6 rounded-xl"
              >
                <h3 className="text-xl font-semibold mb-4">E-Learning Resources</h3>
                <ul className="space-y-4">
                  <li className="pb-3 border-b border-white/10">
                    <a href="#" className="flex justify-between items-center group">
                      <span className="font-medium group-hover:text-educode-accent transition-colors">Interactive Programming Textbooks</span>
                      <span className="text-educode-muted text-sm">&rarr;</span>
                    </a>
                  </li>
                  <li className="pb-3 border-b border-white/10">
                    <a href="#" className="flex justify-between items-center group">
                      <span className="font-medium group-hover:text-educode-accent transition-colors">Video Lecture Series</span>
                      <span className="text-educode-muted text-sm">&rarr;</span>
                    </a>
                  </li>
                  <li className="pb-3 border-b border-white/10">
                    <a href="#" className="flex justify-between items-center group">
                      <span className="font-medium group-hover:text-educode-accent transition-colors">Coding Exercise Collections</span>
                      <span className="text-educode-muted text-sm">&rarr;</span>
                    </a>
                  </li>
                  <li className="pb-3 border-b border-white/10">
                    <a href="#" className="flex justify-between items-center group">
                      <span className="font-medium group-hover:text-educode-accent transition-colors">Programming Language References</span>
                      <span className="text-educode-muted text-sm">&rarr;</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex justify-between items-center group">
                      <span className="font-medium group-hover:text-educode-accent transition-colors">Technical Interview Preparation</span>
                      <span className="text-educode-muted text-sm">&rarr;</span>
                    </a>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="glass p-6 rounded-xl"
              >
                <h3 className="text-xl font-semibold mb-4">Community Resources</h3>
                <ul className="space-y-4">
                  <li className="pb-3 border-b border-white/10">
                    <a href="#" className="flex justify-between items-center group">
                      <span className="font-medium group-hover:text-educode-accent transition-colors">Discussion Forums</span>
                      <span className="text-educode-muted text-sm">&rarr;</span>
                    </a>
                  </li>
                  <li className="pb-3 border-b border-white/10">
                    <a href="#" className="flex justify-between items-center group">
                      <span className="font-medium group-hover:text-educode-accent transition-colors">Code Review Community</span>
                      <span className="text-educode-muted text-sm">&rarr;</span>
                    </a>
                  </li>
                  <li className="pb-3 border-b border-white/10">
                    <a href="#" className="flex justify-between items-center group">
                      <span className="font-medium group-hover:text-educode-accent transition-colors">Virtual Study Groups</span>
                      <span className="text-educode-muted text-sm">&rarr;</span>
                    </a>
                  </li>
                  <li className="pb-3 border-b border-white/10">
                    <a href="#" className="flex justify-between items-center group">
                      <span className="font-medium group-hover:text-educode-accent transition-colors">Mentorship Programs</span>
                      <span className="text-educode-muted text-sm">&rarr;</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex justify-between items-center group">
                      <span className="font-medium group-hover:text-educode-accent transition-colors">Hackathons & Challenges</span>
                      <span className="text-educode-muted text-sm">&rarr;</span>
                    </a>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="glass p-6 rounded-xl md:col-span-2"
              >
                <h3 className="text-xl font-semibold mb-4">Free Learning Materials</h3>
                <p className="text-educode-muted mb-4">
                  Access our collection of free learning materials to supplement your education:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <a href="#" className="p-4 bg-black/20 rounded-lg hover:bg-black/30 transition-colors">
                    <h4 className="font-medium mb-2">E-Books Library</h4>
                    <p className="text-sm text-educode-muted">Download free programming e-books across various topics</p>
                  </a>
                  <a href="#" className="p-4 bg-black/20 rounded-lg hover:bg-black/30 transition-colors">
                    <h4 className="font-medium mb-2">Cheat Sheets</h4>
                    <p className="text-sm text-educode-muted">Quick reference guides for languages and frameworks</p>
                  </a>
                  <a href="#" className="p-4 bg-black/20 rounded-lg hover:bg-black/30 transition-colors">
                    <h4 className="font-medium mb-2">Project Starter Kits</h4>
                    <p className="text-sm text-educode-muted">Templates to kickstart your coding projects</p>
                  </a>
                  <a href="#" className="p-4 bg-black/20 rounded-lg hover:bg-black/30 transition-colors">
                    <h4 className="font-medium mb-2">Practice Datasets</h4>
                    <p className="text-sm text-educode-muted">Sample datasets for data science and analysis projects</p>
                  </a>
                  <a href="#" className="p-4 bg-black/20 rounded-lg hover:bg-black/30 transition-colors">
                    <h4 className="font-medium mb-2">Algorithm Visualizations</h4>
                    <p className="text-sm text-educode-muted">Interactive visualizations of common algorithms</p>
                  </a>
                  <a href="#" className="p-4 bg-black/20 rounded-lg hover:bg-black/30 transition-colors">
                    <h4 className="font-medium mb-2">Coding Challenges</h4>
                    <p className="text-sm text-educode-muted">Weekly coding challenges to test your skills</p>
                  </a>
                </div>
              </motion.div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Documentation;
