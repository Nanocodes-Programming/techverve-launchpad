import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "I don't have a laptop",
      answer: "We provide FREE laptop rental for the duration of the program. You can focus on learning while we take care of the equipment."
    },
    {
      question: "I'm not good at math/computers",
      answer: "92% of our students had zero tech background. We start from the very basics and guide you step by step. Our mentors ensure no one gets left behind."
    },
    {
      question: "What if I can't get a job?",
      answer: "We provide job search support until you're placed, and we have 240+ hiring partners actively looking for talent. Our 89% placement rate speaks for itself."
    },
    {
      question: "Can I learn while working?",
      answer: "Yes! Evening & weekend classes are available. 78% of our students are working professionals who successfully balanced work and learning."
    },
    {
      question: "What makes Techverve different from online courses?",
      answer: "Unlike pre-recorded courses, you get 1-on-1 mentorship, real project experience, guaranteed internships, and a physical learning space with 24/7 electricity and fast WiFi."
    },
    {
      question: "How soon can I start earning after graduation?",
      answer: "Most students secure internships within 1 month of completing the program, with 78% converting to full-time roles earning ₦350K-₦800K/month."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold lg:text-4xl mb-4 px-2">
              Frequently Asked Questions
            </h2>
            <div className="h-1 w-24 bg-secondary mx-auto rounded-full"></div>
          </div>
          
          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-2 rounded-xl bg-card shadow-card hover:shadow-premium transition-all px-4 sm:px-6"
              >
                <AccordionTrigger className="text-left text-sm sm:text-base font-semibold hover:text-primary">
                  ❓ {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-muted-foreground pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
