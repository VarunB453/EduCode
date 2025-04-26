
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { toast } = useToast();

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive",
      });
      return;
    }

    // For now, just show a success message
    toast({
      title: "Registration Successful",
      description: "Welcome to EduCode!",
    });
  };
  
  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    
    // For now, just show a success message
    toast({
      title: "Sign In Successful",
      description: "Welcome back to EduCode!",
    });
  };

  return (
    <div className="min-h-screen bg-educode-dark">
      <AnimatedBackground />
      <Navigation />
      
      <div className="min-h-screen pt-20 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass w-full max-w-md p-8 rounded-xl"
        >
          <h2 className="text-2xl font-bold text-center text-educode-light mb-6">
            Join EduCode
          </h2>
          
          <Tabs defaultValue="signup" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
              <TabsTrigger value="signin">Sign In</TabsTrigger>
            </TabsList>
            
            <TabsContent value="signup">
              <form onSubmit={handleSignUp} className="space-y-4">
                <div>
                  <label htmlFor="signup-email" className="text-educode-light block mb-2">
                    Email
                  </label>
                  <Input
                    id="signup-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label htmlFor="signup-password" className="text-educode-light block mb-2">
                    Password
                  </label>
                  <Input
                    id="signup-password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full"
                    placeholder="Create a password"
                  />
                </div>
                <div>
                  <label htmlFor="confirm-password" className="text-educode-light block mb-2">
                    Confirm Password
                  </label>
                  <Input
                    id="confirm-password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="w-full"
                    placeholder="Confirm your password"
                  />
                </div>
                <Button type="submit" className="w-full bg-educode-primary hover:bg-educode-secondary">
                  Create Account
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="signin">
              <form onSubmit={handleSignIn} className="space-y-4">
                <div>
                  <label htmlFor="signin-email" className="text-educode-light block mb-2">
                    Email
                  </label>
                  <Input
                    id="signin-email"
                    type="email"
                    required
                    className="w-full"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label htmlFor="signin-password" className="text-educode-light block mb-2">
                    Password
                  </label>
                  <Input
                    id="signin-password"
                    type="password"
                    required
                    className="w-full"
                    placeholder="Enter your password"
                  />
                  <div className="text-right mt-1">
                    <a href="#" className="text-sm text-educode-accent hover:underline">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <Button type="submit" className="w-full bg-educode-primary hover:bg-educode-secondary">
                  Sign In
                </Button>
              </form>
            </TabsContent>
          </Tabs>
          
          <div className="mt-6 pt-6 border-t border-white/10 text-center">
            <p className="text-educode-muted">
              By creating an account, you agree to our
              <a href="#" className="text-educode-accent hover:underline ml-1">Terms of Service</a>
              <span className="mx-1">and</span>
              <a href="#" className="text-educode-accent hover:underline">Privacy Policy</a>
            </p>
          </div>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Register;
