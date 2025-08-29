import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X, 
  Search, 
  Bell, 
  User, 
  Zap, 
  Trophy,
  Settings,
  LogOut
} from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Mock user state - in real app this would come from auth context
  const isLoggedIn = false;
  const userXP = 2450;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-primary-gradient rounded-xl flex items-center justify-center group-hover:animate-bounce-in transition-all">
              <span className="text-white font-bold text-sm">🐿️</span>
            </div>
            <span className="text-xl font-bold bg-primary-gradient bg-clip-text text-transparent">
              LearnLift
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/learn" className="text-sm font-medium hover:text-primary transition-colors">
              Learn
            </Link>
            <Link to="/quests" className="text-sm font-medium hover:text-primary transition-colors">
              Quests
            </Link>
            <Link to="/badges" className="text-sm font-medium hover:text-primary transition-colors">
              Badges
            </Link>
            <Link to="/shop" className="text-sm font-medium hover:text-primary transition-colors">
              Shop
            </Link>
            <Link to="/parents" className="text-sm font-medium hover:text-primary transition-colors">
              For Parents
            </Link>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <Search className="h-4 w-4" />
            </Button>

            {isLoggedIn ? (
              <>
                {/* XP Counter */}
                <div className="hidden md:flex items-center space-x-2 bg-success/10 rounded-full px-3 py-1">
                  <Zap className="h-4 w-4 text-support" />
                  <span className="text-sm font-medium">{userXP.toLocaleString()}</span>
                </div>

                {/* Notifications */}
                <Button variant="ghost" size="sm" className="relative">
                  <Bell className="h-4 w-4" />
                  <span className="absolute -top-1 -right-1 h-3 w-3 bg-destructive rounded-full animate-pulse-glow"></span>
                </Button>

                {/* Profile Menu */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="relative">
                      <div className="w-8 h-8 bg-primary-gradient rounded-full flex items-center justify-center">
                        <User className="h-4 w-4 text-white" />
                      </div>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuItem>
                      <Trophy className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <div className="flex items-center space-x-3">
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
                <Button size="sm" className="bg-primary-gradient hover:shadow-glow transition-all">
                  Get Started Free
                </Button>
              </div>
            )}

            {/* Mobile menu toggle */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t bg-card">
            <nav className="space-y-2">
              <Link 
                to="/learn" 
                className="block px-3 py-2 text-sm font-medium hover:bg-muted rounded-lg transition-colors"
              >
                Learn
              </Link>
              <Link 
                to="/quests" 
                className="block px-3 py-2 text-sm font-medium hover:bg-muted rounded-lg transition-colors"
              >
                Quests
              </Link>
              <Link 
                to="/badges" 
                className="block px-3 py-2 text-sm font-medium hover:bg-muted rounded-lg transition-colors"
              >
                Badges
              </Link>
              <Link 
                to="/parents" 
                className="block px-3 py-2 text-sm font-medium hover:bg-muted rounded-lg transition-colors"
              >
                For Parents
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;