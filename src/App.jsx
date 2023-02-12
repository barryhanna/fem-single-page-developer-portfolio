import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NameProvider from './components/NameProvider';

function App() {
  return (
    <NameProvider>
      <div className="App flow">
        <Header />
        <main>
          <Hero />
          <Skills />
          <Projects />
        </main>
      </div>
      <div className="bg flow">
        <Contact />
        <Footer />
      </div>
    </NameProvider>
  );
}

export default App;
