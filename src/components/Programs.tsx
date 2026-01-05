import { Button } from "@/components/ui/button";
import { Users, QrCode, UserPlus, ChevronRight } from "lucide-react";

const programs = [
  {
    icon: Users,
    title: "Youth Training Programs",
    tagline: "Building Young Warriors, Future Champs",
    description: "Specialized training programs designed for young athletes. Build strength, discipline, and confidence from an early age.",
    features: ["Kids Karate Classes", "Youth Fitness", "Character Building"],
  },
  {
    icon: UserPlus,
    title: "Walk-In Customers",
    tagline: "More Comfortable, Faster & Environmentally Friendly",
    description: "No commitment needed. Walk in anytime and experience our premium facilities with flexible day pass options.",
    features: ["Day Passes Available", "No Long-Term Commitment", "Full Facility Access"],
  },
  {
    icon: QrCode,
    title: "Online Registration",
    tagline: "Quick & Easy Digital Signup",
    description: "Register online and skip the paperwork. Scan our QR code or fill out the digital form to get started instantly.",
    features: ["Instant Registration", "Digital Membership", "Easy Payment Options"],
  },
];

const Programs = () => {
  return (
    <section id="programs" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary uppercase tracking-widest text-sm font-semibold mb-4 block">
            Programs
          </span>
          <h2 className="font-display text-5xl md:text-6xl text-foreground mb-4">
            ELEVATE YOUR <span className="text-gradient-gold">FITNESS</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from our range of programs tailored for every fitness enthusiast
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={program.title}
              className="group bg-card border border-border rounded-xl p-8 card-hover relative overflow-hidden"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <program.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-3xl text-foreground mb-2">{program.title}</h3>
              <p className="text-primary text-sm font-semibold mb-4 uppercase tracking-wider">
                {program.tagline}
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">{program.description}</p>

              {/* Features */}
              <ul className="space-y-2 mb-8">
                {program.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ChevronRight className="w-4 h-4 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                Learn More
              </Button>

              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="section-divider mt-20" />
      </div>
    </section>
  );
};

export default Programs;
