import { Link } from "react-router-dom";
import { ArrowRight, Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  number: string;
  title: string;
  problem: string;
  techStack: string[];
  slug: string;
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectCard = ({ number, title, problem, techStack, slug, githubUrl, liveUrl }: ProjectCardProps) => {
  return (
    <Link to={`/project/${slug}`} className="project-card group">
      <div className="flex gap-4 sm:gap-6">
        <span className="section-number pt-1 hidden sm:block">{number}</span>
        
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-8">
            <div className="flex-1">
              <h3 className="mb-3 group-hover:text-warm transition-colors">
                {title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem}
              </p>
            </div>
            
            <div className="flex items-center gap-3 sm:flex-shrink-0 mt-2 sm:mt-0">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-1.5 rounded-md text-muted-foreground hover:text-warm hover:bg-accent transition-all"
                  aria-label={`View ${title} source code on GitHub`}
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-1.5 rounded-md text-muted-foreground hover:text-warm hover:bg-accent transition-all"
                  aria-label={`Visit ${title} live site`}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-warm group-hover:translate-x-0.5 transition-all" />
            </div>
          </div>
          
          <span className="tech-badge mt-4 block">
            {techStack.join(' · ')}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
