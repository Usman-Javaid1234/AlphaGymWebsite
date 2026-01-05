import { Dumbbell, Zap, Shield, Clock, Wifi, Droplets } from "lucide-react";

const features = [
  { icon: Dumbbell, title: "Premium Equipment", description: "World-class gym machines and free weights" },
  { icon: Zap, title: "High-Intensity Training", description: "Cardio zones and HIIT areas" },
  { icon: Shield, title: "Safe Environment", description: "Clean, sanitized, and secure facility" },
  { icon: Clock, title: "Flexible Hours", description: "Extended hours for your convenience" },
  { icon: Wifi, title: "Free WiFi", description: "Stay connected during workouts" },
  { icon: Droplets, title: "Shower Facilities", description: "Modern locker rooms and showers" },
];

const Features = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary uppercase tracking-widest text-sm font-semibold mb-4 block">
            Facilities
          </span>
          <h2 className="font-display text-5xl md:text-6xl text-foreground mb-4">
            WORLD-CLASS <span className="text-gradient-gold">AMENITIES</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Train in comfort with our premium facilities designed for your success
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-background border border-border rounded-lg p-6 text-center card-hover group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg text-foreground mb-2">{feature.title}</h3>
              <p className="text-xs text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
