import { Check, Code, Users, Briefcase, Zap, Clock, CreditCard } from "lucide-react";

const SolutionSection = () => {
  const features = [
    {
      icon: Code,
      title: "Real Projects, Not Just Theory",
      description: "Build actual products for real clients during training – portfolio ready from day one"
    },
    {
      icon: Users,
      title: "1-on-1 Mentorship Included FREE",
      description: "Personal mentor assigned to YOU for entire journey + career guidance"
    },
    {
      icon: Briefcase,
      title: "Guaranteed Internship Placement",
      description: "Work with partner tech companies – 78% get hired as full-time staff after internship"
    },
    {
      icon: Zap,
      title: "World-Class Learning Environment",
      description: "24/7 Electricity • Super-fast WiFi (20+ Mbps) • Modern AC workspaces • Free community"
    },
    {
      icon: Clock,
      title: "Learn at Your Pace",
      description: "Flexible schedules: Weekday, Weekend, or Evening classes available"
    },
    {
      icon: CreditCard,
      title: "A Token for a Life-Changing Opportunity",
      description: "Your tuition is your ticket – get access to world-class skills and a career that can transform your life forever."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold lg:text-4xl mb-4 px-2">
            The Complete Tech Career Launchpad{" "}
            <span className="text-muted-foreground block sm:inline">(Not Just Another Course)</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            What Makes Techverve Different
          </p>
          <div className="h-1 w-24 bg-secondary mx-auto rounded-full mt-4"></div>
        </div>
        
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl border-2 border-border bg-card p-6 sm:p-8 shadow-card transition-all hover:border-primary hover:shadow-premium"
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4 h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-primary/5 transition-all group-hover:bg-primary/10"></div>
              
              <div className="relative">
                <div className="mb-4 sm:mb-6 inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <feature.icon className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{feature.description}</p>
              </div>
              
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4">
                <Check className="h-5 w-5 sm:h-6 sm:w-6 text-secondary" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
