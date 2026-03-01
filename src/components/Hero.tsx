import { ArrowDown } from "lucide-react";
import personImage from "@/assets/image_of_person.png";

const Hero = () => {
  return (
    <section id="home" className="section pt-24 sm:pt-32 lg:pt-40">
      <div className="container-narrow">
        <div className="flex flex-col-reverse sm:flex-row sm:items-start sm:justify-between gap-8 sm:gap-12">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="line-accent" />
              <p className="label">Problem-Solver / Systems Builder</p>
            </div>
            
            <h1 className="mb-8">
              I build custom management systems that help small businesses replace spreadsheets with secure, reliable dashboards.
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
              I build software that solves real problems and keeps your operations running smoothly. 
              My focus is on simplicity, reliability, and making your business easier to manage.
            </p>
            
            <button 
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-3 text-foreground font-medium hover:text-warm transition-colors group"
            >
              <span>Request a Proposal</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>
          
          {/* Profile image styled like download.jpg layout */}
          <div className="flex-shrink-0">
            <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64">
              {/* circular outer frame like original design */}
              <div className="absolute inset-0 rounded-full bg-warm/10" />
              <div className="absolute inset-1 rounded-full bg-card shadow-md overflow-hidden">
                {/* inner decorative border, still circular */}
                <div className="absolute inset-0 m-2 border-4 border-warm rounded-full pointer-events-none" />
                  <img
                    src={personImage}
                    alt="Profile"
                    className="w-full h-full object-cover transform scale-x-[-1]"
                  />
                </div>
              <div className="absolute inset-0 rounded-full ring-1 ring-border" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
