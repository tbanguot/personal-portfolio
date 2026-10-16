import ThemeProvider from './context/ThemeProvider';
import Navbar from './components/layout/Navbar';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] antialiased transition-colors duration-200">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:border focus:border-[var(--border-color)] focus:bg-[var(--bg-surface)] focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-[var(--text-primary)] focus:shadow-md"
        >
          Skip to content
        </a>

        <Navbar />

        <main id="main-content" tabIndex={-1}>
          <Hero />
          <Projects />
          <Skills />
          <Experience />
          <About />
          <Contact />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
