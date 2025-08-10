import logo from './logo.svg';
import './App.css';
import Hero from './Page/Hero';
import ScrollSVGLine from './Page/ScrollSVGLine';
import ProjectView from './Page/ProjectView';
import Features from './Page/Features';
import Screenshot from './Page/Screenshot';
import Stack from './Page/Stack';
import Learning from './Page/Learning';
import Footer from './Page/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <ScrollSVGLine />
      <Navbar />
      <Hero />
      <ProjectView />
      <Features />
      <Screenshot />
      <Stack />
      <Learning />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
