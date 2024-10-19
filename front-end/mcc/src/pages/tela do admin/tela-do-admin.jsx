import { useState } from 'react'
import React from 'react'


import Documento from '../../assets/documento.png'
import Notificacao from '../../assets/notificacao.png'
import ImgAdmin from '../../assets/usuario-admin.png'
import Imgfooter from '../../assets/logoDoSIte.png'
import './tela-do-admin.css'

function TelaDoAdmin() {
    const [count, setCount] = useState(0)

    return (
        <div className="container">
            <header className="cabecalho">
                <img className="img-usuario-admin" src={ImgAdmin} alt="" />
                <img src={Notificacao} alt="" />
            </header>
            <section className="sub-cabecalho">
                <section className="tratamento-de-dados">
                    <h2>Sistema de tratamento de dados</h2>
                    <section className="concursos">
                        <img className="img-documento" src={Documento} alt="" />
                        <select className="select-concurso" name="opcoes-concursos" id="opcoes-concursos">
                            <option value="concurso">concurso</option>
                        </select>
                    </section>
                    <section className="sistema-de-tratamento">
                        <input
                            className="tratamento"
                            type="file"
                            name="tratamento"
                            id="tratamento"
                            placeholder="Insira o texto que deseja tratar"
                        />
                        <button className="tratar" onClick={() => tratarDados()}>
                            Tratar
                        </button>
                    </section>
                </section>
            </section>
            <section className="usuarios">
                <h2>Usuários</h2>
                <div id="todos-os-usuarios-logados">{/* adicionar parágrafos diferentes a cada usuário usando css e js */}</div>
                <div id="total-de-usuarios"></div>
            </section>
            <section className="concursos-disponiveis">
                <h2>Concursos disponíveis</h2>
                <div id="todos-os-concursos">{/* adicionar concursos disponíveis aqui */}</div>
            </section>
            <section className="adicionar">
                <section className="todos-os-concursos">{/* adicionar concursos disponíveis aqui */}</section>
            </section>
            <section className="mais-informacoes">
                <section className="adicionar-concurso">
                    <input id="adicionar-concurso" type="text" placeholder="Adicione um novo concurso" />
                    <button onClick={() => adicionarConcurso()}>Adicionar concurso</button>
                </section>
                <section className="adicionar-parceria">
                    <input type="text" name="parceria" id="parceria" placeholder="Adicionar parceria" />
                    <button onClick={() => adicionarParceria()}>Adicionar parceria</button>
                </section>
                <section className="adicionar-especialistas">
                    <input type="text" name="especialistas" id="especialistas" placeholder="Adicionar especialistas" />
                    <button onClick={() => adicionarEspecialista()}>Adicionar especialista</button>
                </section>
                <section className="estatistica">
                    <section className="arquivo-da-estatistica">
                        <label htmlFor="estatistica">O que é mais cobrado no concurso</label><br />
                        <input type="file" name="estatistica" id="estatistica" />
                        <select name="onde-vai-a-estatistica" id="onde-vai-a-estatistica">
                            <option value="1">concurso</option>
                            {/* adicionar opções dinamicamente com js de acordo com os concursos que têm no sistema do site */}
                        </select>
                        <button onClick={() => enviarEstatistica()}>Disponibilizar</button>
                    </section>
                </section>
            </section>
            <footer className="footer">
                <img className="logo-do-site-footer" src={Imgfooter} alt="" />
                <p>Nos siga nas redes sociais. Seu feedback é importante</p>
                <section className="sociais">
                    <a className="rede" href="https://www.instagram.com/minhaclassificacaoconcursos?igsh=eWU5Y3Y0emE3eGgx" target="_blank" rel="noopener noreferrer">
                        <i className="ri-instagram-line"></i>
                    </a>
                    <a className="rede" href="" target="_blank" rel="noopener noreferrer">
                        <i className="ri-facebook-line"></i>
                    </a>
                    <a className="rede" href="https://www.tiktok.com/@vencendoosconcursos?_t=8q4czZHV781&_r=1" target="_blank" rel="noopener noreferrer">
                        <i className="ri-tiktok-line"></i>
                    </a>
                </section>
                <p>
                    &copy;Feito por <strong><a href="https://www.facebook.com/share/ZVKE6BK1qLvUh4vJ/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer">@VionTechOfc</a></strong>
                </p>
            </footer>
        </div>
    )
}

export default TelaDoAdmin