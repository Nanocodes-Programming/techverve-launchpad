import { Card, CardContent } from "@/components/ui/card";
import { Quote, TrendingUp, Users, Briefcase } from "lucide-react";
import officeProfessional from "@/assets/office-professional.jpg";
import workFromHome from "@/assets/work-from-home.jpg";
import corporateSuccess from "@/assets/corporate-success.jpg";

const SuccessStories = () => {
  const stories = [
    {
      name: "Blessing Nwosu",
      before: "Unemployed graduate (2 years)",
      after: "UI/UX Designer at Flutterwave",
      salary: "₦450,000/month",
      quote: "I didn't think I was 'tech-smart' enough. Techverve proved me wrong."
    },
    {
      name: "Ibrahim Musa",
      before: "POS operator (₦40K/month)",
      after: "Python Developer (Remote for US company)",
      salary: "$1,500/month (₦1.2M)",
      quote: "Changed my entire family's life in 7 months"
    },
    {
      name: "Cynthia Okoro",
      before: "Customer service (₦65K/month)",
      after: "Full-Stack Developer at Paystack",
      salary: "₦650,000/month",
      quote: "The mentorship made all the difference"
    }
  ];

  const stats = [
    { icon: Users, value: "340+", label: "Graduates Placed" },
    { icon: TrendingUp, value: "₦385K", label: "Average Salary/Month" },
    { icon: Briefcase, value: "89%", label: "Job Placement Rate" }
  ];

  return (
    <section id="success-stories" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold lg:text-4xl mb-4 px-2">
            Real Students. Real Results. Real Jobs.
          </h2>
          <div className="h-1 w-24 bg-secondary mx-auto rounded-full"></div>
        </div>
        
        {/* Success Images Gallery */}
        <div className="grid gap-4 sm:gap-6 md:grid-cols-3 mb-12 sm:mb-16 max-w-6xl mx-auto">
          <div className="relative group overflow-hidden rounded-2xl shadow-card hover:shadow-premium transition-all">
            <img 
              src={officeProfessional} 
              alt="Tech professional working in modern office" 
              className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary via-primary/80 to-transparent p-4 sm:p-6 text-white">
              <p className="font-bold text-base sm:text-lg">Office Success</p>
              <p className="text-xs sm:text-sm text-white/90">Working at top tech companies</p>
            </div>
          </div>
          
          <div className="relative group overflow-hidden rounded-2xl shadow-card hover:shadow-premium transition-all">
            <img 
              src={workFromHome} 
              alt="Tech professional working from home" 
              className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary via-primary/80 to-transparent p-4 sm:p-6 text-white">
              <p className="font-bold text-base sm:text-lg">Remote Freedom</p>
              <p className="text-xs sm:text-sm text-white/90">Work from anywhere in the world</p>
            </div>
          </div>
          
          <div className="relative group overflow-hidden rounded-2xl shadow-card hover:shadow-premium transition-all">
            <img 
              src={corporateSuccess} 
              alt="Corporate tech professional" 
              className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary via-primary/80 to-transparent p-4 sm:p-6 text-white">
              <p className="font-bold text-base sm:text-lg">Career Growth</p>
              <p className="text-xs sm:text-sm text-white/90">Leadership positions achieved</p>
            </div>
          </div>
        </div>
        
        <div className="grid gap-6 sm:gap-8 md:grid-cols-3 mb-12 sm:mb-16">
          {stories.map((story, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-all shadow-card hover:shadow-premium">
              <CardContent className="p-6 sm:p-8">
                <Quote className="h-8 w-8 sm:h-10 sm:w-10 text-primary mb-3 sm:mb-4 opacity-50" />
                
                <div className="mb-4 sm:mb-6 space-y-2 sm:space-y-3">
                  <div>
                    <p className="text-xs sm:text-sm font-semibold text-muted-foreground">BEFORE:</p>
                    <p className="text-xs sm:text-sm">{story.before}</p>
                  </div>
                  
                  <div className="my-2 sm:my-3">
                    <div className="h-px bg-gradient-to-r from-primary to-secondary"></div>
                  </div>
                  
                  <div>
                    <p className="text-xs sm:text-sm font-semibold text-muted-foreground">AFTER:</p>
                    <p className="text-sm sm:text-base font-bold text-primary">{story.after}</p>
                    <p className="text-base sm:text-lg font-bold text-secondary mt-1">{story.salary}</p>
                  </div>
                </div>
                
                <p className="text-xs sm:text-sm italic text-muted-foreground mb-2 sm:mb-3">
                  "{story.quote}"
                </p>
                
                <p className="text-sm sm:text-base font-semibold">— {story.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 sm:p-8 rounded-xl bg-gradient-to-br from-primary to-primary/80 text-white shadow-premium">
              <stat.icon className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-3 sm:mb-4" />
              <p className="text-4xl sm:text-5xl font-bold mb-2">{stat.value}</p>
              <p className="text-base sm:text-lg font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
