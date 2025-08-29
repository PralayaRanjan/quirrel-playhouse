import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Zap, Users, Trophy } from "lucide-react";
import heroBackground from "@/assets/hero-forest-bg.jpg";

const HeroSection = () => {
  // Mock live stats - in real app these would come from API
  const liveStats = {
    learnersOnline: 12847,
    xpEarnedToday: 2485672,
    streaksActive: 8934
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/70" />
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated acorns */}
        <div className="absolute top-1/4 left-1/4 animate-float-gentle">
          <div className="w-8 h-8 bg-support/20 rounded-full flex items-center justify-center">
            🌰
          </div>
        </div>
        <div className="absolute top-2/3 left-3/4 animate-float-gentle" style={{ animationDelay: '1s' }}>
          <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center text-xs">
            ➕
          </div>
        </div>
        <div className="absolute top-1/2 right-1/4 animate-float-gentle" style={{ animationDelay: '2s' }}>
          <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
            📚
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 animate-bounce-in">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">New: Quest Adventures!</span>
            </div>

            {/* Headlines */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-primary-gradient bg-clip-text text-transparent">
                  Play.
                </span>
                <br />
                <span className="text-foreground">Learn.</span>
                <br />
                <span className="bg-success-gradient bg-clip-text text-transparent">
                  Level Up.
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                K–6 Math, Science & Languages—powered by fun and your friendly squirrel guide, Quirrel!
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary-gradient hover:shadow-glow transition-all group text-lg px-8 py-6"
              >
                Start Learning Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/30 hover:bg-primary/5 text-lg px-8 py-6 group"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                See How It Works
              </Button>
            </div>

            {/* Live stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 mb-1">
                  <Users className="h-4 w-4 text-accent" />
                  <span className="text-2xl font-bold text-accent">
                    {liveStats.learnersOnline.toLocaleString()}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">Learning now</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 mb-1">
                  <Zap className="h-4 w-4 text-support" />
                  <span className="text-2xl font-bold text-support">
                    {Math.round(liveStats.xpEarnedToday / 1000)}K
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">XP earned today</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 mb-1">
                  <Trophy className="h-4 w-4 text-destructive" />
                  <span className="text-2xl font-bold text-destructive">
                    {liveStats.streaksActive.toLocaleString()}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">Streaks alive</p>
              </div>
            </div>
          </div>

          {/* Mascot Animation Area */}
          <div className="relative lg:h-96 flex items-center justify-center">
            {/* Placeholder for Quirrel mascot - will be replaced with proper animation */}
            <div className="relative">
              {/* Main mascot */}
              <div className="w-64 h-64 bg-primary-gradient rounded-full flex items-center justify-center shadow-glow animate-float-gentle">
                <span className="text-8xl">🐿️</span>
              </div>
              
              {/* Speech bubble */}
              <div className="absolute -top-8 -right-8 bg-white rounded-2xl p-3 shadow-card animate-bounce-in" style={{ animationDelay: '1s' }}>
                <p className="text-sm font-medium text-foreground">Hi there! Ready to learn?</p>
                <div className="absolute bottom-0 left-4 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white"></div>
              </div>

              {/* Floating XP */}
              <div className="absolute top-4 left-4 bg-success/20 border border-success/30 rounded-full px-3 py-1 animate-pulse-glow">
                <span className="text-sm font-bold text-success">+50 XP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;