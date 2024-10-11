import { useState } from 'react'
import Logo from '../../assets/lupa.png'
import Marca from '../../assets/logoDoSiteAprimorada2.png'
import Imgfooter from '../../assets/logoDoSite.png'
import './style.css'


function App() {
  const [count, setCount] = useState(0)

  const toggleMenu = () => {
    const menu = document.querySelector('.links-cabecalho');
    menu.classList.toggle('show');
  };

  const irParaLogin = () => {
    // Substitua 'login.html' pelo caminho do seu arquivo de login
    window.location.href = '../pages/logar/index';
  };

  return (
      <div className="container">
        <header className="cabecalho">
          <div>
            <img className="img-cabecalho" src={Logo} alt="logo do cabeçalho" />
          </div>
          <nav className="links-cabecalho">
            <a href="#">Início</a>
            <a href="./detalhes/">Detalhes</a>
            <a href="./concursos.html">Concursos</a>
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
        <section className="imagem-do-site-centro">
          <img
            className="logo-do-site"
            src={Marca}
            alt=""
          />
          <h1 className="por-cima-da-imagem">Sua classificação está aqui!</h1>
        </section>
        <main className="concursos">
          <h2>Conheça mais</h2>
          
          <section className="concursos-mais-populares">
            {/* concursos publicos mais acessados */}
            
          </section>
        </main>
        <h2>Números que são nosso forte</h2>
        <section className="informacoes-sobre-a-empresa">
          <section className="nosso-forte">
            <section className="anos-de-mercado">
              <h2 id="numero-anos-de-mercado">0</h2>
              <p>Anos de mercado</p>
            </section>
            <section className="especialistas">
              <h2 id="numero-especialistas">0</h2>
              <p>Especialistas</p>
            </section>
            <section className="clientes-anuais">
              <h2 id="numero-clientes-anuais">0</h2>
              <p>Clientes anuais</p>
            </section>
            <section className="parcerias">
              <h2 id="numero-parcerias">0</h2>
              <p>Parcerias</p>
            </section>
            <h2 id="planos">Nossos planos</h2>
            <section className="planos">
              <div className="card">
                <div className="content">
                  <h4>Plano Mensal</h4>
                  <h3>R$ 4,99</h3>
                  <p>
                    Assine o nosso <strong>plano mensal</strong> e tenha acesso exclusivo a uma série de
                    funcionalidades que vão ajudar você a se preparar melhor e acompanhar seus resultados
                    nos concursos públicos.
                  </p>
                </div>
                <button className="botao-assinatura">Assine agora!</button>
              </div>
              <div className="card">
                <div className="content">
                  <h4>Plano Semestral</h4>
                  <h3>R$ 24,99</h3>
                  <p>
                    Assine o nosso <strong>plano semestral</strong> e tenha acesso exclusivo a uma série de
                    funcionalidades que vão ajudar você a se preparar melhor e acompanhar seus resultados
                    nos concursos públicos.
                  </p>
                </div>
                <button className="botao-assinatura">Assine agora!</button>
              </div>
              <div className="card">
                <div className="content">
                  <h4>Plano Anual</h4>
                  <h3>R$ 44,99</h3>
                  <p>
                    Assine o nosso <strong>plano Anual</strong> e tenha acesso exclusivo a uma série de
                    funcionalidades que vão ajudar você a se preparar melhor e acompanhar seus resultados
                    nos concursos públicos.
                  </p>
                </div>
                <button className="botao-assinatura">Assine agora!</button>
              </div>
            </section>
          </section>
        </section>
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
      </div>
  );
}


export default App
