import { Award, Star } from "lucide-react";
import logo from "@/assets/techverve-logo.png";

const Footer = () => {
  return (
    <footer className="border-t bg-card py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          <img src={logo} alt="TechVerve" className="h-10" />
          
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <span>Google Partner</span>
            </div>
            <span className="hidden sm:inline">|</span>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <span>Microsoft Certified</span>
            </div>
            <span className="hidden sm:inline">|</span>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 sm:h-5 sm:w-5 text-secondary" />
              <span>4.8/5 (180+ reviews)</span>
            </div>
            <span className="hidden sm:inline">|</span>
            <span className="text-center">Powered by Nancodes and registered with CAC</span>
          </div>
          
          <div className="space-y-2">
            <p className="text-xs sm:text-sm text-muted-foreground">
              © 2024 TechVerve. All rights reserved.
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground">
              📞{" "}
              <a 
                href="tel:+2349159521960" 
                className="underline hover:text-primary transition-colors break-all"
              >
                +234 915 952 1960
              </a>
              <span className="hidden sm:inline">{" "} | </span>
              <span className="block sm:inline">📧{" "}</span>
              <a 
                href="mailto:info@nanocodes.com.ng" 
                className="underline hover:text-primary transition-colors break-all"
              >
                info@nanocodes.com.ng
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
