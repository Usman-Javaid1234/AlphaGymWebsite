import { Dumbbell, Swords, Heart, UserCheck } from "lucide-react";

const services = [
  {
    icon: Dumbbell,
    title: "Gym & Fitness Training",
    description: "State-of-the-art equipment and personalized workout programs for all fitness levels.",
  },
  {
    icon: Swords,
    title: "Mixed Martial Arts",
    description: "Learn self-defense and combat sports from experienced MMA instructors.",
  },
  {
    icon: Heart,
    title: "Cardio Programs",
    description: "High-intensity cardio sessions to boost your endurance and burn calories effectively.",
  },
  {
    icon: UserCheck,
    title: "Personal Training",
    description: "One-on-one coaching tailored to your specific goals and fitness journey.",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl text-foreground mb-4">
            OUR <span className="text-gradient-gold">SERVICES</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to achieve your fitness goals under one roof
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card border border-border rounded-lg p-8 card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="section-divider mt-20" />
      </div>
    </section>
  );
};

export default Services;
