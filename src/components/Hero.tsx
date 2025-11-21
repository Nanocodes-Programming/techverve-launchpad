import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import heroImage from "@/assets/hero-tech-professionals.jpg";
import { useState, useEffect, useRef } from "react";

const Hero = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    full_name: "",
    phone: "",
    email: "",
    current_situation: "",
    interest: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#hero-form" && formRef.current && firstInputRef.current) {
        // Smooth scroll to form
        formRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
        
        // Focus first input after scroll completes
        setTimeout(() => {
          firstInputRef.current?.focus();
        }, 500);
      }
    };

    // Handle initial hash
    if (window.location.hash === "#hero-form") {
      handleHashChange();
    }

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    // Validate required fields
    if (!formData.full_name || !formData.phone || !formData.email || !formData.current_situation || !formData.interest) {
      setErrorMessage("Please fill in all required fields");
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage("Please enter a valid email address");
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    try {
      const payload = formData;
      await fetch(import.meta.env.VITE_GOOGLE_APP_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Always treat as success when no exception occurs
      setSubmitStatus("success");

      // Reset form
      setFormData({
        full_name: "",
        phone: "",
        email: "",
        current_situation: "",
        interest: "",
      });

      // Auto-hide success message
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);

    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "An error occurred. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90 py-20 lg:py-32">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnpNMTIgMThjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZ6bTAgMTJjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZ6bTAgMTJjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZ6IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuMDUiLz48L2c+PC9zdmc+')] opacity-20"></div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-white">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground">
                🚀 Transform Your Career in 2024
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold leading-tight lg:text-5xl xl:text-6xl">
              Stuck in a Dead-End Job?{" "}
              <span className="text-secondary">Learn Tech Skills</span> That Pay ₦6M/month
            </h1>

            <p className="text-base sm:text-lg text-white/90 lg:text-xl">
              Master in-demand skills like Software Development, UI/UX Design & Python in 4-6 months with hands-on projects, free mentorship, and guaranteed internship opportunities. No prior experience needed.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <a href="tel:+2349159521960" className="w-full sm:w-auto">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl transition-all">
                  <span className="hidden sm:inline">📞 </span>Call Now: +234 915 952 1960
                </Button>
              </a>
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-white bg-white/10 text-white hover:bg-white hover:text-primary text-sm sm:text-base font-semibold backdrop-blur-sm">
                Learn More
              </Button>
            </div>

            <img
              src={heroImage}
              alt="Nigerian tech professionals working together"
              className="rounded-2xl shadow-2xl lg:hidden w-full h-auto"
            />
          </div>

          {/* Right Form */}
          <div className="relative">
            <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-premium lg:p-10">
              <div className="mb-6 text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-primary lg:text-3xl">
                  🚀 Book FREE Career Strategy Session
                </h3>
                <div className="mt-2 h-1 w-20 bg-secondary mx-auto rounded-full"></div>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4" id="hero-form">
                <div>
                  <Input
                    ref={firstInputRef}
                    type="text"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleInputChange}
                    placeholder="Full Name*"
                    className="h-12 border-2 text-base"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone (WhatsApp)*"
                    className="h-12 border-2 text-base"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email*"
                    className="h-12 border-2 text-base"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <Select
                    value={formData.current_situation}
                    onValueChange={(value) => handleSelectChange("current_situation", value)}
                    disabled={isSubmitting}
                  >
                    <SelectTrigger className="h-12 border-2 text-base">
                      <SelectValue placeholder="Current Situation*" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="student">Student</SelectItem>
                      <SelectItem value="graduate">Fresh Graduate</SelectItem>
                      <SelectItem value="changer">Career Changer</SelectItem>
                      <SelectItem value="unemployed">Unemployed</SelectItem>
                      <SelectItem value="employed">Employed but unsatisfied</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Select
                    value={formData.interest}
                    onValueChange={(value) => handleSelectChange("interest", value)}
                    disabled={isSubmitting}
                  >
                    <SelectTrigger className="h-12 border-2 text-base">
                      <SelectValue placeholder="Interest*" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="software">Software Development</SelectItem>
                      <SelectItem value="uiux">UI/UX Design</SelectItem>
                      <SelectItem value="python">Python Development</SelectItem>
                      <SelectItem value="java">Java Development</SelectItem>
                      <SelectItem value="full">Full Package</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {submitStatus === "success" && (
                  <div className="flex items-center gap-2 rounded-lg bg-green-50 p-3 text-sm text-green-700 border border-green-200">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                    <span>Form submitted successfully! We'll contact you soon.</span>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="flex items-center gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-700 border border-red-200">
                    <AlertCircle className="h-4 w-4 flex-shrink-0" />
                    <span>{errorMessage || "An error occurred. Please try again."}</span>
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full h-12 sm:h-14 text-sm sm:text-base lg:text-lg font-bold gradient-cta hover:opacity-90 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "GET MY FREE SESSION NOW →"}
                </Button>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>Today at 4PM</span>
                  </div>
                  <span className="hidden sm:inline">|</span>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>Tomorrow at 10AM</span>
                  </div>
                </div>
              </form>
            </div>

            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-secondary opacity-20 blur-2xl lg:-bottom-8 lg:-right-8"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
