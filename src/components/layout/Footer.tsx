import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Github, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-gradient rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-sm">🐿️</span>
              </div>
              <span className="text-xl font-bold bg-primary-gradient bg-clip-text text-transparent">
                LearnLift
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Making learning fun and engaging for kids with Quirrel, your friendly squirrel guide.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Github className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/learn" className="text-muted-foreground hover:text-foreground transition-colors">
                  Subjects
                </Link>
              </li>
              <li>
                <Link to="/quests" className="text-muted-foreground hover:text-foreground transition-colors">
                  Quests & Rewards
                </Link>
              </li>
              <li>
                <Link to="/badges" className="text-muted-foreground hover:text-foreground transition-colors">
                  Badges & Achievements
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-muted-foreground hover:text-foreground transition-colors">
                  Shop
                </Link>
              </li>
            </ul>
          </div>

          {/* Audience */}
          <div>
            <h3 className="font-semibold mb-4">For Everyone</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/parents" className="text-muted-foreground hover:text-foreground transition-colors">
                  For Parents
                </Link>
              </li>
              <li>
                <Link to="/teachers" className="text-muted-foreground hover:text-foreground transition-colors">
                  For Teachers
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/safety" className="text-muted-foreground hover:text-foreground transition-colors">
                  Child Safety
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>© 2024 LearnLift. All rights reserved.</span>
              <div className="flex items-center space-x-1">
                <span>Made with</span>
                <Heart className="h-4 w-4 text-destructive" />
                <span>for curious minds</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">
                COPPA Compliant • Child Safe
              </span>
              <div className="w-2 h-2 bg-success rounded-full animate-pulse-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;