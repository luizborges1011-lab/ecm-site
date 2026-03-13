import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import RegistrationPage from './pages/RegistrationPage';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registro" element={<RegistrationPage />} />
        </Routes>
      </main>
      <WhatsAppButton />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
