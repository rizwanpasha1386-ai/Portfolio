import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Learning from './components/Learning';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="bg-navy-900 text-white min-h-screen">
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: { background: '#111C30', color: '#fff', border: '1px solid #213050' },
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Learning />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
