import { useState, useEffect } from 'react'
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

import Styles from './tela-do-usuario.module.css'

function TelaDoUsuario() {
    const [count, setCount] = useState(0);

    function menuUsuario() {
        const menu = document.querySelector(`.${Styles.menu_usuario}`);
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
        }
    }

    async function fetchFiles() {
        try {
            const response = await fetch(''); // Substitua pela URL da API
            const data = await response.json();
            
            const fileList = document.getElementById('file-list');
            const noFilesMessage = document.getElementById('no-files-message');
    
            if (data.length > 0) {
                data.forEach(file => {
                    const listItem = document.createElement('li');
                    const link = document.createElement('a');
                    link.href = `uploads/${file}`; // Caminho para o arquivo
                    link.download = file; // Indica que é para download
                    link.textContent = file; // Nome do arquivo
                    listItem.appendChild(link);
                    fileList.appendChild(listItem);
                });
            } else {
                noFilesMessage.style.display = 'block'; // Mostra a mensagem se não houver arquivos
            }
        } catch (error) {
            console.error('Erro ao buscar arquivos:', error);
            const noFilesMessage = document.getElementById('no-files-message');
            noFilesMessage.textContent = 'Erro ao carregar arquivos.';
            noFilesMessage.style.display = 'block';
        }
    }

    useEffect(() => {
        fetchFiles();
    }, []);

    return (
        <div className={Styles.containerTelaUsuario}>
            <header className={Styles.cabecalhoTelaUsuario}>
                <img className={Styles.img_usuario} src={Usuario} alt="" onClick={menuUsuario} />
                <div className={Styles.nome_do_concurso} id="concurso"></div>
                <p className={Styles.concursoNome}>nome do concurso</p>

                <div className={Styles.posicao_atual}>
                    <img className={Styles.img_posicao} src={Posicao} alt="" />
                    <p>656</p>
                </div>

                <div className={Styles.menu_usuario}>
                    <div className={Styles.sair_da_conta}>
                        <p>sair da conta</p>
                        <a href="#">
                            <img className={Styles.img_sair} src={Sair} alt="" />
                        </a>
                    </div>

                    <div className={Styles.mais_informacoes}>
                        <div className={Styles.nome_usuario}>nome da pessoa</div>
                        <label htmlFor="concursos">concursos</label>
                        <select name="concursos" id="concursos" className={concurso}>
                            <option value="1"></option>
                        </select>

                        <div className={Styles.inscricao}>
                            <h2>Número de inscrição</h2>
                            <div className={Styles.numero_de_inscricao}>
                                {/* Colocar o número de inscrição do usuário a partir da API */}
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className={Styles.video}>
                <video src={Videouser} controls autoPlay loop></video>
            </div>

            <div className={Styles.informacoes_do_concurso}>
                <div className={Styles.participantes}>
                    <img className={Styles.imagens_informacoes_do_concurso} src={Participantes} alt="" />
                    <h2>Número de participantes</h2>
                    <div className={Styles.numero_de_participantes}>0</div>
                </div>

                <div className={Styles.cargo}>
                    <img className={Styles.imagens_informacoes_do_concurso} src={CargoPretendido} alt="" />
                    <h2>Cargo pretendido</h2>
                    <div className={Styles.cargo_pretendido}>X</div>
                </div>

                <div className={Styles.resultados}>
                    <img className={Styles.imagens_informacoes_do_concurso} src={Resultado} alt="" />
                    <a href="../paginas/resultados-do-usuario.html">Veja suas notas e resultados anteriores</a>
                </div>

                <div className={Styles.estatistica_do_mais_cobrado}>
                    <img src={Estatistica} alt="" />
                    <h2>O que é mais cobrado neste concurso</h2>
                    <ul className={fileList}>
                        <p id="no-files-message" style={{ display: 'none' }}>Nenhum arquivo disponível para download.</p>
                    </ul>
                </div>
            </div>

            <div className={Styles.seu_historico}>
                <h2>Seu histórico</h2>
                <div className={Styles.etapas_anteriores}>
                    {/* Listar todas as etapas que o usuário já passou, a partir dos dados coletados */}
                </div>
            </div>

            <div className={Styles.aptos_proxima_etapa}>
                <h2>Aptos para a próxima etapa</h2>
                <div>Nome do concurso e estado {/* Colocar o nome do concurso e estado */}</div>
                <div className={Styles.grafico}>
                    {/* Fazer o gráfico a partir da porcentagem total de pessoas que passarão para a próxima etapa */}
                </div>
            </div>

            <footer className={Styles.footer}>
                <img className={Styles.logo_do_site_footer} src={Imgfooter} alt="" />
                <p>Nos siga nas redes sociais. Seu feedback é importante</p>
                <div className={Styles.sociais}>
                    <a className={Styles.rede} href="https://www.instagram.com/minhaclassificacaoconcursos?igsh=eWU5Y3Y0emE3eGgx" target="_blank" rel="noopener noreferrer">
                        <i className="ri-instagram-line"></i>
                    </a>

                    <a className={Styles.rede} href="#" target="_blank" rel="noopener noreferrer">
                        <i className="ri-facebook-line"></i>
                    </a>

                    <a className={Styles.rede} href="https://www.tiktok.com/@vencendoosconcursos?_t=8q4czZHV781&_r=1" target="_blank" rel="noopener noreferrer">
                        <i className="ri-tiktok-line"></i>
                    </a>
                </div>
                <p>&copy; Feito por <strong><a href="https://www.facebook.com/share/ZVKE6BK1qLvUh4vJ/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer">@VionTechOfc</a></strong></p>
            </footer>
        </div>
    );
}

export default TelaDoUsuario;