const steps = [
  {
    title: "Understanding the problem",
    description: "Clarifying what actually needs to be solved, not just what's been requested."
  },
  {
    title: "Defining constraints",
    description: "Identifying technical, organizational, and time boundaries that shape the solution."
  },
  {
    title: "Designing the system",
    description: "Mapping data flows, interfaces, and failure modes before writing code."
  },
  {
    title: "Building incrementally",
    description: "Delivering working software in stages, validating assumptions early."
  },
  {
    title: "Validating outcomes",
    description: "Measuring whether the system solves the original problem effectively."
  }
];

const HowIWork = () => {
  return (
    <section id="howIWork" className="section">
      <div className="container-narrow">
        <div className="flex items-center gap-3 mb-10">
          <span className="section-number">02</span>
          <div className="divider flex-1" />
          <p className="label">How I Work</p>
        </div>
        
        <p className="text-muted-foreground mb-8 max-w-lg">
          I follow a structured approach to problem-solving. Each project moves through 
          these phases, though the boundaries are often fluid.
        </p>
        
        <ul className="process-list">
          {steps.map((step, index) => (
            <li key={index}>
              <div>
                <span className="font-medium">{step.title}</span>
                <span className="text-muted-foreground"> — {step.description}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HowIWork;
