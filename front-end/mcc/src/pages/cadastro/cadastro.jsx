import { useState } from 'react'
import React from 'react'

import Logo from '../../assets/lupa.png'
import Sair from '../../assets/sair.png'
import './cadastro.module.css'

function Cadastro() {
    const [count, setCount] = useState(0)

    return (
        <div className="container">
            <h2 className='normal-2'>Cadastre-se</h2>
            <img src={Logo} alt="Lupa com gráfico" />
            <p>Escolha um plano para continuar o cadastro</p>
            <form className="login">
                <select name="planos" id="planos">
                    <option value="mensal">Mensal R$ 4,99</option>
                    <option value="semestral">Semestral R$ 24,99</option>
                    <option value="anual">Anual R$ 44,99</option>
                </select>
                <input type="text" name="nome-completo" id="nome-completo" required placeholder="Coloque o nome completo" />
                <input type="number" name="inscricao" id="inscricao" placeholder="Coloque seu número de inscrição" required />
                <input type="text" name="usuario" id="usuario" placeholder="Nome de usuário" required />
                <input type="password" name="senha" id="senha" placeholder="Escolha uma senha" required />
                <button>Cadastrar-se</button>
                <a href="#" onClick={() => window.history.back()}><img src={Sair} className="sair" alt="Sair" /></a>
            </form>
            <a href="/logar">Já tem uma conta? Faça o login</a><br />
            <a href="/logar-admin">Logar como administrador</a>
        </div>
    )
}

export default Cadastro