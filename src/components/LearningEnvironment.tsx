import studentsLearning from "@/assets/student-learning.jpg";
import teamCollaboration from "@/assets/team-collaboration.jpg";

const LearningEnvironment = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-muted to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold lg:text-4xl mb-4 px-2">
            World-Class Learning Environment
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
          Experience hands-on training in our modern physical facilities with expert instructors and collaborative peers or join and learn online with our professional courses and mentors always ready to guide
          </p>
          <div className="h-1 w-24 bg-secondary mx-auto rounded-full mt-4"></div>
        </div>
        
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 items-center max-w-6xl mx-auto">
          <div className="order-2 lg:order-1">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex gap-3 sm:gap-4">
                <div className="flex-shrink-0 h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg sm:text-xl">
                  ✓
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">Expert-Led Instruction</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">Learn from industry professionals with years of real-world experience in top tech companies</p>
                </div>
              </div>
              
              <div className="flex gap-3 sm:gap-4">
                <div className="flex-shrink-0 h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg sm:text-xl">
                  ✓
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">Modern Tech Facilities</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">24/7 electricity, high-speed WiFi (20+ Mbps), AC workspaces, and latest development tools</p>
                </div>
              </div>
              
              <div className="flex gap-3 sm:gap-4">
                <div className="flex-shrink-0 h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg sm:text-xl">
                  ✓
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">Collaborative Learning</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">Work on real projects with peers, participate in code reviews, and build your professional network</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <img 
              src={studentsLearning} 
              alt="Students learning in modern tech classroom" 
              className="rounded-2xl shadow-premium hover:scale-[1.02] transition-transform duration-300 w-full h-auto"
            />
          </div>
        </div>
        
        <div className="mt-12 sm:mt-16 px-4">
          <img 
            src={teamCollaboration} 
            alt="Team collaboration on tech projects" 
            className="rounded-2xl shadow-premium max-w-4xl mx-auto hover:scale-[1.02] transition-transform duration-300 w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default LearningEnvironment;
