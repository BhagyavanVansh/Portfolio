
import './App.css';
import Slidebar from './components/slidebar/Slidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Education from './components/Education.jsx/Education';
import Project from './components/Project/Project';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Slidebar/>
      <main className="main">
        <Home/>
        <About/>
        <Skills/>
        <Education/>
        <Project/>
        <Contact/>
        <Footer/>
      </main>
    </>
  );
}

export default App;
