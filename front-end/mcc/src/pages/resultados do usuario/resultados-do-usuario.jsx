import { useState } from 'react'
import React from 'react'

import Imgfooter from '../../assets/logoDoSIte.png'
import './resultados-do-usuario.module.css'

function ResultadosDoUsuario() {
    const [count, setCount] = useState(0)
    
    return (
        <div className="container">
                <a href="javascript:history.back()" className="back-icon">
                <span className="material-icons">arrow_back</span> {/* Ícone de voltar */}
                </a>

            <section className="resultados-recentes">
                <h2>Resultados recentes</h2>
                <div className="resultados">
                    <div className="resultado">{/* adicionar um desse a cada resultado, colocar os últimos 5 resultados */}
                        <div className="nome-da-prova"></div>
                        <div className="notas"></div>
                        <div className="data"></div>
                    </div>
                </div>
            </section>

            <section className="resultados-antigos">
                <h2>Resultados antigos</h2>
                <div className="resultados-anteriores">
                    <div className="resultado">
                        <div className="nome-da-prova-antiga"></div>
                        <div className="notas-antigas"></div>
                        <div className="data-antiga"></div>
                    </div>
                </div>
            </section>

            <section className="Cronograma-de-estudos">
                <h2>Cronograma de estudos</h2>
                <div className="resultados">
                    <div className="nome-da-prova"></div>
                    <div className="notas"></div>
                    <div className="media"></div>
                </div>
                <div className="oque-estudar-mais">Você deve estudar mais ....</div>
            </section>

            <footer>
                <img class="logo-do-site-footer" src={Imgfooter} alt=""/>
                <p>Nos siga nas redes sociais.Seu feedback é importante</p>
                <section class="sociais">
                    <a class="rede" href="https://www.instagram.com/minhaclassificacaoconcursos?igsh=eWU5Y3Y0emE3eGgx" target="_blank"><i class="ri-instagram-line"></i></a>

                    <a class="rede" href="" target="_blank"><i class="ri-facebook-line"></i></a>

                    <a class="rede" href="https://www.tiktok.com/@vencendoosconcursos?_t=8q4czZHV781&_r=1" target="_blank"><i class="ri-tiktok-line"></i></a>
                </section>
                <p>&copy;Feito por <strong><a href="https://www.facebook.com/share/ZVKE6BK1qLvUh4vJ/?mibextid=qi2Omg" target="_blank">@VionTechOfc</a></strong></p>
            </footer>
        </div>
    )
}

export default ResultadosDoUsuario