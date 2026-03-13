import { ArrowRight, ChevronRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="inicio" className="hero dark-section">
            <div className="hero-bg-graphic">
                <svg viewBox="0 0 550 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="200" cy="200" r="150" stroke="rgba(255,255,255,0.04)" strokeWidth="12" />
                    <path d="M 350 50 L 500 200 L 350 350 L 200 200 Z" stroke="rgba(255,255,255,0.04)" strokeWidth="12" strokeLinejoin="round" />
                </svg>
            </div>
            <div className="container hero-content">
                <div className="hero-text-area animate-fade-in-up">
                    <div className="badge">
                        <span className="dot"></span> Contabilidade Inteligente
                    </div>

                    <h1 className="hero-title">
                        Mais que uma contabilidade, um <span className="highlight">parceiro no crescimento</span>.
                    </h1>

                    <p className="hero-desc">
                        Unimos 25 anos de experiência com alta tecnologia, automações e dashboards financeiros para dar previsibilidade e lucro à sua empresa.
                    </p>

                    <div className="hero-actions">
                        <a href="#servicos" className="btn btn-primary">
                            Conheça as Soluções <ChevronRight size={20} />
                        </a>
                        <a href="#inovacao" className="btn btn-outline">
                            Ver Tecnologia
                        </a>
                    </div>
                </div>

                <div className="hero-visual-area animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <div className="dashboard-mockup">
                        <div className="mockup-header">
                            <div className="dots">
                                <span className="dot dot-red"></span>
                                <span className="dot dot-yellow"></span>
                                <span className="dot dot-green"></span>
                            </div>
                            <span className="mockup-title">Painel do Cliente ECM</span>
                        </div>

                        <div className="mockup-body">
                            <div className="mockup-cards">
                                <div className="mockup-card">
                                    <span className="card-label">Faturamento Mês</span>
                                    <div className="card-value">R$ 142.300</div>
                                    <div className="card-trend positive">↗ +12% vs último mês</div>
                                </div>
                                <div className="mockup-card">
                                    <span className="card-label">Impostos a Pagar</span>
                                    <div className="card-value">R$ 12.450</div>
                                    <div className="card-trend neutral">⊙ Guias Geradas</div>
                                </div>
                            </div>

                            <div className="mockup-chart">
                                <div className="bar b1" style={{ height: '30%' }}></div>
                                <div className="bar b2" style={{ height: '50%' }}></div>
                                <div className="bar b3" style={{ height: '70%' }}></div>
                                <div className="bar b4" style={{ height: '100%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
