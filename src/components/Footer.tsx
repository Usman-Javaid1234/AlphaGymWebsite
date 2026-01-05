import { Crown, Dumbbell, Instagram, Facebook, Youtube, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <div className="relative">
                <Crown className="w-10 h-10 text-primary" />
                <Dumbbell className="w-5 h-5 text-primary absolute -bottom-1 left-1/2 -translate-x-1/2" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl text-primary leading-none">ALPHA ELITE</span>
                <span className="text-xs text-muted-foreground tracking-widest">FITNESS GYM</span>
              </div>
            </a>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Transform your body and elevate your mind at Alpha Elite Fitness Gym. 
              Premium training facilities in Islamabad.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/alpha.elite.gym"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl text-foreground mb-6">QUICK LINKS</h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Programs", "Trainers", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "")}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-display text-xl text-foreground mb-6">OPENING HOURS</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="text-primary">6AM - 11PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-primary">7AM - 10PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-primary">8AM - 8PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 pt-12 border-t border-border">
          <div className="flex items-center gap-2 text-muted-foreground mb-4">
            <MapPin className="w-5 h-5 text-primary" />
            <span>Alpha 2 Plaza, Business Square, Block C, Gullberg Greens, Islamabad</span>
          </div>
          <div className="w-full h-64 bg-card rounded-lg overflow-hidden border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.5!2d73.1!3d33.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM2JzAwLjAiTiA3M8KwMDYnMDAuMCJF!5e0!3m2!1sen!2s!4v1600000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Alpha Elite Fitness Gym Location"
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Alpha Elite Fitness Gym. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
