import { useState } from 'react'
import React from 'react'

import Logo from '../../assets/lupa.png'
import Sair from '../../assets/sair.png'
import Styles from './logar.module.css'

function Logar() {

    /*confirmar se a pessoa ja se cadastrou, se o plano dela está em dia, e so depois de confirmar tudo liberar o usuario para a proxima página */

    return (
        <div className={Styles.containerLogar}>
            <h2 className={Styles.normal2}>Usuário</h2>
            <img src={Logo} alt="Logo" />
            <p>Confirme se seu plano está em dia, caso ele não esteja em dia não será possível o acesso a sua conta</p>
            <form className={Styles.formLogin}>
                <input type="number" name="inscricao" id="inscricao" placeholder="Coloque seu número de inscrição" required /><br />
                <input type="text" name="usuario" id="usuario" placeholder="Nome de usuário" required />
                <button type="submit" className={Styles.logar}>Logar</button>
                <a href="#" ><img className={Styles.sair} src={Sair} alt="Sair" /></a>
            </form>
            <a href="/cadastro">Não tem uma conta? Cadastre-se</a><br />
            <a href="/logar-admin">Logar como administrador</a>
        </div>

    )
}

export default Logar