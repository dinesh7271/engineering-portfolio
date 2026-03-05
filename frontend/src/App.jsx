import { useEffect } from 'react';
import './App.css';

import { usePortfolioData } from './hooks/usePortfolioData';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Footer from './components/Footer';

function Loader() {
  return (
    <div className="loader-screen">
      <div className="loader-spinner" />
      <p className="loader-text">Loading Portfolio...</p>
    </div>
  );
}

function ErrorScreen({ message }) {
  return (
    <div className="loader-screen">
      <p className="error-icon">⚠️</p>
      <p className="error-text">Failed to connect to backend</p>
      <p className="error-detail">{message}</p>
      <p className="error-hint">Make sure the Flask server is running on port 5000</p>
    </div>
  );
}

export default function App() {
  const { data, loading, error } = usePortfolioData();

  // IntersectionObserver for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.animate-in').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [data]);

  if (loading) return <Loader />;
  if (error) return <ErrorScreen message={error} />;

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero data={data.about} />
        <About data={data.about} />
        <Skills data={data.skills} />
        <Projects data={data.projects} />
        <Journey data={data.education} />
        <Contact data={data.contact} />
      </main>
      <Footer />
    </div>
  );
}
