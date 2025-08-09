import logo from './logo.svg';
import './App.css';
import Hero from './Page/Hero';
import ScrollSVGLine from './Page/ScrollSVGLine';
import ProjectView from './Page/ProjectView';
import Features from './Page/Features';
import Screenshot from './Page/Screenshot';
import Stack from './Page/Stack';

function App() {
  return (
    <div className="App">
      <ScrollSVGLine />
      <Hero />
      <ProjectView />
      <Features />
      <Screenshot />
      <Stack />
    </div>
  );
}

export default App;
