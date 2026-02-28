import { ArrowDown } from "lucide-react";
import workspaceImage from "@/assets/workspace.jpg";

const Hero = () => {
  return (
    <section id="home" className="section pt-24 sm:pt-32 lg:pt-40">
      <div className="container-narrow">
        <div className="flex flex-col-reverse sm:flex-row sm:items-start sm:justify-between gap-10 sm:gap-12">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="line-accent" />
              <p className="label">Problem-Solver / Systems Builder</p>
            </div>
            
            <h1 className="mb-8">
              I build internal tools and operational systems that help teams work more efficiently.
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
              I'm focused on solving real problems with reliable, maintainable software. 
              My work is about reducing complexity and creating clarity—building the 
              infrastructure that helps organizations function smoothly.
            </p>
            
            <button 
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-3 text-foreground font-medium hover:text-warm transition-colors group"
            >
              <span>Contact Me</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>
          
          {/* Profile image with soft circular frame */}
          <div className="flex-shrink-0">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40">
              <div className="absolute inset-0 rounded-full bg-warm/10" />
              <div className="absolute inset-1 rounded-full bg-card shadow-sm overflow-hidden">
                <img 
                  src={workspaceImage} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
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
