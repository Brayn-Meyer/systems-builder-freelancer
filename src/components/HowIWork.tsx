const steps = [
  {
    title: "Understanding the problem",
    description: "I start by learning how your business currently works and where the bottlenecks are. This ensures we solve the right problem, not just what’s on paper."
  },
  {
    title: "Defining constraints",
    description: "I clarify what tools, timelines, and resources we have so the solution fits your operations perfectly."
  },
  {
    title: "Designing the system",
    description: "Before writing any code, I map how information flows, how users interact with the system, and potential failure points. This prevents headaches later."
  },
  {
    title: "Building incrementally",
    description: "I deliver working software in stages so you can see progress early and provide feedback along the way."
  },
  {
    title: "Validating outcomes",
    description: "Finally, I make sure the system actually improves your workflow, saves time, and reduces errors — so you can measure real results."
  }
];

const HowIWork = () => {
  return (
    <section id="howIWork" className="section">
      <div className="container-narrow">
        <div className="flex items-center gap-3 mb-10">
          <span className="section-number">02</span>
          <div className="divider flex-1" />
          <p className="label">How I Deliver Results</p>
        </div>
        
        <p className="text-muted-foreground mb-8 max-w-lg">
          I take a structured approach to building software that actually works for your business. 
          Every project has clear steps, so you get results without unnecessary complexity.
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
