import React from "react";
import style from'./botaobackhome.module.scss'

import botaoHome from '../../imagens/imagensProjeto/homebutton.png'

class BotaoBackHome extends React.Component {
    render() {
        return (
            <div className={style.colocandoProLado}>
            <a href={"./"} className={style.home}><img className={style.imagem} src={botaoHome}/></a>
            </div>
        )
    }
}

export default BotaoBackHome;