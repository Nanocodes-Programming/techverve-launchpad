import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { scrollToHeroForm } from "@/lib/utils";
import logo from "@/assets/techverve-logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logo} alt="TechVerve" className="h-10 sm:h-12" />
          </div>
          
          <div className="hidden items-center gap-4 lg:gap-8 lg:flex">
            <a href="#courses" className="text-sm font-medium transition-colors hover:text-primary">
              Courses
            </a>
            <a href="#success-stories" className="text-sm font-medium transition-colors hover:text-primary">
              Success Stories
            </a>
            <a href="#faq" className="text-sm font-medium transition-colors hover:text-primary">
              FAQ
            </a>
            <a href="#hero-form" onClick={scrollToHeroForm}>
              <Button variant="default" className="gradient-hero text-xs sm:text-sm">
                Book Free Session
              </Button>
            </a>
          </div>
          
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t bg-background/95 backdrop-blur">
            <div className="flex flex-col gap-4 p-4">
              <a 
                href="#courses" 
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Courses
              </a>
              <a 
                href="#success-stories" 
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Success Stories
              </a>
              <a 
                href="#faq" 
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
              <a href="#hero-form" onClick={(e) => { scrollToHeroForm(e); setIsMenuOpen(false); }}>
                <Button variant="default" className="gradient-hero w-full">
                  Book Free Session
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
