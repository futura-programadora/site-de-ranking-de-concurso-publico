import { useState } from 'react'
import React from 'react'

import Logo from '../../assets/lupa.png'
import Sair from '../../assets/sair.png'
import Styles from './cadastro.module.css'



function Cadastro() {
    const [count, setCount] = useState(0)

    return (
        <div className={Styles.containerCadastro}>
            <h2 className={Styles.normal2}>Cadastre-se</h2>
            <img src={Logo} alt="Lupa com gráfico" />
            <p>Escolha um plano para continuar o cadastro</p>
            <form className={Styles.login}>
                <select name="planos" id="planos">
                    <option value="mensal">Mensal R$ 4,99</option>
                    <option value="semestral">Semestral R$ 24,99</option>
                    <option value="anual">Anual R$ 44,99</option>
                </select>
                <input type="text" name="nome-completo" id="nome-completo" required placeholder="Coloque o nome completo" />
                <input type="number" name="inscricao" id="inscricao" placeholder="Coloque seu número de inscrição" required />
                <input type="text" name="usuario" id="usuario" placeholder="Nome de usuário" required />
                <input type="password" name="senha" id="senha" placeholder="Escolha uma senha" required />
                <button type="submit">Cadastrar-se</button>
                <a href="#" ><img className={Styles.sair} src={Sair} alt="Sair" /></a>
            </form>
            <a className={Styles.linkCadastro} href="/logar">Já tem uma conta? Faça o login</a><br />
            <a className={Styles.linkCadastro} href="/logar-admin">Logar como administrador</a>
        </div>
    )
}

export default Cadastro