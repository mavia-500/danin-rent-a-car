import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <span className="text-2xl font-bold text-primary">CLASSIC</span>
              <span className="text-lg font-semibold ml-1">MOTORS</span>
              <p className="text-xs text-muted-foreground tracking-widest">RENT A CAR</p>
            </div>
            <p className="text-secondary-foreground/70 mb-6">
              Your trusted partner for reliable car rental services across Pakistan. 
              We provide safe, comfortable, and affordable travel solutions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-dark-light rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-dark-light rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Our Services', 'Available Cars', 'FAQs', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-secondary-foreground/70 hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {['Self Drive Rental', 'Car with Driver', 'Airport Transfer', 'Wedding Cars', 'Corporate Rental'].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-secondary-foreground/70">
                  Islamabad, Pakistan
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+923001234567" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  +92 300 1234567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:info@classicmotors.com" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  info@classicmotors.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-dark-lighter">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-secondary-foreground/50 text-sm">
            © {new Date().getFullYear()} Classic Motors & Rent A Car. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
