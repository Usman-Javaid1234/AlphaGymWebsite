import { Button } from "@/components/ui/button";
import { MapPin, ChevronDown } from "lucide-react";
import heroImage from "../assets/hero-gym.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Alpha Elite Fitness Gym Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary/80 backdrop-blur-sm px-4 py-2 rounded-full mb-8 animate-fade-up">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Alpha 2 Plaza, Gullberg Greens, Islamabad</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-foreground mb-4 animate-fade-up delay-100">
            <span className="text-gradient-gold">ALPHA ELITE</span>
            <br />
            FITNESS GYM
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 animate-fade-up delay-200 tracking-wide">
            Transform Your Body. Elevate Your Mind.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
            <Button variant="hero" size="xl">
              Start Your Journey
            </Button>
            <Button variant="heroOutline" size="xl">
              View Membership Plans
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-primary" />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
