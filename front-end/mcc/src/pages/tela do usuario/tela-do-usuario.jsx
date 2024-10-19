import { useState } from 'react'
import React from 'react'

import Imgfooter from '../../assets/logoDoSIte.png'
import Usuario from '../../assets/usuario.png'
import Posicao from '../../assets/posicao.png'
import Sair from '../../assets/sair.png'
import Videouser from '../../assets/mccok (1).mp4'
import Participantes from '../../assets/numero_de_participantes.png'
import CargoPretendido from '../../assets/cargo_pretendido.png'
import Resultado from '../../assets/resultados.png'
import Estatistica from '../../assets/estatistica.png'

function TelaDoUsuario() {
    const [count, setCount] = useState(0)

    return (
        <div className="container">
            <header className="cabecalho">
                <img
                    className="img-usuario"
                    src={Usuario}
                    alt=""
                    
                />

                <div className="nome-do-concurso" id="concurso"></div>
                <p className="concurso">nome do concurso</p>
                {/* Retirar esse parágrafo e colocar o nome do concurso usando o JS e a API */}

                <div className="posicao-atual">
                    <img className="img-posicao" src={Posicao} alt="" />
                    <p>656</p>
                </div>

                <div className="menu-usuario">
                    <div className="sair-da-conta">
                        <p>sair da conta</p>
                        <a href="#">
                            <img
                                className="img-sair"
                                src={Sair}
                                alt=""
                            />
                        </a>
                    </div>

                    <div className="mais-informacoes">
                        <div className="nome-usuario">nome da pessoa</div>
                        {/* Colocar o nome da pessoa aqui */}
                        <label htmlFor="concursos">concursos</label>
                        <select name="concursos" id="concursos">
                            <option value="1"></option>
                        </select>

                        <div className="inscricao">
                            <h2>Número de inscrição</h2>
                            <div className="numero-de-inscricao">
                                {/* Colocar o número de inscrição do usuário a partir da API */}
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="video">
                <video src={Videouser} controls autoPlay loop></video>
            </div>

            <div className="informacoes-do-concurso">
                <div className="participantes">
                    <img
                        className="imagens-informacoes-do-concurso"
                        src={Participantes}
                        alt=""
                    />
                    <h2>Número de participantes</h2>
                    <div className="numero-de-parcicipantes">0</div>
                </div>

                <div className="cargo">
                    <img
                        className="imagens-informacoes-do-concurso"
                        src={CargoPretendido}
                        alt=""
                    />
                    <h2>Cargo pretendido</h2>
                    <div className="cargo-pretendido">X</div>
                </div>

                <div className="resultados">
                    <img
                        className="imagens-informacoes-do-concurso"
                        src={Resultado}
                        alt=""
                    />
                    <a href="../paginas/resultados-do-usuario.html">Veja suas notas e resultados anteriores</a>
                </div>

                <div className="estatistica-do-mais-cobrado">
                    <img src={Estatistica} alt="" />
                    <h2>O que é mais cobrado neste concurso</h2>
                    <ul id="file-list">
                        <p id="no-files-message" style={{ display: 'none' }}>Nenhum arquivo disponível para download.</p>
                    </ul>
                </div>
            </div>

            <div className="seu-historico">
                <h2>Seu histórico</h2>
                <div className="etapas-anteriores">
                    {/* Listar todas as etapas que o usuário já passou, a partir dos dados coletados */}
                </div>
            </div>

            <div className="aptos-proxima-etapa">
                <h2>Aptos para a próxima etapa</h2>
                <div>Nome do concurso e estado {/* Colocar o nome do concurso e estado */}</div>
                <div className="grafico">
                    {/* Fazer o gráfico a partir da porcentagem total de pessoas que passarão para a próxima etapa */}
                </div>
            </div>

            <footer className="footer">
                <img className="logo-do-site-footer" src={Imgfooter} alt="" />
                <p>Nos siga nas redes sociais. Seu feedback é importante</p>
                <div className="sociais">
                    <a className="rede" href="https://www.instagram.com/minhaclassificacaoconcursos?igsh=eWU5Y3Y0emE3eGgx" target="_blank" rel="noopener noreferrer">
                        <i className="ri-instagram-line"></i>
                    </a>

                    <a className="rede" href="#" target="_blank" rel="noopener noreferrer">
                        <i className="ri-facebook-line"></i>
                    </a>

                    <a className="rede" href="https://www.tiktok.com/@vencendoosconcursos?_t=8q4czZHV781&_r=1" target="_blank" rel="noopener noreferrer">
                        <i className="ri-tiktok-line"></i>
                    </a>
                </div>
                <p>&copy; Feito por <strong><a href="https://www.facebook.com/share/ZVKE6BK1qLvUh4vJ/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer">@VionTechOfc</a></strong></p>
            </footer>
        </div>
    )
}

export default TelaDoUsuario