import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      {/* ... keep existing code (error logging logic) */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-xl text-muted-foreground mb-4">
          Oops! Looks like Quirrel got a bit lost in the forest.
        </p>
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-primary-gradient rounded-full flex items-center justify-center animate-float-gentle">
            <span className="text-2xl">🐿️</span>
          </div>
        </div>
        <a 
          href="/" 
          className="inline-flex items-center px-6 py-3 bg-primary-gradient text-white font-medium rounded-xl hover:shadow-glow transition-all"
        >
          🏠 Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
