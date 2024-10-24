import { useState } from 'react';
import React from 'react';

import Logo from '../../assets/lupa.png';
import Marca from '../../assets/logoDoSiteAprimorada2.png';
import Imgfooter from '../../assets/logoDoSIte.png';
import Styles from './pagina-inicial.module.css';

function Home() {
    const [count, setCount] = useState(0);

    const toggleMenu = () => {
        const menu = document.querySelector(`.${Styles.linksCabecalho}`);
        menu.classList.toggle(Styles.show);
    };

    const irParaLogin = () => {
        window.location.href = '/logar';
    };

    return (
        <section className={Styles.containerHome}>
            <header className={Styles.cabecalhoHome}>
                <div>
                    <img className={Styles.imgCabecalho} src={Logo} alt="logo do cabeçalho" />
                </div>
                <nav className={Styles.linksCabecalho}>
                    <a href="/">Início</a>
                    <a href="/detalhes">Detalhes</a>
                    <a href="/concursos">Concursos</a>
                    <button onClick={irParaLogin} className={Styles.login}>
                        Login
                    </button>
                </nav>
                {/* MENU HAMBURGUER */}
                <div className={Styles.menuHamburguer} onClick={toggleMenu}>
                    <span className={Styles.bar}></span>
                    <span className={Styles.bar}></span>
                    <span className={Styles.bar}></span>
                </div>
            </header>
            <section className={Styles.imagemDoSiteCentro}>
                <img className={Styles.logoDoSite} src={Marca} alt="" />
                <h1 className={Styles.porCimaDaImagem}>Sua classificação está aqui!</h1>
            </section>
            <main className={Styles.concursos}>
                <h2>Conheça mais</h2>

                <section className={Styles.produtosMaisPopulares}>
                    {/* concursos publicos mais acessados */}
                </section>
            </main>
            <h2>Números que são nosso forte</h2>
            <section className={Styles.informacoesSobreAEmpresa}>
                <section className={Styles.nossoForte}>
                    <section className={Styles.anosDeMercado}>
                        <h2 id="numero-anos-de-mercado">0</h2>
                        <p>Anos de mercado</p>
                    </section>
                    <section className={Styles.especialistas}>
                        <h2 id="numero-especialistas">0</h2>
                        <p>Especialistas</p>
                    </section>
                    <section className={Styles.clientesAnuais}>
                        <h2 id="numero-clientes-anuais">0</h2>
                        <p>Clientes anuais</p>
                    </section>
                    <section className={Styles.parcerias}>
                        <h2 id="numero-parcerias">0</h2>
                        <p>Parcerias</p>
                    </section>
                    <h2 id="planos">Nossos planos</h2>
                    <section className={Styles.planos}>
                        <div className={Styles.card}>
                            <div className={Styles.content}>
                                <h4>Plano Mensal</h4>
                                <h3>R$ 4,99</h3>
                                <p>
                                    Assine o nosso <strong>plano mensal</strong> e tenha acesso exclusivo a uma série de
                                    funcionalidades que vão ajudar você a se preparar melhor e acompanhar seus resultados
                                    nos concursos públicos.
                                </p>
                            </div>
                            <button className={Styles.botaoAssinatura}>Assine agora!</button>
                        </div>
                        <div className={Styles.card}>
                            <div className={Styles.content}>
                                <h4>Plano Semestral</h4>
                                <h3>R$ 24,99</h3>
                                <p>
                                    Assine o nosso <strong>plano semestral</strong> e tenha acesso exclusivo a uma série de
                                    funcionalidades que vão ajudar você a se preparar melhor e acompanhar seus resultados
                                    nos concursos públicos.
                                </p>
                            </div>
                            <button className={Styles.botaoAssinatura}>Assine agora!</button>
                        </div>
                        <div className={Styles.card}>
                            <div className={Styles.content}>
                                <h4>Plano Anual</h4>
                                <h3>R$ 44,99</h3>
                                <p>
                                    Assine o nosso <strong>plano Anual</strong> e tenha acesso exclusivo a uma série de
                                    funcionalidades que vão ajudar você a se preparar melhor e acompanhar seus resultados
                                    nos concursos públicos.
                                </p>
                            </div>
                            <button className={Styles.botaoAssinatura}>Assine agora!</button>
                        </div>
                    </section>
                </section>
            </section>
            <footer>
                <img className={Styles.logoDoSiteFooter} src={Imgfooter} alt="" />
                <p>Nos siga nas redes sociais. Seu feedback é importante</p>
                <section className={Styles.sociais}>
                    <a
                        className={Styles.rede}
                        href="https://www.instagram.com/minhaclassificacaoconcursos?igsh=eWU5Y3Y0emE3eGgx"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="ri-instagram-line"></i>
                    </a>
                    <a className={Styles.rede} href="" target="_blank" rel="noopener noreferrer">
                        <i className="ri-facebook-line"></i>
                    </a>
                    <a
                        className={Styles.rede}
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

export default Home;
