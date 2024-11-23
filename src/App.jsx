import "./App.css";
import Header from "./Components/Header";
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
      <div id="home">
        <div className="overflow-visible relative min-h-content">
          <section className="h-screen overflow-hidden bg-primary text-white flex items-center justify-center sticky top-0 z-2  w-full">
            <h1>Welcome to My Portfolio</h1>
          </section>
          <section
            id="about"
            ref={aboutSectionRef}
            className="h-screen bg-black text-white flex items-center justify-center relative z-2"
          >
            <h2>About Me</h2>
          </section>
        </div>
        <div>
          <section
            id="projects"
            className="min-h-screen bg-black text-white flex items-center justify-center relative z-10"
          >
            <h2 className="p-4">My Projects</h2>
          </section>
          <section
            id="contact"
            className="min-h-content bg-primary text-white flex items-center justify-center absolute width-full sticky bottom-0 p-5 py-10 z-3"
          >
            <h2 className="p-10">Contact Me</h2>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
