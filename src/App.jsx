import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './styles/index.css';
import { useTheme } from './hooks/useTheme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Vision from './components/Vision';
import WhyUs from './components/WhyUs';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import RefundPolicy from './components/RefundPolicy';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import BlogSection from './components/BlogSection';
import SEO from './components/SEO';

function HomePage() {
  return (
    <>
      <SEO />
      <Hero />
      <About />
      <Products />
      <Vision />
      <WhyUs />
      <Team />
      <BlogSection />
      <Contact />
    </>
  );
}

function Layout() {
  const location = useLocation();
  const isLegal = ['/privacy', '/terms', '/refund'].includes(location.pathname);

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/refund" element={<RefundPolicy />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  // Initialises data-theme on <html> and syncs it — Navbar also calls this but
  // having it at root guarantees it runs before the first paint.
  useTheme();

  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
