import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#F8FAFC] font-sans text-[#334155]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-60 focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:text-[#062C78] focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#087CFA]"
      >
        Skip to content
      </a>
      <Navigation />
      <main id="main-content" className="mx-auto w-full min-w-0 max-w-6xl px-4 pb-10 sm:px-6 sm:pb-12 lg:px-8">
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
