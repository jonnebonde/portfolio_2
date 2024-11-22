import "./App.css";
import Header from "./components/Header";

// Fortsette å fikle med layout..

function App() {
  return (
    <div className="App">
      <Header />
      <div className="">
        <section
          id="home"
          className="min-h-screen bg-primary text-white flex items-center justify-center sticky top-0 z-2  w-full"
        >
          <h1>Welcome to My Portfolio</h1>
        </section>
        <section
          id="about"
          className="min-h-screen bg-black text-white flex items-center justify-center relative z-3"
        >
          <h2>About Me</h2>
        </section>
        <section
          id="projects"
          className="min-h-screen bg-black text-white flex items-center justify-center relative z-3"
        >
          <h2>My Projects</h2>
        </section>
        <section
          id="contact"
          className="min-h-screen bg-primary text-white flex items-center justify-center relative bottom-0 z-1"
        >
          <h2>Contact Me</h2>
        </section>
      </div>
    </div>
  );
}

export default App;
