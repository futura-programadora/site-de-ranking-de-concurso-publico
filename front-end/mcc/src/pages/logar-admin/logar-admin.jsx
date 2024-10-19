import { useState } from 'react'
import React from 'react'

import Logo from '../../assets/lupa.png'
import Sair from '../../assets/sair.png'
import './logar-admin.module.css'

function LogarAdmin() {
    const [count, setCount] = useState(0)

    return (
        <div className="container">
            <h2>Administrador</h2>
            <img src={Logo} alt="Lupa com gráfico" />
            <p>Confirme se seu plano está em dia, caso ele não esteja em dia não será possível o acesso a sua conta</p>
            <form className="login">
                <input type="text" name="user-admin" id="user-admin" placeholder="Coloque seu usuário" required />
                <input type="password" name="senha-admin" id="senha-admin" placeholder="Senha do admin" required />
                <a href="#" onClick={() => window.history.back()}><img src={Sair} className="sair" alt="Sair" /></a>
            </form>
            <a href="/logar">Logar como usuário</a>
        </div>
    )
}

export default LogarAdmin