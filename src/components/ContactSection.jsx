import { Mail, Phone, MapPin } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        {/* Description */}
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        {/* Contact Items - HORIZONTAL */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Email */}
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-full bg-primary/10">
              <Mail className="h-6 w-6 text-primary" />
            </div>

            <div className="flex flex-col">
              <h4 className="font-medium">Email</h4>
              <a
                href="mailto:utsavpandit231@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                utsavpandit231@gmail.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-full bg-primary/10">
              <Phone className="h-6 w-6 text-primary" />
            </div>

            <div className="flex flex-col">
              <h4 className="font-medium">Phone</h4>
              <a
                href="tel:+918972243XXX"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                +91 8972243XXX
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-full bg-primary/10">
              <MapPin className="h-6 w-6 text-primary" />
            </div>

            <div className="flex flex-col">
              <h4 className="font-medium">Location</h4>
              <a
                href="https://www.google.com/maps?q=Katwa,Purba+Bardhaman"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Katwa, Purba Bardhaman
              </a>
            </div>
          </div>


          

          

        </div>

        {/* Divider */}
<div className="flex items-center gap-4 my-10">
  <div className="flex-1 border-t border-border" />
  <span className="text-sm text-muted-foreground">Follow me on</span>
  <div className="flex-1 border-t border-border" />
</div>

{/* Social Media Links */}
<div className="flex items-center justify-center gap-4">

  {/* LinkedIn */}
  <a href="https://www.linkedin.com/in/utsav-pandit-1369061b1" target="_blank" rel="noopener noreferrer"
    className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-muted-foreground hover:text-[#0077B5] transition-colors duration-200">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
    <span className="text-sm font-medium">LinkedIn</span>
  </a>

  {/* Instagram */}
  <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer"
    className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-muted-foreground hover:text-[#E1306C] transition-colors duration-200">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
    <span className="text-sm font-medium">Instagram</span>
  </a>

  {/* X */}
  <a href="https://x.com/your-profile" target="_blank" rel="noopener noreferrer"
    className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-muted-foreground hover:text-foreground transition-colors duration-200">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
    <span className="text-sm font-medium">X</span>
  </a>

</div>

      </div>
    </section>
  );
};