import { useState } from 'react';
import React from 'react';

import Logo from '../../assets/lupa.png';
import Imgfooter from '../../assets/logoDoSIte.png';
import styles from './concursos.module.css';

function Concursos() {
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
            <main className={styles.conteudo}>
                <section className={styles.concursosDisponiveis}>
                    <h2 className={styles.normal}>Todos os concursos disponíveis</h2>
                    <div className={styles.todosOsConcursos}>
                        {/* pegar o nome de todos os concursos através do banco de dados, e adaptar este código na parte do script e na parte do "html" */}
                    </div>
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

export default Concursos;
