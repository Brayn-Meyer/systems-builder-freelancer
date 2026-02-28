import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Github, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllProjects } from "@/data/projects";

const ProjectsPage = () => {
  const projects = getAllProjects();

  return (
    <div className="min-h-screen">
      <Header />
      <main className="section pt-28">
        <div className="container-narrow">
          <div className="flex items-center gap-3 mb-6">
            <div className="line-accent" />
            <p className="label">All Work</p>
          </div>
          
          <h1 className="mb-4">Projects</h1>
          <p className="text-muted-foreground mb-12 max-w-lg">
            A complete index of systems and tools I've built. Each project 
            includes a detailed case study covering problem, constraints, 
            implementation, and outcomes.
          </p>

          <div className="border-t border-border">
            {projects.map((project, index) => (
              <Link 
                key={project.slug} 
                to={`/project/${project.slug}`} 
                className="project-card group"
              >
                <div className="flex gap-4 sm:gap-6">
                  <span className="section-number pt-1 hidden sm:block">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-8">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="group-hover:text-warm transition-colors">
                            {project.title}
                          </h3>
                          {project.featured && (
                            <span className="text-[10px] uppercase tracking-wider text-warm font-medium">
                              Featured
                            </span>
                          )}
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.problem}
                        </p>
                      </div>
                      
                      <div className="flex items-center gap-3 sm:flex-shrink-0 mt-2 sm:mt-0">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-1.5 rounded-md text-muted-foreground hover:text-warm hover:bg-accent transition-all"
                            aria-label={`View ${project.title} source code on GitHub`}
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-1.5 rounded-md text-muted-foreground hover:text-warm hover:bg-accent transition-all"
                            aria-label={`Visit ${project.title} live site`}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-warm group-hover:translate-x-0.5 transition-all" />
                      </div>
                    </div>
                    
                    <span className="tech-badge mt-4 block">
                      {project.techStack.join(' · ')}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mt-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
