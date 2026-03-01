import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section border-t border-border">
      <div className="container-narrow">
        <div className="flex items-center gap-3 mb-10">
          <span className="section-number">04</span>
          <div className="divider flex-1" />
          <p className="label">Let’s Build Your Solution</p>
        </div>
        
        <p className="text-muted-foreground mb-2 max-w-md">
          Need a dashboard or internal system that actually works?
        </p>
        <p className="text-muted-foreground mb-2 max-w-md">
          I help small businesses replace spreadsheets and manual processes with reliable tools.
        </p>

        <br/>
        
        <p className="text-muted-foreground mb-8 max-w-md text-sm">
          Get in touch via email to schedule a consultation.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
          <a 
            href="mailto:brayncmeyer@gmail.com" 
            className="inline-flex items-center gap-2 link-subtle"
          >
            <Mail className="w-4 h-4" />
            brayncmeyer@gmail.com
          </a>
          
          {/* <a 
            href="https://github.com/brayn-meyer" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 link-subtle"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
          
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 link-subtle"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
