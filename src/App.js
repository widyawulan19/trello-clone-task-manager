import logo from './logo.svg';
import './App.css';
import Hero from './Page/Hero';
import ScrollSVGLine from './Page/ScrollSVGLine';
import ProjectView from './Page/ProjectView';
import Features from './Page/Features';

function App() {
  return (
    <div className="App">
      <ScrollSVGLine />
      <Hero />
      <ProjectView />
      <Features />
    </div>
  );
}

export default App;
