import { useState } from 'react';
import React from 'react';

import Logo from '../../assets/lupa.png';
import Imgfooter from '../../assets/logoDoSIte.png';
import styles from './detalhes.module.css'; // Importando os estilos como um módulo
import Video from '../../assets/videoDeDetalhes.mp4';

function Detalhes() {
    const [count, setCount] = useState(0);

    const toggleMenu = () => {
        const menu = document.querySelector(`.${styles.linksCabecalho}`);
        menu.classList.toggle(styles.show);
    };

    const irParaLogin = () => {
        window.location.href = '/logar';
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Implementar a lógica de envio do formulário aqui
        alert('Formulário enviado com sucesso!'); // Exemplo de feedback
    };

    return (
        <section className={styles.container}>
            <header className={styles.cabecalho}>
                <div>
                    <img className={styles.imgCabecalho} src={Logo} alt="Logo do site" />
                </div>
                <nav className={styles.linksCabecalho}>
                    <a href="/">Início</a>
                    <a href="/detalhes">Detalhes</a>
                    <a href="/concursos">Concursos</a>
                    <button className={styles.login} onClick={irParaLogin}>Login</button>
                </nav>
                <div className={styles.menuHamburguer} onClick={toggleMenu} aria-label="Menu">
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </div>
            </header>
            <main className={styles.conteudo}>
                <section className={styles.descricaoCompleta}>
                    <h2 className='normal'>Descrição completa do site</h2>
                    <p>Bem-vindo ao nosso site de Ranking Público, a sua plataforma definitiva para acompanhar resultados de concursos de forma prática e eficiente. O nosso objetivo é simplificar a busca por informações relevantes, permitindo que você acesse rapidamente os rankings dos concursos em que participa.</p>
                    <p>Aqui, os usuários podem se inscrever em planos mensais, semestrais ou anuais, garantindo acesso ilimitado aos dados dos concursos. Nossa plataforma é projetada para oferecer uma experiência amigável, onde os resultados são apresentados de forma clara e intuitiva, permitindo que você encontre facilmente as informações necessárias sem perder tempo em pesquisas.</p>
                    <p>Nosso público-alvo inclui concurseiros e aqueles que já participaram de concursos, proporcionando a todos uma ferramenta valiosa para potencializar suas estratégias de estudo e preparação.</p>
                    <p>O que nos diferencia é a forma como tratamos os dados dos resultados, oferecendo uma visualização que facilita a compreensão e a análise. Assim, você pode se concentrar no que realmente importa: sua preparação para os desafios que vêm pela frente.</p>
                    <p>Cadastre-se agora e tenha acesso a conteúdos exclusivos, mantendo-se sempre atualizado com as informações mais relevantes sobre concursos públicos!</p>
                    <p>Para dúvidas ou suporte, entre em contato conosco através do nosso formulário de suporte.</p>
                </section>
                <section className={styles.videoSobreSite}>
                    <video src={Video} controls autoPlay muted loop></video>
                </section>
                <section className={styles.especificacoesTecnicas}>
                    <h2 className='normal'>Especificações Técnicas</h2>
                    <h3>Frontend</h3>
                    <ul>
                        <li><strong>React</strong>: Biblioteca JavaScript para construção de interfaces de usuário.</li>
                        <li><strong>HTML</strong>: Estrutura básica das páginas.</li>
                        <li><strong>CSS</strong>: Estilização das páginas (pode incluir preprocessadores como SASS se utilizado).</li>
                        <li><strong>JavaScript</strong>: Funcionalidade interativa no cliente.</li>
                    </ul>
                    <h3>Backend</h3>
                    <ul>
                        <li><strong>Node.js</strong>: Ambiente de execução JavaScript no servidor.</li>
                        <li><strong>Express</strong>: Framework para construir aplicações web com Node.js.</li>
                    </ul>
                    <h3>Banco de Dados</h3>
                    <ul>
                        <li><strong>MongoDB</strong>: Banco de dados NoSQL para armazenamento de dados.</li>
                    </ul>
                    <h2 className='normal'>2. Ambiente de Desenvolvimento</h2>
                    <ul>
                        <li><strong>Editor de Código</strong>: Visual Studio Code.</li>
                        <li><strong>Controle de Versão</strong>:
                            <ul>
                                <li><strong>Git</strong>: Sistema de controle de versões.</li>
                                <li><strong>GitHub</strong>: Plataforma para hospedagem de repositórios Git.</li>
                            </ul>
                        </li>
                        <li><strong>Ferramentas de Construção</strong>: Webpack, Babel.</li>
                    </ul>
                    <h2 className='normal'>3. Outras Ferramentas e Tecnologias</h2>
                    <ul>
                        <li><strong>APIs</strong>: Uso de APIs RESTful ou GraphQL.</li>
                        <li><strong>Gerenciamento de Estado</strong>: Redux, Context API, ou outras bibliotecas se utilizadas.</li>
                        <li><strong>Testes</strong>: Jest, Mocha, Chai.</li>
                        <li><strong>Formatadores e Linters</strong>: ESLint, Prettier para manter a qualidade do código.</li>
                    </ul>
                    <h2 className='normal'>4. Segurança</h2>
                    <ul>
                        <li><strong>HTTPS</strong>: Implementação de segurança na comunicação.</li>
                        <li><strong>Autenticação</strong>: Métodos de autenticação, como JWT (JSON Web Tokens) ou OAuth se aplicável.</li>
                        <li><strong>Proteção contra Ataques</strong>: Proteções contra CSRF (Cross-Site Request Forgery), XSS (Cross-Site Scripting), e injeção SQL.</li>
                    </ul>
                    <h2 className='normal'>5. Performance e Otimização</h2>
                    <ul>
                        <li><strong>Minificação</strong>: Minificação de arquivos CSS e JavaScript.</li>
                        <li><strong>Otimização de Imagens</strong>: Uso de ferramentas como ImageOptim ou TinyPNG para reduzir o tamanho das imagens.</li>
                        <li><strong>Lazy Loading</strong>: Carregamento sob demanda de imagens ou componentes para melhorar a performance inicial.</li>
                    </ul>
                    <h2 className='normal'>6. Responsividade</h2>
                    <ul>
                        <li><strong>Design Responsivo</strong>: Uso de media queries para diferentes tamanhos de tela.</li>
                        <li><strong>Frameworks CSS</strong>: Uso de Bootstrap, Tailwind CSS ou similares.</li>
                    </ul>
                    <h2 className='normal'>7. Acessibilidade</h2>
                    <ul>
                        <li><strong>Conformidade com WCAG</strong>: Estratégias para garantir a acessibilidade (uso de atributos ARIA).</li>
                        <li><strong>Testes de Acessibilidade</strong>: Uso de ferramentas como Axe ou Lighthouse para verificar a acessibilidade.</li>
                    </ul>
                    <h2 className='normal'>8. Métricas e Monitoramento</h2>
                    <ul>
                        <li><strong>Ferramentas de Monitoramento</strong>: New Relic, Google Analytics, ou outras para monitorar desempenho e comportamento do usuário.</li>
                        <li><strong>Métricas de Desempenho</strong>: Tempo de carregamento, taxa de rejeição, interações de usuários.</li>
                    </ul>
                    <h2 className='normal'>9. Estratégia de Backup</h2>
                    <ul>
                        <li><strong>Procedimentos de Backup</strong>: Procedimentos para backup de dados e recuperação de desastres.</li>
                        <li><strong>Versionamento</strong>: Uso de versionamento para bancos de dados e arquivos críticos.</li>
                    </ul>
                </section>
                <section className={styles.nossosPlanos}>
                    <h2>Sobre nossos planos</h2>
                    <p>
                        Escolher um plano é essencial para maximizar suas chances de sucesso nos concursos. Nós oferecemos três opções de assinatura para atender às suas necessidades. O <strong>Plano Mensal</strong> custa <strong>R$ 4,99</strong> e proporciona acesso aos rankings de concursos por um mês. O <strong>Plano Semestral</strong>, por R$ 24,99, oferece acesso por seis meses. Por fim, o <strong>Plano Anual</strong>, ao custo de <strong>R$ 44,99</strong>, garante acesso por um ano. Todos os planos oferecem os mesmos recursos, incluindo atualizações frequentes sobre os resultados, análises e dicas de estudo, relatórios detalhados sobre desempenho e acesso a webinars exclusivos.
                    </p>
                </section>

                <section className={styles.formularioDeContato}>
                    <h2>Entre em contato</h2>
                    <p>Caso tenha identificado algum problema, entre em contato com nossa equipe!</p>
                    <form className={styles.entreEmContato}>
                        <label htmlFor="motivo-do-contato">Coloque o motivo do contato</label><br />
                        <input type="text" name="motivo-do-contato" id="motivo-do-contato" /><br />

                        <label htmlFor="detalhes">Descreva os detalhes</label><br />
                        <textarea name="detalhes" id="detalhes" placeholder="Digite os detalhes aqui..."></textarea><br />

                        <button type="submit">Enviar</button>
                    </form>
                </section>
                <section className={styles.avaliacoesDoSite}>
                    <h2>Avaliações e feedbacks</h2>
                    <div className={styles.avaliacoes}>
                        <div className={styles.emoji}>
                            {/* ADICIONAR O EMOJI AQUI */}
                        </div>
                        
                        {/* Aqui você pode adicionar as avaliações utilizando a API, 
                            com o comentário como um parágrafo */}
                        
                        {/* Opção de editar e apagar o comentário */}
                    </div>
                    <label htmlFor="avaliar">Deixe aqui também sua avaliação. Seu feedback é importante!</label>
                    <input type="text" name="avaliar" id="avaliar" />
                    <button>Postar</button>
                    <select id="emoji-select">
                        <option value="">Escolha um emoji</option>
                        <option value="😀">😀</option>
                        <option value="😁">😁</option>
                        <option value="😂">😂</option>
                        <option value="🤣">🤣</option>
                        <option value="😃">😃</option>
                        <option value="😄">😄</option>
                        <option value="😅">😅</option>
                        <option value="😆">😆</option>
                        <option value="😉">😉</option>
                        <option value="😊">😊</option>
                    </select>
                </section>
                <section className={styles.todosOsAcessos}>
                    <h2>Acessos em nosso site. Junte-se a nós também!</h2>
                    <section className={styles.quantidadeDeAcessos}>
                        <p>Todos os acessos até hoje:</p>
                        <div className={styles.acessos}>0{/* Colocar aqui */}</div>
                        {/* Aqui você pode colocar a quantidade de pessoas que já entraram na primeira página 
                            e atualizar em tempo real se possível */}
                    </section>
                </section>
            </main>
            <footer>
                <img className={styles.logoDoSiteFooter} src={Imgfooter} alt="" />
                <p>Nos siga nas redes sociais. Seu feedback é importante</p>
                <section className={styles.sociais}>
                    <a
                        className={styles.rede}
                        href="https://www.instagram.com/minhaclassificacaoconcursos?igsh=eWU5Y3Y0emE3eGgx"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="ri-instagram-line"></i>
                    </a>
                    <a className={styles.rede} href="" target="_blank" rel="noopener noreferrer">
                        <i className="ri-facebook-line"></i>
                    </a>
                    <a
                        className={styles.rede}
                        href="https://www.tiktok.com/@vencendoosconcursos?_t=8q4czZHV781&_r=1"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="ri-tiktok-line"></i>
                    </a>
                </section>
                <p>
                    &copy; Feito por{' '}
                    <strong>
                        <a
                            href="https://www.facebook.com/share/ZVKE6BK1qLvUh4vJ/?mibextid=qi2Omg"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            @VionTechOfc
                        </a>
                    </strong>
                </p>
            </footer>
        </section>
    );
}

export default Detalhes;
