import { AlertCircle, DollarSign, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ProblemSection = () => {
  const problems = [
    {
      icon: AlertCircle,
      title: "No Marketable Skills",
      description: "Your degree doesn't translate to real-world tech jobs that companies actually hire for"
    },
    {
      icon: DollarSign,
      title: "Expensive Courses, No Support",
      description: "You've tried online courses but got stuck with no one to help – wasted ₦50K-₦200K"
    },
    {
      icon: Briefcase,
      title: "No Portfolio, No Job",
      description: 'Employers want "2 years experience" but how do you get experience without a first job?'
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold lg:text-4xl mb-4 px-2">
            Why Most People Stay Stuck in Low-Paying Jobs
          </h2>
          <div className="h-1 w-24 bg-secondary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid gap-6 sm:gap-8 md:grid-cols-3 mb-8 sm:mb-12">
          {problems.map((problem, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-colors shadow-card hover:shadow-premium">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="inline-flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-destructive/10 mb-4 sm:mb-6">
                  <problem.icon className="h-7 w-7 sm:h-8 sm:w-8 text-destructive" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3">{problem.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{problem.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Card className="border-l-4 border-l-primary bg-card shadow-card">
          <CardContent className="p-6 sm:p-8">
            <p className="text-base sm:text-lg italic text-muted-foreground mb-2">
              "I spent 2 years applying for jobs with my Economics degree. Nothing. After Techverve, I got 3 offers within a month."
            </p>
            <p className="text-sm sm:text-base font-semibold text-primary">
              — Chidi O., Software Developer at Andela
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProblemSection;
