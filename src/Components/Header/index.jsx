import props from "prop-types";

function Header({ style }) {
  const handleScroll = (sectionId) => {
    const section = document.querySelector(sectionId);

    if (!section) {
      console.warn(`Section with id ${sectionId} not found.`);
      return;
    }

    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    const sectionHeight = section.offsetHeight;

    let scrollPosition = sectionTop;

    // Handle "Contact" section behavior specifically
    if (sectionId === "#contact") {
      const viewportHeight = window.innerHeight;
      const extraOffset = sectionHeight + viewportHeight;
      scrollPosition += extraOffset;
    }

    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-20 p-4 ${style.backgroundColor} ${style.textColor}`}
    >
      <nav className="flex justify-around">
        <button
          onClick={() => handleScroll("#home")}
          className="hover:text-blue-400"
        >
          Jonne
        </button>
        <button
          onClick={() => handleScroll("#about")}
          className="hover:text-blue-400"
        >
          About
        </button>
        <button
          onClick={() => handleScroll("#projects")}
          className="hover:text-blue-400"
        >
          Projects
        </button>
        <button
          onClick={() => handleScroll("#contact")}
          className="hover:text-blue-400"
        >
          Contact
        </button>
      </nav>
    </header>
  );
}

Header.propTypes = {
  style: props.object,
};

export default Header;
