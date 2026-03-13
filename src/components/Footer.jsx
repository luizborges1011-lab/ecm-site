import { MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoIcon from '../assets/logo-icon.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-brand">
                    <div className="logo footer-logo">
                        <img src={logoIcon} alt="ECM Logo" className="logo-image" />
                        <div className="logo-text">
                            <strong>ECM</strong>
                        </div>
                    </div>
                    <p className="footer-desc">
                        Mais que uma contabilidade, um parceiro no crescimento da sua empresa, focando em tecnologia, automação e excelência.
                    </p>
                </div>

                <div className="footer-contact">
                    <h4 className="footer-title">Contato</h4>
                    <ul className="contact-list">
                        <li>
                            <MapPin size={18} className="contact-icon" />
                            <span>Rua João Pessoa, 177<br />Francisco Beltrão - PR</span>
                        </li>
                        <li>
                            <Phone size={18} className="contact-icon" />
                            <span>(46) 3523-2126</span>
                        </li>
                        <li>
                            <Mail size={18} className="contact-icon" />
                            <span>contato@escritoriomadruga.com.br</span>
                        </li>
                    </ul>
                </div>

                <div className="footer-links">
                    <h4 className="footer-title">Acesso Rápido</h4>
                    <ul className="links-list">
                        <li><a href="#inicio">Início</a></li>
                        <li><a href="#servicos">Nossos Serviços</a></li>
                        <li><a href="#inovacao">Projetos de Automação</a></li>
                        <li><Link to="/registro">Ficha de Registro (Área do Cliente)</Link></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} ECM Soluções Contábeis. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
