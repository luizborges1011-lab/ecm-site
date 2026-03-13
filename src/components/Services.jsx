import { Users, DollarSign, FileText, Briefcase, ShieldCheck, PieChart } from 'lucide-react';
import './Services.css';

const servicesList = [
    {
        icon: <Users size={32} className="service-icon" />,
        title: "Gestão de DP",
        description: "Folha de pagamento, admissões, rescisões e adequação trabalhista."
    },
    {
        icon: <DollarSign size={32} className="service-icon" />,
        title: "BPO Financeiro",
        description: "Terceirização do financeiro, contas a pagar/receber e conciliação."
    },
    {
        icon: <FileText size={32} className="service-icon" />,
        title: "Apuração Fiscal",
        description: "Gestão de tributos com foco em redução de carga e compliance."
    },
    {
        icon: <Briefcase size={32} className="service-icon" />,
        title: "Abertura de Empresa",
        description: "Descomplicamos o processo de abertura para o seu novo negócio."
    },
    {
        icon: <ShieldCheck size={32} className="service-icon" />,
        title: "Assessoria Trabalhista",
        description: "Suporte preventivo e orientações constantes para sua segurança jurídica."
    },
    {
        icon: <PieChart size={32} className="service-icon" />,
        title: "Contábil Gerencial",
        description: "Apuração e geração de demonstrativos focados na tomada de decisão."
    }
];

const Services = () => {
    return (
        <section id="servicos" className="section services-section bg-light">
            <div className="container">
                <div className="text-center animate-fade-in-up">
                    <h2 className="section-title">O que podemos fazer por você?</h2>
                    <p className="section-subtitle">
                        Soluções completas e inovadoras para simplificar o seu dia a dia e acelerar o crescimento.
                    </p>
                </div>

                <div className="services-grid">
                    {servicesList.map((service, index) => (
                        <div
                            key={index}
                            className="service-card animate-fade-in-up"
                            style={{ animationDelay: `${0.1 * index}s` }}
                        >
                            <div className="icon-wrapper">
                                {service.icon}
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
