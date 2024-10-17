import { useState } from 'react'
import React from 'react'


import Logo from '../../assets/lupa.png'
import Marca from '../../assets/logoDoSiteAprimorada2.png'
import Imgfooter from '../../assets/logoDoSIte.png'
import './detalhes.css'
import Video from '../../assets/videoDeDetalhes.mp4'

function Detalhes() {
    const [count, setCount] = useState(0)

    const toggleMenu = () => {
        const menu = document.querySelector('.links-cabecalho');
        menu.classList.toggle('show');
    };

    const irParaLogin = () => {
        // Substitua 'login.html' pelo caminho do seu arquivo de login
        window.location.href = '/logar';
    };


    return (
        <section className="container">
            <header className="cabecalho">
                <div>
                    <img className="img-cabecalho" src={Logo} alt="" />
                </div>
                <nav className="links-cabecalho">
                    <a href="/">Início</a>
                    <a href="/detalhes">Detalhes</a>
                    <a href="/concursos">Concursos</a>
                    <button className="login" onClick={irParaLogin}>Login</button>
                </nav>
                <div className="menu-hamburguer" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </header>
            <main className="conteudo">
                <section className="descricao-completa">
                    <h2 className='normal'>Descrição completa do site</h2>
                    <p>Bem-vindo ao nosso site de Ranking Público, a sua plataforma definitiva para acompanhar resultados de concursos de forma prática e eficiente. O nosso objetivo é simplificar a busca por informações relevantes, permitindo que você acesse rapidamente os rankings dos concursos em que participa.</p>

                    <p>Aqui, os usuários podem se inscrever em planos mensais, semestrais ou anuais, garantindo acesso ilimitado aos dados dos concursos. Nossa plataforma é projetada para oferecer uma experiência amigável, onde os resultados são apresentados de forma clara e intuitiva, permitindo que você encontre facilmente as informações necessárias sem perder tempo em pesquisas.</p>

                    <p>Nosso público-alvo inclui concurseiros e aqueles que já participaram de concursos, proporcionando a todos uma ferramenta valiosa para potencializar suas estratégias de estudo e preparação.</p>

                    <p>O que nos diferencia é a forma como tratamos os dados dos resultados, oferecendo uma visualização que facilita a compreensão e a análise. Assim, você pode se concentrar no que realmente importa: sua preparação para os desafios que vêm pela frente.</p>

                    <p>Cadastre-se agora e tenha acesso a conteúdos exclusivos, mantendo-se sempre atualizado com as informações mais relevantes sobre concursos públicos!</p>

                    <p>Para dúvidas ou suporte, entre em contato conosco através do nosso formulário de suporte.</p>
                </section>
                <section className="video-sobre-site">
                    <video src={Video} controls autoplay loop ></video>{/*tem que ser mp4*/}
                </section>
                <section className="especificacoes-tecnicas">
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

                    <h2 className='normal'>3. Outras Ferramentas e Tecnologias</h2><br />
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
                        <li><strong>Métricas de Desempenho</strong>: Tempo de carregamento, taxa de rejeição, interações do usuário, etc.</li>
                    </ul>

                    <h2 className='normal'>9. Backup e Recuperação</h2>
                    <ul>
                        <li><strong>Estratégias de Backup</strong>: Métodos e frequência de backups automáticos do banco de dados e do código (backups diários).</li>
                        <li><strong>Planos de Recuperação de Desastres</strong>: Procedimentos para restaurar o sistema após falhas.</li>
                    </ul>

                    <h2 className='normal'>10. Licenças e Compliance</h2>
                    <ul>
                        <li><strong>Licenças de Software</strong>: Informações sobre as licenças dos softwares utilizados (MIT, GPL).</li>
                        <li><strong>Conformidade</strong>: Informações sobre conformidade com regulamentos, como LGPD (Lei Geral de Proteção de Dados) e GDPR (General Data Protection Regulation).</li>
                    </ul>

                </section>
                <section className="nossos-planos">
                    <h2>Sobre nossos planos</h2>
                    <p>Escolher um plano é essencial para maximizar suas chances de sucesso nos concursos. Nós oferecemos três opções de assinatura para atender às suas necessidades. O <sttrong>Plano Mensal</sttrong> custa <strong>R$ 4,99</strong> e proporciona acesso aos rankings de concursos por um mês. O <strong>Plano Semestral</strong>, por R$ 24,99, oferece acesso por seis meses. Por fim, o <strong>Plano Anual</strong>, ao custo de <strong>R$ 44,99</strong>, garante acesso por um ano. Todos os planos oferecem os mesmos recursos, incluindo atualizações frequentes sobre os resultados, análises e dicas de estudo, relatórios detalhados sobre desempenho e acesso a webinars exclusivos.</p>
                </section>
                <section className="formulario-de-contato">
                    <h2 className='normal'>Entre em contato</h2>
                    <p>Caso tenha identificado algum problema, entre em contato com nossa equipe!</p>
                    <form className="entre-em-contato">
                        <label htmlFor="motivo-do-contato">Coloque o motivo do contato</label><br />
                        <input
                            type="text"
                            name="motivo"
                            id="motivo-do-contato"
                        /><br />
                        <label htmlFor="detalhes">Descreva os detalhes</label><br />
                        <textarea
                            name="detalhes"
                            id="detalhes"
                            placeholder="Digite os detalhes aqui..."
                        ></textarea><br />
                        <button type="submit">Enviar</button>
                    </form>
                </section>
                <section className="avaliacoes-do-site">
                    <h2>Avaliações e feedbacks</h2>
                    <div className="avaliacoes">
                        <div className="emoji">{/* ADICIONAR O EMOJI AQUIIIII */}</div>
                        {/* colocar as avaliações aqui usando api e js, cada vez que algo é postado será adicionado um paragrafo com o comentario */}
                        {/* colocar opção de editar o comentario e apagar também */}
                    </div>
                    <label htmlFor="avaliar">Deixe aqui também sua avaliação. Seu feedback é importante!</label>
                    <input type="text" name="avaliar" id="avaliar" />
                    <button onClick={() => alert("Função avaliar ainda não implementada")}>Postar</button>
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
                <section className="todos-os-acessos">
                    <h2>Acessos em nosso site. Junte-se a nós também!</h2>
                    <section className="quantidade-de-acessos">
                        <p>Todos os acessos até hoje:</p>
                        <div className="acessos">0{/* colocar aqui */}</div>
                        {/* colocar a quantidade de pessoas que ja entraram na primeira página,e atualizar em tempo real se possível */}
                    </section>
                </section>
            </main>
            <footer>
                <img className="logo-do-site-footer" src={Imgfooter} alt="" />
                <p>Nos siga nas redes sociais.Seu feedback é importante</p>
                <section class="sociais">
                    <a className="rede" href="https://www.instagram.com/minhaclassificacaoconcursos?igsh=eWU5Y3Y0emE3eGgx" target="_blank"><i class="ri-instagram-line"></i></a>

                    <a className="rede" href="" target="_blank"><i class="ri-facebook-line"></i></a>

                    <a className="rede" href="https://www.tiktok.com/@vencendoosconcursos?_t=8q4czZHV781&_r=1" target="_blank"><i class="ri-tiktok-line"></i></a>
                </section>
                <p>&copy;Feito por <strong><a href="https://www.facebook.com/share/ZVKE6BK1qLvUh4vJ/?mibextid=qi2Omg" target="_blank">@VionTechOfc</a></strong></p>
            </footer>
        </section>
    )
}


export default Detalhes