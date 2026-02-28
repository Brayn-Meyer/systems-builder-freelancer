import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";
  const navButtonClass = "w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors";
  const navIconClass = "w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-200 ease-in-out transform hover:scale-110";

  const handleHomeClick = () => {
    if (isHomePage) {
      document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleProjectsClick = () => {
    if (isHomePage) {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleContactClick = () => {
    if (isHomePage) {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleHowIWorkClick = () => {
    if (isHomePage) {
      document.getElementById('howIWork')?.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleAboutClick = () => {
    if (isHomePage) {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="container-narrow py-3 sm:py-4 flex items-center justify-between gap-3">
        <p className="font-medium text-sm sm:text-base whitespace-nowrap">
          <span className="sm:hidden">BCM - P</span>
          <span className="hidden sm:inline">Brayn C Meyer - Portfolio</span>
        </p>

        <nav className="flex items-center gap-2 sm:gap-4 md:gap-8 shrink-0">
          {isHomePage ? (
            <>
              <button
                onClick={handleHomeClick}
                className={navButtonClass}
                aria-label="Home"
              >
                <svg className={navIconClass} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" /></svg>
              </button>

              <button
                onClick={handleProjectsClick}
                className={navButtonClass}
                aria-label="Projects"
              >
                <svg className={navIconClass} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z" /></svg>
              </button>

              <button
                onClick={handleHowIWorkClick}
                className={navButtonClass}
                aria-label="How I Work"
              >
                <svg className={navIconClass} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h168q13-36 43.5-58t68.5-22q38 0 68.5 22t43.5 58h168q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm80-80h280v-80H280v80Zm0-160h400v-80H280v80Zm0-160h400v-80H280v80Zm221.5-198.5Q510-807 510-820t-8.5-21.5Q493-850 480-850t-21.5 8.5Q450-833 450-820t8.5 21.5Q467-790 480-790t21.5-8.5ZM200-200v-560 560Z" /></svg>
              </button>

              <button
                onClick={handleAboutClick}
                className={navButtonClass}
                aria-label="About"
              >
                <svg className={navIconClass} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M200-200v-560 179-19 400Zm80-240h221q2-22 10-42t20-38H280v80Zm0 160h157q17-20 39-32.5t46-20.5q-4-6-7-13t-5-14H280v80Zm0-320h400v-80H280v80Zm-80 480q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v258q-14-26-34-46t-46-33v-179H200v560h202q-1 6-1.5 12t-.5 12v56H200Zm409-229q-29-29-29-71t29-71q29-29 71-29t71 29q29 29 29 71t-29 71q-29 29-71 29t-71-29ZM480-120v-56q0-24 12.5-44.5T528-250q36-15 74.5-22.5T680-280q39 0 77.5 7.5T832-250q23 9 35.5 29.5T880-176v56H480Z" /></svg>
              </button>

              <button
                onClick={handleContactClick}
                className={navButtonClass}
                aria-label="Contact"
              >
                <svg className={navIconClass} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" /></svg>
              </button>
            </>
          ) :
            (
              <button
                onClick={() => navigate("/")}
                className={navButtonClass}
                aria-label="Home"
              >
                <svg className={navIconClass} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" /></svg>
              </button>
            )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
