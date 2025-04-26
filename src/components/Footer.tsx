
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-educode-dark/50 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-educode-accent">EduCode</h3>
            <p className="text-sm text-educode-muted">
              Transform your learning experience with our comprehensive virtual learning platform.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-educode-light">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-educode-muted hover:text-educode-accent transition-colors">Home</Link></li>
              <li><Link to="/documentation" className="text-educode-muted hover:text-educode-accent transition-colors">Documentation</Link></li>
              <li><Link to="/features" className="text-educode-muted hover:text-educode-accent transition-colors">Features</Link></li>
              <li><Link to="/workflow" className="text-educode-muted hover:text-educode-accent transition-colors">Workflow</Link></li>
              <li><Link to="/pricing" className="text-educode-muted hover:text-educode-accent transition-colors">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-educode-light">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-educode-muted hover:text-educode-accent transition-colors">Blog</a></li>
              <li><a href="#" className="text-educode-muted hover:text-educode-accent transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-educode-muted hover:text-educode-accent transition-colors">Community</a></li>
              <li><a href="#" className="text-educode-muted hover:text-educode-accent transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-educode-light">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-educode-muted hover:text-educode-accent transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-educode-muted hover:text-educode-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-educode-muted hover:text-educode-accent transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-educode-muted">
          <p>&copy; {new Date().getFullYear()} EduCode. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
