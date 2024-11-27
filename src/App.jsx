import "./App.css";
import Header from "./Components/Header";
import HeroSection from "./Components/sections/hero";
import { useEffect, useState, useRef } from "react";

function App() {
  const [headerStyle, setHeaderStyle] = useState({
    backgroundColor: "bg-primary",
    textColor: "text-black",
  });

  const aboutSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = aboutSectionRef.current;

      if (!aboutSection) {
        console.warn("About section ref is not defined.");
        return;
      }

      const triggerPoint = aboutSection.getBoundingClientRect().top;

      if (triggerPoint < 35) {
        setHeaderStyle((prevStyle) => ({
          ...prevStyle,
          textColor: "text-white",
        }));
      } else {
        setHeaderStyle((prevStyle) => ({
          ...prevStyle,
          textColor: "text-black",
        }));
      }

      if (triggerPoint < 0) {
        setHeaderStyle((prevStyle) => ({
          ...prevStyle,
          backgroundColor: "bg-black",
        }));
      } else {
        setHeaderStyle((prevStyle) => ({
          ...prevStyle,
          backgroundColor: "bg-transparent",
        }));
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App scroll-smooth">
      <Header style={headerStyle} />
      <div id="top">
        <div className="overflow-visible relative h-content">
          <section
            id="home"
            className="h-dvh overflow-hidden bg-primary sticky top-0 z-2  w-full container mx-auto"
          >
            <HeroSection />
          </section>
          <section
            id="about"
            ref={aboutSectionRef}
            className="min-h-content bg-black text-white flex items-center flex-col justify-center relative z-2 pb-80 pt-20"
          >
            <h2>About Me</h2>
            <img
              src="/src/assets/profile-image.jpg"
              className=" h-5/6 max-w-lg rounded-2xl w-full border-8 border-primary "
            />
            <img
              src="/src/assets/profile-image.jpg"
              className=" h-5/6 max-w-lg rounded-2xl w-full border-8 border-primary "
            />
            <img
              src="/src/assets/profile-image.jpg"
              className=" h-5/6 max-w-lg rounded-2xl w-full border-8 border-primary "
            />
            <img
              src="/src/assets/profile-image.jpg"
              className=" h-5/6 max-w-lg rounded-2xl w-full border-8 border-primary "
            />
          </section>
        </div>
        <div>
          <section
            id="projects"
            className="min-h-content bg-black text-white flex items-center flex-col justify-center relative z-10 pb-80 pt-20"
          >
            <h2 className="p-4">My Projects</h2>
            <img
              src="/src/assets/profile-image.jpg"
              className=" h-5/6 max-w-lg rounded-2xl w-full border-8 border-primary "
            />
            <img
              src="/src/assets/profile-image.jpg"
              className=" h-5/6 max-w-lg rounded-2xl w-full border-8 border-primary "
            />
            <img
              src="/src/assets/profile-image.jpg"
              className=" h-5/6 max-w-lg rounded-2xl w-full border-8 border-primary "
            />
            <img
              src="/src/assets/profile-image.jpg"
              className=" h-5/6 max-w-lg rounded-2xl w-full border-8 border-primary "
            />
          </section>
          <section
            id="contact"
            className="min-h-content bg-primary text-white flex items-center justify-center flex-col absolute w-full sticky bottom-0 p-5 py-10 z-3"
          >
            <h2 className="p-20">Contact Me</h2>
            <img
              src="/src/assets/profile-image.jpg"
              className=" h-5/6 max-w-lg rounded-2xl w-full border-8 border-primary "
            />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
