const About = () => {
  return (
    <section id="about" className="section bg-card">
      <div className="container-narrow">
        <div className="flex items-center gap-3 mb-10">
          <span className="section-number">03</span>
          <div className="divider flex-1" />
          <p className="label">About</p>
        </div>
        
        <div className="space-y-6 max-w-xl">
          <p>
            I approach software as a tool for solving operational problems. 
            Most of my work involves building internal systems—the infrastructure 
            that helps organizations function smoothly behind the scenes.
          </p>
          
          <p>
            What draws me to this work is understanding how information flows 
            through an organization, where bottlenecks occur, and how thoughtful 
            software can reduce friction without adding complexity.
          </p>
          
          <p>
            I prefer working on problems where reliability matters more than novelty, 
            and where success is measured by what the system enables people to do—not 
            by how impressive it looks.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
