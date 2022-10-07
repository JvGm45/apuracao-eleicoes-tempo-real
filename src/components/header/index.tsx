import React from "react";
import style from'./header.module.scss'

import ibagem from '../../imagens/imagensProjeto/eleicoes22.png'

class Header extends React.Component {
    render() {
        return (
            <div className={style.textoHeader}>
                <img src={ibagem} className={style.imagemHeader}></img>
                <div className={style.divSeparacao}>
                <p className={style.titulo}>Eleições 2022</p>
                </div>
                </div>
        )
    }
}

export default Header;