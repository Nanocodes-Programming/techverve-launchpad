import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Palette, Database, Coffee } from "lucide-react";
import { scrollToHeroForm } from "@/lib/utils";

const CoursesSection = () => {
  const courses = [
    {
      icon: Code2,
      title: "Full-Stack Software Development",
      duration: "5-6 months",
      tools: "React, Node.js, MongoDB, Git",
      outcome: "Build & deploy 6 real apps",
      salary: "₦400K-₦1.2M/month",
      price: "₦30,000",
      access: "Lifetime Access",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      duration: "4 months",
      tools: "Figma, Adobe XD, Prototyping",
      outcome: "Design 8 professional projects",
      salary: "₦300K-₦800K/month",
      price: "₦30,000",
      access: "Lifetime Access",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Database,
      title: "Python Development & Data Science",
      duration: "4-5 months",
      tools: "Python, Django, Pandas, ML basics",
      outcome: "5 data projects + automation tools",
      salary: "₦350K-₦900K/month",
      price: "₦30,000",
      access: "Lifetime Access",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Coffee,
      title: "Java Enterprise Development",
      duration: "5 months",
      tools: "Java, Spring Boot, APIs",
      outcome: "Build enterprise-level apps",
      salary: "₦450K-₦1M/month",
      price: "₦30,000",
      access: "Lifetime Access",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section id="courses" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold lg:text-4xl mb-4 px-2">
            Choose Your Path to ₦350K-₦800K/Month Income
          </h2>
          <div className="h-1 w-24 bg-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {courses.map((course, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-all shadow-card hover:shadow-premium overflow-hidden group">
              <div className={`h-2 bg-gradient-to-r ${course.color}`}></div>

              <CardHeader>
                <div className="mb-4 inline-flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <course.icon className="h-7 w-7 sm:h-8 sm:w-8" />
                </div>
                <CardTitle className="text-lg sm:text-xl mb-3">{course.title}</CardTitle>
                <Badge variant="secondary" className="w-fit text-xs sm:text-sm">{course.duration}</Badge>
              </CardHeader>

              <CardContent className="space-y-3 sm:space-y-4">
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-muted-foreground mb-1">Tools:</p>
                  <p className="text-xs sm:text-sm">{course.tools}</p>
                </div>

                <div>
                  <p className="text-xs sm:text-sm font-semibold text-muted-foreground mb-1">Outcome:</p>
                  <p className="text-xs sm:text-sm">{course.outcome}</p>
                </div>

                <div className="pt-3 sm:pt-4 border-t">
                  <p className="text-xs sm:text-sm font-semibold text-muted-foreground mb-1">Salary Range:</p>
                  <p className="text-base sm:text-lg font-bold text-primary">{course.salary}</p>
                </div>

                <div className="space-y-2 pt-3 sm:pt-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-bold">{course.price}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground">and get {course.access}</p>
                </div>

                <a href="#hero-form" onClick={scrollToHeroForm} className="block">
                  <Button className="w-full gradient-cta hover:opacity-90 font-semibold text-sm sm:text-base">
                    Enroll Now →
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <a href="#hero-form" onClick={scrollToHeroForm} className="block">
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-primary hover:bg-primary hover:text-primary-foreground font-semibold text-sm sm:text-base px-4 sm:px-6">
              📞 BOOK MY FREE CONSULTATION NOW
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
