function Header() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-primary z-10  p-4">
      <nav className="flex justify-around">
        <a href="#home" onClick={scrollToTop} className="hover:text-blue-400">
          Jonne
        </a>
        <a href="#about" className="hover:text-blue-400">
          About
        </a>
        <a href="#projects" className="hover:text-blue-400">
          Projects
        </a>
        <a href="#contact" className="hover:text-blue-400">
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Header;
