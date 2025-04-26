
import { motion } from "framer-motion";
import { Search, File, Code, Layout } from "lucide-react"; 
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";

interface LanguageCardProps {
  name: string;
  description: string;
  example: string;
  category: string;
  index: number;
}

const LanguageCard = ({ name, description, example, category, index }: LanguageCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="glass p-6 rounded-xl hover:shadow-xl transition-all"
    >
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <div className="flex items-center gap-2 mb-3">
        <span className="px-2 py-1 bg-educode-primary/20 text-educode-accent text-xs rounded-full">
          {category}
        </span>
      </div>
      <p className="text-educode-muted mb-4">{description}</p>
      <div className="code-block">
        <pre className="text-educode-accent/80">{example}</pre>
      </div>
    </motion.div>
  );
};

const Features = () => {
  const languages = [
    {
      name: "JavaScript",
      description: "A versatile language for web development, supporting both front-end and back-end implementations.",
      example: "const greeting = 'Hello, World!';\nconsole.log(greeting);",
      category: "Web Development"
    },
    {
      name: "Python",
      description: "Known for its readability and versatility, Python is great for beginners and supports many domains.",
      example: "greeting = 'Hello, World!'\nprint(greeting)",
      category: "General Purpose"
    },
    {
      name: "Java",
      description: "A robust, object-oriented language used for enterprise applications, Android development, and more.",
      example: "public class Hello {\n  public static void main(String[] args) {\n    System.out.println(\"Hello, World!\");\n  }\n}",
      category: "Enterprise"
    },
    {
      name: "C++",
      description: "A powerful language used for system/software development, game development, and performance-critical applications.",
      example: "#include <iostream>\n\nint main() {\n  std::cout << \"Hello, World!\" << std::endl;\n  return 0;\n}",
      category: "Systems Programming"
    },
    {
      name: "Ruby",
      description: "An elegant, developer-friendly language known for its simplicity and Ruby on Rails framework.",
      example: "greeting = 'Hello, World!'\nputs greeting",
      category: "Web Development"
    },
    {
      name: "Swift",
      description: "Apple's language for iOS, macOS, watchOS, and tvOS app development.",
      example: "let greeting = \"Hello, World!\"\nprint(greeting)",
      category: "Mobile Development"
    },
    {
      name: "Go",
      description: "Designed by Google for simplicity, reliability, and efficiency in large-scale projects.",
      example: "package main\n\nimport \"fmt\"\n\nfunc main() {\n  fmt.Println(\"Hello, World!\")\n}",
      category: "Systems Programming"
    },
    {
      name: "Rust",
      description: "A language focused on safety, speed, and concurrency without sacrificing performance.",
      example: "fn main() {\n  println!(\"Hello, World!\");\n}",
      category: "Systems Programming"
    },
    {
      name: "TypeScript",
      description: "A typed superset of JavaScript that adds static types to enhance code quality and understandability.",
      example: "const greeting: string = 'Hello, World!';\nconsole.log(greeting);",
      category: "Web Development"
    },
    {
      name: "PHP",
      description: "A server-side scripting language designed for web development.",
      example: "<?php\n  echo \"Hello, World!\";\n?>",
      category: "Web Development"
    },
    {
      name: "C#",
      description: "Microsoft's language for Windows, web, and mobile applications using the .NET framework.",
      example: "using System;\n\nclass Program {\n  static void Main() {\n    Console.WriteLine(\"Hello, World!\");\n  }\n}",
      category: "Enterprise"
    },
    {
      name: "Kotlin",
      description: "A modern language that runs on JVM and is now the preferred language for Android development.",
      example: "fun main() {\n  println(\"Hello, World!\")\n}",
      category: "Mobile Development"
    },
    {
      name: "R",
      description: "A language specifically designed for statistical computing and data analysis.",
      example: "greeting <- \"Hello, World!\"\nprint(greeting)",
      category: "Data Science"
    },
    {
      name: "Scala",
      description: "Combines object-oriented and functional programming, running on the JVM.",
      example: "object Hello {\n  def main(args: Array[String]): Unit = {\n    println(\"Hello, World!\")\n  }\n}",
      category: "Enterprise"
    },
    {
      name: "Dart",
      description: "Developed by Google, it's used to build web, server, and mobile applications with Flutter.",
      example: "void main() {\n  print('Hello, World!');\n}",
      category: "Cross-platform"
    },
    {
      name: "Haskell",
      description: "A purely functional programming language with strong static typing and lazy evaluation.",
      example: "main :: IO ()\nmain = putStrLn \"Hello, World!\"",
      category: "Functional"
    },
    {
      name: "Elixir",
      description: "Built on Erlang VM, designed for building scalable and maintainable applications.",
      example: "defmodule Hello do\n  def world do\n    IO.puts \"Hello, World!\"\n  end\nend\n\nHello.world",
      category: "Functional"
    },
    {
      name: "Julia",
      description: "High-performance language for technical computing, with syntax familiar to MATLAB users.",
      example: "println(\"Hello, World!\")",
      category: "Scientific Computing"
    },
    {
      name: "SQL",
      description: "Standard language for managing and manipulating databases.",
      example: "SELECT 'Hello, World!' AS greeting;",
      category: "Database"
    },
    {
      name: "Clojure",
      description: "A modern dialect of Lisp that runs on the JVM, emphasizing functional programming.",
      example: "(println \"Hello, World!\")",
      category: "Functional"
    },
    {
      name: "F#",
      description: "Functional-first language for the .NET platform with strong typing and concise syntax.",
      example: "printfn \"Hello, World!\"",
      category: "Functional"
    },
    {
      name: "Perl",
      description: "A flexible language used for text processing, system administration, web development, and more.",
      example: "use strict;\nuse warnings;\n\nprint \"Hello, World!\\n\";",
      category: "Scripting"
    },
    {
      name: "Lua",
      description: "A lightweight scripting language designed to be embedded in applications.",
      example: "print(\"Hello, World!\")",
      category: "Scripting"
    },
    {
      name: "Assembly",
      description: "Low-level programming language specific to a computer architecture.",
      example: "section .data\n    msg db 'Hello, World!', 0xA\n    len equ $ - msg\n\nsection .text\n    global _start\n\n_start:\n    mov eax, 4\n    mov ebx, 1\n    mov ecx, msg\n    mov edx, len\n    int 0x80\n    \n    mov eax, 1\n    xor ebx, ebx\n    int 0x80",
      category: "Systems Programming"
    }
  ];
  
  const categories = [...new Set(languages.map(lang => lang.category))].sort();

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
          <h1 className="text-4xl font-bold mb-4">Programming Languages</h1>
          <p className="text-educode-muted max-w-2xl mx-auto">
            Explore our extensive library of programming languages, each with comprehensive tutorials, interactive exercises, and real-world projects.
          </p>
        </motion.div>

        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-3 h-4 w-4 text-educode-muted" />
              <Input 
                className="pl-10" 
                placeholder="Search languages..." 
              />
            </div>
            
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {categories.map((category, idx) => (
                <button 
                  key={idx}
                  className="px-4 py-2 bg-educode-primary/20 hover:bg-educode-primary/30 text-educode-accent rounded-full text-sm transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {languages.map((lang, idx) => (
            <LanguageCard
              key={idx}
              name={lang.name}
              description={lang.description}
              example={lang.example}
              category={lang.category}
              index={idx}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold mb-6">Platform Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass p-6 rounded-xl text-center">
              <div className="h-14 w-14 rounded-full bg-educode-primary/20 flex items-center justify-center mx-auto mb-4">
                <Code className="h-6 w-6 text-educode-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Interactive Code Editor</h3>
              <p className="text-educode-muted">
                Write, compile, and run code directly in your browser with syntax highlighting and intelligent suggestions.
              </p>
            </div>
            
            <div className="glass p-6 rounded-xl text-center">
              <div className="h-14 w-14 rounded-full bg-educode-primary/20 flex items-center justify-center mx-auto mb-4">
                <Layout className="h-6 w-6 text-educode-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Visual Learning Tools</h3>
              <p className="text-educode-muted">
                Understand complex concepts through interactive visualizations, diagrams, and animated tutorials.
              </p>
            </div>
            
            <div className="glass p-6 rounded-xl text-center">
              <div className="h-14 w-14 rounded-full bg-educode-primary/20 flex items-center justify-center mx-auto mb-4">
                <File className="h-6 w-6 text-educode-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Project-Based Learning</h3>
              <p className="text-educode-muted">
                Apply your skills by building real-world projects with step-by-step guidance and expert feedback.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="py-16 bg-educode-primary/5"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-8">Ready to start your coding journey?</h2>
          <a href="/register" className="btn-primary inline-flex">
            Start Learning Today
          </a>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default Features;
