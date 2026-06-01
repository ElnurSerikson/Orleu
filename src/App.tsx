import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Guests from './pages/Guests';
import Partnership from './pages/Partnership';
import About from './pages/About';
import Contacts from './pages/Contacts';

export default function App() {
  return (
    <div className="flex min-h-full flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guests" element={<Guests />} />
          <Route path="/partnership" element={<Partnership />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
