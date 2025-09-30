import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Intro from './components/Intro';
import ChooseUs from './components/ChooseUs';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import Services from './components/Services';
import Skills from './components/Skills';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import ServicesPage from './pages/ServicesPage';
import BlogPage from './pages/BlogPage';

// Home Page Component
const HomePage = () => (
  <>
    <Hero />
    <About />
    <Intro />
    <ChooseUs />
    <Services />
    <FAQ />
    <Blog />
    <Skills />
  </>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
