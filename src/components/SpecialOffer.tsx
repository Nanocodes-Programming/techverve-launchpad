import { Button } from "@/components/ui/button";
import { Check, Clock, Laptop, Award, Linkedin, Globe, Users } from "lucide-react";
import { scrollToHeroForm } from "@/lib/utils";

const SpecialOffer = () => {
  const bonuses = [
    { icon: Laptop, text: "FREE Laptop Rental for 6 months", value: "₦180,000 value" },
    { icon: Award, text: "FREE Premium Coding Software licenses", value: "₦50,000 value" },
    { icon: Users, text: "FREE Interview Prep Bootcamp", value: "₦75,000 value" },
    { icon: Linkedin, text: "FREE LinkedIn Profile Optimization", value: "₦25,000 value" },
    { icon: Globe, text: "FREE Access to Alumni Job Network", value: "Priceless" }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnpNMTIgMThjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZ6bTAgMTJjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZ6bTAgMTJjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZ6IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuMDUiLz48L2c+PC9zdmc+')] opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl bg-white/10 backdrop-blur-lg border-2 border-white/20 p-8 lg:p-12 shadow-premium">
            <div className="text-center mb-6 sm:mb-8">
              <div className="inline-block mb-4">
                <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base lg:text-lg font-bold text-secondary-foreground animate-pulse">
                  DECEMBER ENROLLMENT SPECIAL
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white lg:text-4xl mb-2">
                Enroll This Week & Get
              </h2>
              <p className="text-white/80 text-base sm:text-lg">(Ends Nov 30)</p>
            </div>

            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {bonuses.map((bonus, index) => (
                <div key={index} className="flex items-center gap-3 sm:gap-4 bg-white/5 rounded-xl p-3 sm:p-4 border border-white/10 hover:bg-white/10 transition-all">
                  <div className="flex-shrink-0 h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-secondary flex items-center justify-center">
                    <bonus.icon className="h-5 w-5 sm:h-6 sm:w-6 text-secondary-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-white text-sm sm:text-base">{bonus.text}</p>
                    <p className="text-xs sm:text-sm text-white/70">{bonus.value}</p>
                  </div>
                  <Check className="h-5 w-5 sm:h-6 sm:w-6 text-secondary flex-shrink-0" />
                </div>
              ))}
            </div>

            <div className="bg-white/10 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8 border border-white/20">
              <p className="text-white font-semibold text-base sm:text-lg mb-3 sm:mb-4">
                BONUS: First 20 students get FREE domain + hosting for portfolio site
              </p>

              <div className="space-y-2 text-white/90">
                <p className="font-semibold mb-2 text-sm sm:text-base">Payment Options:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base">Pay in Full: Get 15% discount</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base">Monthly Installments: 0% interest</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base">Skill-Now-Pay-Later: Pay after getting job (conditions apply)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center space-y-3 sm:space-y-4">
              <a href="#hero-form" onClick={scrollToHeroForm} className="block">
                <Button size="lg" className="w-full lg:w-auto gradient-cta hover:opacity-90 text-base sm:text-lg lg:text-xl font-bold py-6 sm:py-8 px-6 sm:px-12 animate-pulse-slow shadow-2xl">
                  LOCK IN THIS DEAL TODAY
                </Button>
              </a>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-white/90">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-secondary" />
                <p className="text-xs sm:text-sm font-semibold text-center">
                  Only 8 spots left in December cohort <span className="hidden sm:inline">|</span> <span className="block sm:inline">Next intake: February 2026</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
