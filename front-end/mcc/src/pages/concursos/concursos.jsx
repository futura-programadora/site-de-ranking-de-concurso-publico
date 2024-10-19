import { useState } from 'react'
import React from 'react'

import Logo from '../../assets/lupa.png'
import Marca from '../../assets/logoDoSiteAprimorada2.png'
import Imgfooter from '../../assets/logoDoSIte.png'
import './concursos.css'

function Concursos() {
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
                    <img className="img-cabecalho" src={Logo} alt="logo do cabeçalho" />
                </div>
                <nav className="links-cabecalho">
                    <a href="/">Início</a>
                    <a href="/detalhes">Detalhes</a>
                    <a href="/concursos">Concursos</a>
                    <button onClick={irParaLogin} className="login">
                        Login
                    </button>
                </nav>
                {/* MENU HAMBURGUER */}
                <div className="menu-hamburguer" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </header>
            <main className="conteudo">
            <section class="concursos-disponiveis">
                <h2 className='normal'>Todos os concursos disponíveis</h2>
                <div className="todos-os-concursos">
                    {/* pegar o nome de todos os concursos atraves do banco de dados, e adaptar este codigo na parte do script e na parte do "html" */}
                </div>
            </section>
        </main>
            <footer>
                <img className="logo-do-site-footer" src={Imgfooter} alt="" />
                <p>Nos siga nas redes sociais. Seu feedback é importante</p>
                <section className="sociais">
                    <a
                        className="rede"
                        href="https://www.instagram.com/minhaclassificacaoconcursos?igsh=eWU5Y3Y0emE3eGgx"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="ri-instagram-line"></i>
                    </a>
                    <a className="rede" href="" target="_blank" rel="noopener noreferrer">
                        <i className="ri-facebook-line"></i>
                    </a>
                    <a
                        className="rede"
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
    )
}

export default Concursos