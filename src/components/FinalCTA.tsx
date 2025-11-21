import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Calendar, TrendingDown, TrendingUp } from "lucide-react";
import { scrollToHeroForm } from "@/lib/utils";

const FinalCTA = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnpNMTIgMThjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZ6bTAgMTJjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZ6bTAgMTJjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZ6IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuMDUiLz48L2c+PC9zdmc+')] opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white lg:text-5xl mb-6 sm:mb-8 px-2">
            Your Future Self Will Thank You for Starting Today
          </h2>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border-2 border-white/20">
              <TrendingUp className="h-10 w-10 sm:h-12 sm:w-12 text-secondary mx-auto mb-4" />
              <p className="text-white font-semibold text-base sm:text-lg mb-2">📅 Start Today</p>
              <p className="text-2xl font-bold text-secondary mb-2">→</p>
              <p className="text-white text-lg sm:text-xl">Earning ₦400K/month by June 2026</p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border-2 border-white/10 opacity-70">
              <TrendingDown className="h-10 w-10 sm:h-12 sm:w-12 text-white/60 mx-auto mb-4" />
              <p className="text-white/80 font-semibold text-base sm:text-lg mb-2">⏳ Wait 6 Months</p>
              <p className="text-2xl font-bold text-white/60 mb-2">→</p>
              <p className="text-white/80 text-lg sm:text-xl">Still searching for ₦80K jobs</p>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <a href="tel:+2349159521960" className="block">
              <Button
                size="lg"
                className="w-full md:w-auto gradient-cta hover:opacity-90 text-base sm:text-lg lg:text-xl font-bold py-6 sm:py-8 px-6 sm:px-12 animate-pulse-slow shadow-2xl"
              >
                <Phone className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3" />
                <span className="hidden sm:inline">📞 </span>CALL/WHATSAPP: +234 915 952 1960
              </Button>
            </a>

            <p className="text-white/90 text-base sm:text-lg">Speak to admission counselor NOW</p>

            <a href="#hero-form" onClick={scrollToHeroForm} className="block">
              <Button
                size="lg"
                variant="outline"
                className="w-full md:w-auto border-2 border-white bg-white/10 text-white hover:bg-white hover:text-primary text-sm sm:text-base lg:text-lg font-semibold py-5 sm:py-6 px-6 sm:px-10 backdrop-blur-sm"
              >
                <Calendar className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                BOOK FREE STRATEGY SESSION
              </Button>
            </a>
            <p className="text-white/80 text-sm sm:text-base">See if tech career is right for you</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
