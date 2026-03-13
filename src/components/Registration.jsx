import { useState } from 'react';
import { Send, CheckCircle2, AlertTriangle, FileText } from 'lucide-react';
import './Registration.css';

const Registration = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('https://williammadruga.app.n8n.cloud/webhook/ecm-site', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Erro ao enviar dados');
            }

            setIsSubmitting(false);
            setIsSuccess(true);
            form.reset();

            setTimeout(() => {
                setIsSuccess(false);
            }, 5000);
        } catch (error) {
            console.error('Erro no envio:', error);
            setIsSubmitting(false);
            alert('Ocorreu um erro ao enviar a ficha. Por favor, tente novamente.');
        }
    };

    return (
        <section className="section registration-section">
            <div className="container">
                <div className="text-center animate-fade-in-up">
                    <h2 className="section-title">Ficha de Registro de Funcionário</h2>
                    <p className="section-subtitle">
                        Preencha os dados do novo colaborador. Os documentos exigidos devem ser enviados separadamente por WhatsApp ou E-mail.
                    </p>
                </div>

                <div className="form-wrapper animate-fade-in-up">
                    {isSuccess ? (
                        <div className="success-message">
                            <CheckCircle2 size={48} color="#10b981" />
                            <h3>Ficha enviada com sucesso!</h3>
                            <p>Nossa automação já iniciou o processo e a equipe de DP foi notificada.</p>
                        </div>
                    ) : (
                        <form className="registration-form" onSubmit={handleSubmit}>

                            {/* SEÇÃO 1: EMPRESA */}
                            <div className="form-group-section">
                                <h3 className="form-section-title">Dados da Empresa Contratante</h3>
                                <div className="form-grid">
                                    <div className="input-field full-width">
                                        <label>Empresa *</label>
                                        <input type="text" name="empresa" required />
                                    </div>
                                    <div className="input-field full-width">
                                        <label>CNPJ *</label>
                                        <input type="text" name="cnpj" placeholder="00.000.000/0000-00" required />
                                    </div>
                                </div>
                            </div>

                            {/* SEÇÃO 2: DADOS DO EMPREGADO */}
                            <div className="form-group-section">
                                <h3 className="form-section-title">Dados do Empregado</h3>
                                <div className="form-grid">
                                    <div className="input-field full-width">
                                        <label>Nome do Empregado *</label>
                                        <input type="text" name="nomeEmpregado" required />
                                    </div>

                                    <div className="input-field">
                                        <label>Telefone *</label>
                                        <input type="tel" name="telefone" required />
                                    </div>
                                    <div className="input-field">
                                        <label>Estado Civil *</label>
                                        <select name="estadoCivil" defaultValue="" required>
                                            <option value="" disabled>Selecione...</option>
                                            <option value="solteiro">Solteiro(a)</option>
                                            <option value="casado">Casado(a)</option>
                                            <option value="separado">Separado(a)</option>
                                            <option value="divorciado">Divorciado(a)</option>
                                            <option value="viuvo">Viúvo(a)</option>
                                        </select>
                                    </div>

                                    <div className="input-field">
                                        <label>Grau de Instrução</label>
                                        <select name="grauInstrucao" defaultValue="">
                                            <option value="" disabled>Selecione...</option>
                                            <option value="medio_incompleto">Ensino Médio Incompleto</option>
                                            <option value="medio_completo">Ensino Médio Completo</option>
                                            <option value="superior_incompleto">Ensino Superior Incompleto</option>
                                            <option value="superior_completo">Ensino Superior Completo</option>
                                            <option value="pos_graduacao">Pós Graduação/MBA</option>
                                        </select>
                                    </div>
                                    <div className="input-field">
                                        <label>CPF *</label>
                                        <input type="text" name="cpf" placeholder="000.000.000-00" required />
                                    </div>

                                    <div className="input-field full-width">
                                        <label>Data de Nascimento *</label>
                                        <input type="date" name="dataNascimento" required />
                                    </div>

                                    {/* ENDEREÇO */}
                                    <div className="input-field full-width">
                                        <label>Endereço *</label>
                                        <input type="text" name="endereco" required />
                                    </div>

                                    <div className="input-field">
                                        <label>Número *</label>
                                        <input type="text" name="numero" required />
                                    </div>
                                    <div className="input-field">
                                        <label>Bairro *</label>
                                        <input type="text" name="bairro" required />
                                    </div>

                                    <div className="input-field">
                                        <label>CEP *</label>
                                        <input type="text" name="cep" placeholder="00000-000" required />
                                    </div>
                                    <div className="input-field">
                                        <label>Cidade *</label>
                                        <input type="text" name="cidade" required />
                                    </div>

                                    <div className="input-field">
                                        <label>UF *</label>
                                        <input type="text" name="uf" maxLength={2} placeholder="Ex: PR" required />
                                    </div>
                                    <div className="input-field">
                                        <label>Complemento</label>
                                        <input type="text" name="complemento" />
                                    </div>
                                </div>
                            </div>

                            {/* SEÇÃO 3: DADOS CONTRATUAIS */}
                            <div className="form-group-section">
                                <h3 className="form-section-title">Dados Contratuais</h3>
                                <div className="form-grid">
                                    <div className="input-field">
                                        <label>Data de Admissão *</label>
                                        <input type="date" name="dataAdmissao" required />
                                    </div>
                                    <div className="input-field">
                                        <label>Salário *</label>
                                        <input type="number" step="0.01" name="salario" placeholder="0.00" required />
                                    </div>

                                    <div className="input-field full-width">
                                        <label>Haverá algum pagamento de bonificação?</label>
                                        <input type="text" name="bonificacao" />
                                    </div>

                                    <div className="input-field">
                                        <label>Horário de Trabalho *</label>
                                        <input type="text" name="horarioTrabalho" placeholder="Ex: 08:00 às 18:00" required />
                                    </div>
                                    <div className="input-field">
                                        <label>Função *</label>
                                        <input type="text" name="funcao" required />
                                        <span className="field-hint">Se a função for de motorista, especifique o tipo de veículo utilizado. Exemplo: Motorista de carreta, Motorista de van, entre outros.</span>
                                    </div>

                                    {/* Radios */}
                                    <div className="input-field full-width radio-group">
                                        <label>Qual tipo de contrato?</label>
                                        <div className="radio-options">
                                            <label><input type="radio" name="tipoContrato" value="geral" required /> Empregado Geral</label>
                                            <label><input type="radio" name="tipoContrato" value="intermitente" required /> Empregado Intermitente</label>
                                        </div>
                                    </div>

                                    <div className="input-field full-width radio-group">
                                        <label>Contrato de experiência?</label>
                                        <div className="radio-options">
                                            <label><input type="radio" name="contratoExperiencia" value="sim" required /> Sim</label>
                                            <label><input type="radio" name="contratoExperiencia" value="nao" required /> Não</label>
                                        </div>
                                    </div>

                                    <div className="input-field full-width">
                                        <label>Prazo do Contrato *</label>
                                        <select name="prazoContrato" defaultValue="" required>
                                            <option value="" disabled>Selecione...</option>
                                            <option value="30+30">30+30</option>
                                            <option value="30+60">30+60</option>
                                            <option value="45+45">45+45</option>
                                            <option value="sem_experiencia">Sem Contrato de Experiência</option>
                                        </select>
                                    </div>

                                    <div className="input-field full-width radio-group">
                                        <label>Utiliza vale-transporte?</label>
                                        <div className="radio-options">
                                            <label><input type="radio" name="valeTransporte" value="sim" required /> Sim</label>
                                            <label><input type="radio" name="valeTransporte" value="nao" required /> Não</label>
                                        </div>
                                    </div>

                                    <div className="input-field full-width radio-group">
                                        <label>Possui outra remuneração?</label>
                                        <div className="radio-options">
                                            <label><input type="radio" name="outraRemuneracao" value="sim" required /> Sim</label>
                                            <label><input type="radio" name="outraRemuneracao" value="nao" required /> Não</label>
                                        </div>
                                    </div>

                                    <div className="input-field full-width checkbox-field">
                                        <label className="checkbox-label">
                                            <input type="checkbox" name="aceite" />
                                            Concordo em fornecer meus dados para receber conteúdos por e-mail ou outros meios.
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="form-actions">
                                <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
                                    {isSubmitting ? 'Processando Automação...' : 'Enviar Ficha via Automação'}
                                    {!isSubmitting && <Send size={18} />}
                                </button>
                            </div>
                        </form>
                    )}

                    {/* DOCUMENTOS EXIGIDOS - INFO CARD */}
                    <div className="documents-info-section">
                        <h3 className="docs-title">Documentos para registro.</h3>

                        <div className="docs-grid">
                            <div className="docs-card">
                                <h4 className="card-title"><FileText size={18} /> Lista de Documentos</h4>
                                <ul className="docs-list">
                                    <li>Exame Admissional</li>
                                    <li>Cópia do RG</li>
                                    <li>Cópia do CPF</li>
                                    <li>Cópia da Certidão de Casamento</li>
                                    <li>Cópia de Certidão de Nascimento dos filhos menores de 14 anos</li>
                                    <li>CPF dos filhos menores de 14 anos</li>
                                    <li>Comprovante de Residência</li>
                                    <li>Cópia cartão PIS/PASEP</li>
                                    <li>Caso a função for motorista (exigido pelo eSocial) EXAME TOXICOLÓGICO.</li>
                                </ul>
                            </div>

                            <div className="docs-card warning-card">
                                <h4 className="card-title"><AlertTriangle size={18} /> Aviso Legal</h4>
                                <p>
                                    Lei nº 7.855/89: são obrigatórios os Exames Admissionais e Demissionais.
                                </p>
                                <p>
                                    <strong>Data limite para registro de empregados:</strong> 25/mês.
                                </p>
                                <p>
                                    A falta de documentos e informações gera problemas com INSS, FGTS, RAIS, DIRF, CAGED e Folhas de Pagamento.
                                </p>
                            </div>
                        </div>
                        <p className="docs-footer-note">
                            Por favor, envie os documentos listados acima diretamente pelo WhatsApp ou pelo E-mail do escritório.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Registration;
