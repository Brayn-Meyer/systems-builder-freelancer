import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { getFeaturedProjects } from "@/data/projects";

const Projects = () => {
  const featuredProjects = getFeaturedProjects();

  return (
    <section id="projects" className="section border-t border-border bg-card">
      <div className="container-narrow">
        <div className="flex items-center gap-3 mb-12">
          <span className="section-number">01</span>
          <div className="divider flex-1" />
          <p className="label">Selected Projects</p>
        </div>
        
        <div className=" pb-6 border-b border-border">
          <Link 
            to="/projects" 
            className="inline-flex items-center gap-3 text-foreground font-medium hover:text-warm transition-colors group"
          >
            <span>View all projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <div>
          {featuredProjects.map((project, index) => (
            <ProjectCard 
              key={project.slug} 
              number={String(index + 1).padStart(2, '0')}
              {...project} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
