
import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import CodeEditorComponent from "@/components/CodeEditorComponent";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";

const CodeEditor = () => {
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState(getDefaultCode("javascript"));
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  // Default code templates for different languages
  function getDefaultCode(lang: string) {
    switch (lang) {
      case "javascript":
        return `// JavaScript code here\nconsole.log("Hello World!");`;
      case "python":
        return `# Python code here\nprint("Hello World!")`;
      case "java":
        return `// Java code here\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello World!");\n  }\n}`;
      case "cpp":
        return `// C++ code here\n#include <iostream>\n\nint main() {\n  std::cout << "Hello World!" << std::endl;\n  return 0;\n}`;
      default:
        return `// Start coding here`;
    }
  }

  const handleLanguageChange = (value: string) => {
    setLanguage(value);
    setCode(getDefaultCode(value));
  };

  const handleRunCode = async () => {
    setIsRunning(true);
    setOutput("");
    
    try {
      // In a real implementation, this would send the code to a backend service
      // For now, we'll simulate compilation for JavaScript only
      if (language === "javascript") {
        // Create a safe evaluation environment
        const originalConsoleLog = console.log;
        let consoleOutput = "";
        
        // Override console.log to capture output
        console.log = (...args) => {
          consoleOutput += args.join(" ") + "\n";
          originalConsoleLog(...args);
        };
        
        try {
          // Use Function constructor to evaluate code (safer than eval)
          new Function(code)();
          setOutput(consoleOutput || "Code executed without output");
        } catch (error) {
          if (error instanceof Error) {
            setOutput(`Error: ${error.message}`);
          } else {
            setOutput("An unknown error occurred");
          }
        } finally {
          // Restore original console.log
          console.log = originalConsoleLog;
        }
      } else {
        // For other languages, show a message that backend compilation is needed
        toast({
          title: "Backend Required",
          description: `Compilation for ${language} requires a backend service which is not implemented in this demo.`,
          variant: "default",
        });
        setOutput(`Backend compilation required for ${language}`);
      }
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className="min-h-screen bg-educode-dark">
      <AnimatedBackground />
      <Navigation />
      <div className="container mx-auto px-4 pt-28 pb-20">
        <div className="glass p-6 rounded-xl">
          <h1 className="text-3xl font-bold mb-6">Online Code Editor</h1>
          
          <div className="flex flex-wrap gap-4 mb-6 items-center">
            <div className="flex-1 min-w-[200px]">
              <Select value={language} onValueChange={handleLanguageChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="javascript">JavaScript</SelectItem>
                  <SelectItem value="python">Python</SelectItem>
                  <SelectItem value="java">Java</SelectItem>
                  <SelectItem value="cpp">C++</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button 
              onClick={handleRunCode} 
              disabled={isRunning} 
              className="bg-educode-success hover:bg-educode-success/80"
            >
              {isRunning ? "Running..." : "Run Code"}
            </Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Code editor */}
            <div className="h-[400px] lg:h-[500px]">
              <CodeEditorComponent 
                value={code} 
                onChange={setCode}
                language={language}
              />
            </div>
            
            {/* Output console */}
            <div className="h-[400px] lg:h-[500px] bg-black/30 rounded-lg p-4 overflow-auto font-mono text-sm">
              <div className="text-educode-light mb-2">Output:</div>
              <pre className="text-educode-accent whitespace-pre-wrap">{output}</pre>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CodeEditor;
