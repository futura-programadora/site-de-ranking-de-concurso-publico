import { useState } from 'react';
import React from 'react';

import Imgfooter from '../../assets/logoDoSIte.png';
import Styles from './resultados-do-usuario.module.css';

function ResultadosDoUsuario() {
    const [materias, setMaterias] = useState([]); // Estado para armazenar as matérias
    const [novaMateria, setNovaMateria] = useState({ nome: '', nota: '' }); // Estado para a nova matéria a ser adicionada
    const [tempoDisponivel, setTempoDisponivel] = useState(0); // Estado para o tempo de estudo disponível
    const [mostraTempoDisponivel, setMostraTempoDisponivel] = useState(false); // Controla a exibição do campo de tempo disponível
    const [resultado, setResultado] = useState(null); // Estado para armazenar o resultado do cálculo
    const [materiaMaisNecessitada, setMateriaMaisNecessitada] = useState(null); // Armazena a matéria que mais precisa de estudo

    // Função para adicionar uma nova matéria à lista
    const adicionarMateria = () => {
        setMaterias([...materias, novaMateria]); // Adiciona a nova matéria ao estado
        setNovaMateria({ nome: '', nota: '' }); // Reseta o estado da nova matéria
    };

    // Função para lidar com mudanças nos inputs da nova matéria
    const handleChange = (e) => {
        const { name, value } = e.target; // Obtém o nome e valor do input
        setNovaMateria({ ...novaMateria, [name]: value }); // Atualiza o estado da nova matéria
    };

    // Função para lidar com mudanças no tempo disponível
    const handleTempoChange = (e) => {
        setTempoDisponivel(e.target.value); // Atualiza o estado do tempo disponível
    };

    // Função para calcular a distribuição do tempo de estudo
    const calcularEstudo = () => {
        // Verifica se há matérias e se o tempo disponível é válido
        if (materias.length === 0 || tempoDisponivel <= 0) return;

        // Cálculo da necessidade de estudo para cada matéria (quanto menor a nota, maior a necessidade)
        let materiasComNota = materias.map((materia) => {
            const necessidadeDeEstudo = 100 - parseFloat(materia.nota); // Necessidade de estudo inversamente proporcional à nota
            return { ...materia, necessidadeDeEstudo };
        });

        // Soma todas as unidades de necessidade de estudo
        const totalNecessidade = materiasComNota.reduce((acc, materia) => acc + materia.necessidadeDeEstudo, 0);

        // Distribuição proporcional do tempo de estudo disponível entre as matérias
        const tempoPorMateria = materiasComNota.reduce((acc, materia) => {
            acc[materia.nome] = ((materia.necessidadeDeEstudo / totalNecessidade) * tempoDisponivel).toFixed(2); // Cálculo do tempo por matéria
            return acc;
        }, {});

        // Encontrar a matéria com maior necessidade de estudo
        const materiaMaisNecessitada = materiasComNota.reduce((prev, current) => {
            return (prev.necessidadeDeEstudo > current.necessidadeDeEstudo) ? prev : current; // Compara para encontrar a matéria mais necessitada
        });

        // Atualiza o estado com a matéria que mais precisa de estudo e os resultados calculados
        setMateriaMaisNecessitada(materiaMaisNecessitada.nome);
        setResultado({ tempoPorMateria });
    };

    return (
        <div className={Styles.containerResultadosUsuario}>
            <a href="javascript:history.back()" className={Styles.iconeSair}>
                <span className="material-icons">arrow_back</span> {/* Ícone de voltar */}
            </a>

            <section className={Styles.resultadosRecentes}>
                <h2>Resultados recentes</h2>
                <div className={Styles.resultados}>
                    <div className={Styles.resultado}>
                        <div className={Styles.nomeDaProva}></div>
                        <div className={Styles.notas}></div>
                        <div className={Styles.data}></div>
                    </div>
                    {/* Adicionar mais resultados aqui */}
                </div>
            </section>

            <section className={Styles.resultadosAntigos}>
                <h2>Resultados antigos</h2>
                <div className={Styles.resultadosAnteriores}>
                    <div className={Styles.resultado}>
                        <div className={Styles.nomeDaProvaAntiga}></div>
                        <div className={Styles.notasAntigas}></div>
                        <div className={Styles.dataAntiga}></div>
                    </div>
                </div>
            </section>

            <section className={Styles.cronogramaDeEstudos}>
                <h2>Cronograma de estudos</h2>
                <div className={Styles.adicionarMateria}>
                    <input
                        type="text"
                        name="nome"
                        placeholder="Nome da matéria"
                        value={novaMateria.nome}
                        onChange={handleChange} // Chama a função de manipulação ao mudar o input
                    />
                    <input
                        type="number"
                        name="nota"
                        placeholder="Nota"
                        value={novaMateria.nota}
                        onChange={handleChange} // Chama a função de manipulação ao mudar o input
                    />
                    <button onClick={adicionarMateria}>Adicionar Matéria</button> {/* Botão para adicionar a matéria */}
                </div>
                <div className={Styles.resultados}>
                    {materias.map((materia, index) => (
                        <div key={index} className={Styles.materia}>
                            <div className={Styles.nomeDaProva}>{materia.nome}</div>
                            <div className={Styles.notas}>Nota: {materia.nota}</div>
                        </div>
                    ))}
                </div>
                {materias.length > 0 && !mostraTempoDisponivel && (
                    <div className={Styles.finalizar}>
                        <button onClick={() => setMostraTempoDisponivel(true)}>Adicionar Tempo de Estudo Disponível</button> {/* Botão para mostrar o campo de tempo disponível */}
                    </div>
                )}
                {mostraTempoDisponivel && (
                    <div className={Styles.tempoDisponivel}>
                        <input
                            type="number"
                            name="tempoDisponivel"
                            placeholder="Tempo disponível (horas)"
                            value={tempoDisponivel}
                            onChange={handleTempoChange} // Chama a função de manipulação ao mudar o input
                        />
                        <button onClick={calcularEstudo}>Calcular Estudo</button> {/* Botão para calcular o tempo de estudo */}
                    </div>
                )}
                {resultado && (
                    <div className={Styles.oqueEstudarMais}>
                        <h3>Distribuição do tempo de estudo:</h3>
                        <ul>
                            {Object.entries(resultado.tempoPorMateria).map(([materia, tempo]) => (
                                <li key={materia}>{materia}: {tempo} horas</li> // Exibe a distribuição do tempo de estudo por matéria
                            ))}
                        </ul>
                        <h3>Matéria que mais precisa de estudo: {materiaMaisNecessitada}</h3> {/* Exibe a matéria que mais precisa de estudo */}
                    </div>
                )}
            </section>

            <footer>
                <img className={Styles.logoDoSiteFooter} src={Imgfooter} alt="Logo do Site" />
                <p>Nos siga nas redes sociais. Seu feedback é importante</p>
                <section className={Styles.sociais}>
                    <a className={Styles.rede} href="https://www.instagram.com/minhaclassificacaoconcursos?igsh=eWU5Y3Y0emE3eGgx" target="_blank" rel="noopener noreferrer">
                        <i className="ri-instagram-line"></i>
                    </a>
                    <a className={Styles.rede} href="#" target="_blank" rel="noopener noreferrer">
                        <i className="ri-facebook-line"></i>
                    </a>
                    <a className={Styles.rede} href="https://www.tiktok.com/@vencendoosconcursos?_t=8q4czZHV781&_r=1" target="_blank" rel="noopener noreferrer">
                        <i className="ri-tiktok-line"></i>
                    </a>
                </section>
                <p>&copy; Feito por <strong><a href="https://www.facebook.com/share/ZVKE6BK1qLvUh4vJ/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer">@VionTechOfc</a></strong></p>
            </footer>
        </div>
    );
}

export default ResultadosDoUsuario;
