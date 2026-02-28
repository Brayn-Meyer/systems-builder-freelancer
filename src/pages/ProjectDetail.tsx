import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getProjectBySlug } from "@/data/projects";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : null;

  if (!project) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="section pt-28">
          <div className="container-narrow">
            <p>Project not found.</p>
            <Link to="/projects" className="link-primary">View all projects</Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="section pt-28">
        <article className="container-narrow">

          <header className="mb-12">
            <p className="label mb-4">Case Study</p>
            <h1 className="mb-4">{project.title}</h1>
            <div className="flex flex-wrap items-center gap-4">
              <span className="tech-badge">{project.techStack.join(' · ')}</span>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-warm transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>Source</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-warm transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Site</span>
                </a>
              )}
            </div>
          </header>

          <div className="space-y-12">
            <section>
              <h2 className="mb-4">Problem</h2>
              <p className="text-muted-foreground">{project.problem}</p>
            </section>

            <section>
              <h2 className="mb-4">Constraints</h2>
              <ul className="process-list">
                {project.constraints.map((constraint, i) => (
                  <li key={i}>{constraint}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="mb-4">System Design</h2>
              <p className="text-muted-foreground">{project.systemDesign}</p>
            </section>

            <section>
              <h2 className="mb-4">Implementation</h2>
              <ul className="process-list">
                {project.implementation.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="mb-4">Outcome</h2>
              <p className="text-muted-foreground">{project.outcome}</p>
            </section>

            <section>
              <h2 className="mb-4">Lessons Learned</h2>
              <ul className="process-list">
                {project.lessons.map((lesson, i) => (
                  <li key={i}>{lesson}</li>
                ))}
              </ul>
            </section>
          </div>

          <div className="mt-16 pt-8 border-t border-border">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Home
            </Link>
            <Link 
              to="/projects" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 ml-8"
            >
              <ArrowLeft className="w-4 h-4" />
              All projects
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
