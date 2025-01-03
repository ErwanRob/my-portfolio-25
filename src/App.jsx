import ParticlesComponent from "./components/ParticlesComponent";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className="App">
      <div className="particles-wrapper">
        <ParticlesComponent />
      </div>
      <div className="content-wrapper">
        <Hero />
      </div>
    </div>
  );
}

export default App;
