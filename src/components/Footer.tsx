const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container-narrow flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()}
        </p>
        <p className="text-sm text-muted-foreground">
          Built with clarity in mind.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
