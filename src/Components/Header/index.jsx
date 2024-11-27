import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function Header({ style }) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 10;

      let activeId = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        // Add extra offset for the "contact" section
        let sectionBottom = sectionTop + sectionHeight;
        if (section.id === "contact") {
          sectionBottom += 100; // Add offset to account for sticky behavior
        }

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          activeId = section.id;
        }
      });

      setActiveSection(activeId);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
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
      const extraOffset = sectionHeight + viewportHeight + 1000;
      scrollPosition += extraOffset;
    }

    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-20 p-4 container mx-auto ${style.backgroundColor} ${style.textColor}`}
    >
      <nav className="flex justify-around">
        <button
          onClick={() => scrollToSection("#top")}
          className={`hover:underline decoration-1 ${
            activeSection === "home" ? "underline decoration-2" : ""
          }`}
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection("#about")}
          className={`hover:underline decoration-1 ${
            activeSection === "about" ? "underline decoration-2" : ""
          }`}
        >
          About
        </button>
        <button
          onClick={() => scrollToSection("#projects")}
          className={`hover:underline decoration-1 ${
            activeSection === "projects" ? "underline decoration-2" : ""
          }`}
        >
          Projects
        </button>
        <button
          onClick={() => scrollToSection("#contact")}
          className={`hover:underline decoration-1 ${
            activeSection === "contact" ? "underline decoration-2" : ""
          }`}
        >
          Contact
        </button>
      </nav>
    </header>
  );
}

Header.propTypes = {
  style: PropTypes.object,
};

export default Header;
