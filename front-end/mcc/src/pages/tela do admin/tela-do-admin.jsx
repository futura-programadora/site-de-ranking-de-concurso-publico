import { useState } from 'react'
import React from 'react'


import Documento from '../../assets/documento.png'
import Notificacao from '../../assets/notificacao.png'
import ImgAdmin from '../../assets/usuario-admin.png'
import Imgfooter from '../../assets/logoDoSIte.png'
import Styles from './tela-do-admin.module.css'

function TelaDoAdmin() {
    const [count, setCount] = useState(0)

    return (
        <div className={Styles.containerTelaDoAdmin}>
            <header className={Styles.cabecalhoTelaDoAdmin}>
                <img className={Styles.imgUsuarioAdmin} src={ImgAdmin} alt="" />
                <img src={Notificacao} alt="" />
            </header>
            <section className={Styles.subCabecalho}>
                <section className={Styles.tratamentoDeDados}>
                    <h2>Sistema de tratamento de dados</h2>
                    <section className={Styles.concursos}>
                        <img className={Styles.imgDocumento} src={Documento} alt="" />
                        <select className={Styles.selectConcurso} name="opcoes-concursos" id="opcoes-concursos">
                            <option value="concurso">concurso</option>
                        </select>
                    </section>
                    <section className={Styles.sistemaDeTratamento}>
                        <input
                            className={Styles.tratamento}
                            type="file"
                            name="tratamento"
                            id="tratamento"
                            placeholder="Insira o texto que deseja tratar"
                        />
                        <button className={Styles.tratar} onClick={() => tratarDados()}>
                            Tratar
                        </button>
                    </section>
                </section>
            </section>
            <section className={Styles.usuarios}>
                <h2>Usuários</h2>
                <div className={Styles.todosOsUsuariosLogados}>{/* adicionar parágrafos diferentes a cada usuário usando css e js */}</div>
                <div id="total-de-usuarios"></div>
            </section>
            <section className={Styles.concursosDisponiveis}>
                <h2>Concursos disponíveis</h2>
                <div id="todos-os-concursos">{/* adicionar concursos disponíveis aqui */}</div>
            </section>
            <section className={Styles.adicionar}>
                <section className={Styles.todosOsConcursos}>{/* adicionar concursos disponíveis aqui */}</section>
            </section>
            <section className={Styles.maisInformacoes}>
                <section className={Styles.adicionarConcurso}>
                    <input id="adicionar-concurso" type="text" placeholder="Adicione um novo concurso" />
                    <button onClick={() => adicionarConcurso()}>Adicionar concurso</button>
                </section>
                <section className={Styles.adicionarParceria}>
                    <input type="text" name="parceria" id="parceria" placeholder="Adicionar parceria" />
                    <button onClick={() => adicionarParceria()}>Adicionar parceria</button>
                </section>
                <section className={Styles.adicionarEspecialistas}>
                    <input type="text" name="especialistas" id="especialistas" placeholder="Adicionar especialistas" />
                    <button onClick={() => adicionarEspecialista()}>Adicionar especialista</button>
                </section>
                <section className={Styles.adicionarCargo}>
                    <input type="text" name="cargo" id="cargo" placeholder="Adicionar cargo" />
                    <button onClick={() => adicionarCargo()}>Adicionar cargo</button>
                </section>
                <section className={Styles.estatistica}>
                    <section className={Styles.arquivoDaEstatistica}>
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
            <footer className={Styles.footer}>
                <img className={Styles.logoDoSiteFooter} src={Imgfooter} alt="" />
                <p>Nos siga nas redes sociais. Seu feedback é importante</p>
                <section className={Styles.sociais}>
                    <a className={Styles.rede} href="https://www.instagram.com/minhaclassificacaoconcursos?igsh=eWU5Y3Y0emE3eGgx" target="_blank" rel="noopener noreferrer">
                        <i className="ri-instagram-line"></i>
                    </a>
                    <a className={Styles.rede} href="" target="_blank" rel="noopener noreferrer">
                        <i className="ri-facebook-line"></i>
                    </a>
                    <a className={Styles.rede} href="https://www.tiktok.com/@vencendoosconcursos?_t=8q4czZHV781&_r=1" target="_blank" rel="noopener noreferrer">
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