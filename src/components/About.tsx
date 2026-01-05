import { Button } from "@/components/ui/button";
import { Trophy, Users, Clock, Star } from "lucide-react";

const stats = [
  { icon: Trophy, value: "5+", label: "Years Experience" },
  { icon: Users, value: "1700+", label: "Happy Members" },
  { icon: Clock, value: "24/7", label: "Access Available" },
  { icon: Star, value: "4.9", label: "Rating" },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="text-primary uppercase tracking-widest text-sm font-semibold mb-4 block">
              About Us
            </span>
            <h2 className="font-display text-5xl md:text-6xl text-foreground mb-6">
              HARD WORK PAYS OFF
              <br />
              <span className="text-gradient-gold">SEE THE CHANGE</span>
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              At Alpha Elite Fitness Gym, we believe in transforming lives through fitness. 
              Located in the heart of Gullberg Greens, Islamabad, we provide a premium training 
              environment equipped with world-class facilities and expert trainers.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Whether you're a beginner starting your fitness journey or an experienced athlete 
              pushing your limits, our diverse range of programs caters to everyone. From gym 
              training to mixed martial arts, we've got you covered.
            </p>
            <Button variant="hero" size="lg">
              Learn More About Us
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-background border border-border rounded-lg p-6 text-center card-hover"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="font-display text-4xl text-gradient-gold mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
