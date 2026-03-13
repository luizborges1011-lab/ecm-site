import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoIcon from '../assets/logo-icon.png';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        setMobileMenuOpen(false);

        if (isHome) {
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // Se não estiver na home, navega para home com a âncora
            navigate(`/#${targetId}`);
            // Um pequeno delay para dar tempo do render antes do scroll
            setTimeout(() => {
                const element = document.getElementById(targetId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    };

    return (
        <header className={`navbar ${(isScrolled || !isHome) ? 'scrolled' : ''}`}>
            <div className="container nav-content">
                <Link to="/" className="logo">
                    <img src={logoIcon} alt="ECM Logo" className="logo-image" />
                    <div className="logo-text">
                        <strong>ECM</strong>
                        <span>SOLUÇÕES CONTÁBEIS</span>
                    </div>
                </Link>

                <nav className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
                    <a href="#inicio" onClick={(e) => handleNavClick(e, 'inicio')}>Início</a>
                    <a href="#servicos" onClick={(e) => handleNavClick(e, 'servicos')}>Serviços</a>
                    <a href="#inovacao" onClick={(e) => handleNavClick(e, 'inovacao')}>Inovação e Dados</a>
                    <Link to="/registro" className="highlight-link" onClick={() => setMobileMenuOpen(false)}>Ficha de Registro</Link>
                </nav>

                <button
                    className="mobile-menu-btn"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </header>
    );
};

export default Navbar;
