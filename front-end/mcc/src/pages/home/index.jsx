import { useState } from 'react';
import React from 'react';

import Logo from '../../assets/lupa.png';
import Marca from '../../assets/logoDoSiteAprimorada2.png';
import Imgfooter from '../../assets/logoDoSIte.png';
import styles from './pagina-inicial.module.css';

function Home() {
    const [count, setCount] = useState(0);

    const toggleMenu = () => {
        const menu = document.querySelector(`.${styles.linksCabecalho}`);
        menu.classList.toggle(styles.show);
    };

    const irParaLogin = () => {
        window.location.href = '/logar';
    };

    return (
        <section className={styles.container}>
            <header className={styles.cabecalho}>
                <div>
                    <img className={styles.imgCabecalho} src={Logo} alt="logo do cabeçalho" />
                </div>
                <nav className={styles.linksCabecalho}>
                    <a href="/">Início</a>
                    <a href="/detalhes">Detalhes</a>
                    <a href="/concursos">Concursos</a>
                    <button onClick={irParaLogin} className={styles.login}>
                        Login
                    </button>
                </nav>
                {/* MENU HAMBURGUER */}
                <div className={styles.menuHamburguer} onClick={toggleMenu}>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </div>
            </header>
            <section className={styles.imagemDoSiteCentro}>
                <img className={styles.logoDoSite} src={Marca} alt="" />
                <h1 className={styles.porCimaDaImagem}>Sua classificação está aqui!</h1>
            </section>
            <main className={styles.concursos}>
                <h2>Conheça mais</h2>

                <section className={styles.produtosMaisPopulares}>
                    {/* concursos publicos mais acessados */}
                </section>
            </main>
            <h2>Números que são nosso forte</h2>
            <section className={styles.informacoesSobreAEmpresa}>
                <section className={styles.nossoForte}>
                    <section className={styles.anosDeMercado}>
                        <h2 id="numero-anos-de-mercado">0</h2>
                        <p>Anos de mercado</p>
                    </section>
                    <section className={styles.especialistas}>
                        <h2 id="numero-especialistas">0</h2>
                        <p>Especialistas</p>
                    </section>
                    <section className={styles.clientesAnuais}>
                        <h2 id="numero-clientes-anuais">0</h2>
                        <p>Clientes anuais</p>
                    </section>
                    <section className={styles.parcerias}>
                        <h2 id="numero-parcerias">0</h2>
                        <p>Parcerias</p>
                    </section>
                    <h2 id="planos">Nossos planos</h2>
                    <section className={styles.planos}>
                        <div className={styles.card}>
                            <div className={styles.content}>
                                <h4>Plano Mensal</h4>
                                <h3>R$ 4,99</h3>
                                <p>
                                    Assine o nosso <strong>plano mensal</strong> e tenha acesso exclusivo a uma série de
                                    funcionalidades que vão ajudar você a se preparar melhor e acompanhar seus resultados
                                    nos concursos públicos.
                                </p>
                            </div>
                            <button className={styles.botaoAssinatura}>Assine agora!</button>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.content}>
                                <h4>Plano Semestral</h4>
                                <h3>R$ 24,99</h3>
                                <p>
                                    Assine o nosso <strong>plano semestral</strong> e tenha acesso exclusivo a uma série de
                                    funcionalidades que vão ajudar você a se preparar melhor e acompanhar seus resultados
                                    nos concursos públicos.
                                </p>
                            </div>
                            <button className={styles.botaoAssinatura}>Assine agora!</button>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.content}>
                                <h4>Plano Anual</h4>
                                <h3>R$ 44,99</h3>
                                <p>
                                    Assine o nosso <strong>plano Anual</strong> e tenha acesso exclusivo a uma série de
                                    funcionalidades que vão ajudar você a se preparar melhor e acompanhar seus resultados
                                    nos concursos públicos.
                                </p>
                            </div>
                            <button className={styles.botaoAssinatura}>Assine agora!</button>
                        </div>
                    </section>
                </section>
            </section>
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

export default Home;
