import { BarChart3, Settings, Link2, Activity, Play } from 'lucide-react';
import './Innovation.css';

const Innovation = () => {
    return (
        <section id="inovacao" className="innovation-section dark-section">
            <div className="container innovation-container">
                <div className="innovation-content animate-fade-in-up">


                    <h2 className="section-title">Contabilidade baseada em Dados e Automação</h2>

                    <p className="innovation-desc">
                        Eliminamos o seu trabalho operacional manual para que você foque 100% na estratégia e no crescimento do seu negócio. Com nossas soluções de RPA e Dashboards, os dados da sua empresa fluem sozinhos e se transformam em lucro.
                    </p>

                    <ul className="feature-list">
                        <li className="feature-item">
                            <div className="feature-icon"><BarChart3 size={20} /></div>
                            <div>
                                <strong>Dashboards Financeiros</strong>
                                <span>DRE, Fluxo de Caixa, KPIs em tempo real para tomada de decisão ágil.</span>
                            </div>
                        </li>
                        <li className="feature-item">
                            <div className="feature-icon"><Settings size={20} /></div>
                            <div>
                                <strong>Automação de Rotinas</strong>
                                <span>Robôs que processam notas e dados automaticamente (RPA).</span>
                            </div>
                        </li>
                        <li className="feature-item">
                            <div className="feature-icon"><Link2 size={20} /></div>
                            <div>
                                <strong>Integração de Sistemas</strong>
                                <span>Conexão do ERP do cliente direto com o nosso sistema contábil.</span>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="innovation-visual animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <div className="tech-card">
                        <div className="tech-header">
                            <div>
                                <div className="tech-title">
                                    <Play size={16} fill="currentColor" /> Inteligência Tributária: Previsão para a Reforma Tributária
                                </div>
                                <div style={{ fontSize: '0.7rem', color: 'var(--text-dark-muted)', marginTop: '4px', marginLeft: '24px' }}>
                                    Competência da análise: 01/01/2025 a 31/12/2025
                                </div>
                            </div>
                            <div className="tech-status">
                                <span className="dot pulse"></span> Sincronizado
                            </div>
                        </div>

                        <div className="metrics-grid">
                            <div className="metric-card highlight-metric">
                                <div className="metric-label">Alíquota Efetiva</div>
                                <div className="metric-value">7.50%</div>
                                <div className="metric-details">
                                    <div className="detail-row"><span>ICMS / ISS:</span> <span>2.10%</span></div>
                                    <div className="detail-row"><span>PIS:</span> <span>0.65%</span></div>
                                    <div className="detail-row"><span>COFINS:</span> <span>3.00%</span></div>
                                    <div className="detail-row"><span>CPP:</span> <span>0.75%</span></div>
                                    <div className="detail-row highlight-detail"><span>+ IRPJ/CSLL:</span> <span>1.00%</span></div>
                                </div>
                            </div>
                            <div className="metrics-subgrid">
                                <div className="metric-card standard-metric">
                                    <div className="metric-label text-blue">Total Vendas (Ano)</div>
                                    <div className="metric-value small">R$ 4.250.000,00</div>
                                </div>
                                <div className="metric-card standard-metric">
                                    <div className="metric-label text-orange">Total Compras (Ano)</div>
                                    <div className="metric-value small">R$ 1.850.500,00</div>
                                </div>
                                <div className="metric-card standard-metric">
                                    <div className="metric-label text-green">Faturamento Médio</div>
                                    <div className="metric-value small">R$ 354.166,67</div>
                                </div>
                                <div className="metric-card standard-metric">
                                    <div className="metric-label text-emerald">Média de Impostos</div>
                                    <div className="metric-value small">R$ 26.562,50</div>
                                </div>
                            </div>
                        </div>

                        <div className="tech-code" style={{ padding: '1.25rem' }}>
                            <p style={{ color: 'var(--text-light, #a0aec0)', fontSize: '0.9rem', lineHeight: '1.5', margin: 0, textAlign: 'center' }}>
                                Acompanhe de forma visual e em tempo real a relação entre o Faturamento e os Custos/Despesas da sua empresa, garantindo total controle sobre a saúde financeira e margem de lucro.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Innovation;
