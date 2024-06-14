import Navbar from './Components/Navbar';
import AboutMe from './Screens/AboutMe';
import Certifications from './Screens/Certifications';
import Contact from './Screens/Contact';
import Home from './Screens/Home';
import Skills from './Screens/Skills';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <AboutMe />
      <Skills />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;
