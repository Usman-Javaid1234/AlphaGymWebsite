import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

const CTA = () => {
  return (
    <section id="contact" className="py-20 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-primary" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-primary" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - CTA Content */}
          <div>
            <span className="text-primary uppercase tracking-widest text-sm font-semibold mb-4 block">
              Ready to Start?
            </span>
            <h2 className="font-display text-5xl md:text-6xl text-foreground mb-6">
              BEGIN YOUR
              <br />
              <span className="text-gradient-gold">TRANSFORMATION</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed max-w-lg">
              Take the first step towards a stronger, healthier you. Scan our QR code 
              for quick registration or fill out the contact form.
            </p>

            {/* QR Code Placeholder */}
            <div className="bg-foreground p-4 rounded-lg inline-block mb-8">
              <div className="w-32 h-32 bg-background rounded flex items-center justify-center">
                <div className="text-center">
                  <div className="grid grid-cols-5 gap-1">
                    {Array.from({ length: 25 }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-5 h-5 ${Math.random() > 0.5 ? "bg-foreground" : "bg-transparent"}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground">Scan for Online Registration</p>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-background border border-border rounded-xl p-8">
            <h3 className="font-display text-3xl text-foreground mb-6">GET IN TOUCH</h3>
            <form className="space-y-4">
              <Input
                placeholder="Your Name"
                className="bg-card border-border focus:border-primary"
              />
              <Input
                type="email"
                placeholder="Email Address"
                className="bg-card border-border focus:border-primary"
              />
              <Input
                type="tel"
                placeholder="Phone Number"
                className="bg-card border-border focus:border-primary"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full bg-card border border-border rounded-md px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <Button variant="hero" className="w-full" size="lg">
                Send Message
              </Button>
            </form>

            {/* Contact Info */}
            <div className="mt-8 pt-8 border-t border-border space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span>+92 XXX XXXXXXX</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <span>info@alphaelitegym.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Alpha 2 Plaza, Block C, Gullberg Greens, Islamabad</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
