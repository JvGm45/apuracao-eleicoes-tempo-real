import React from "react";
import style from'./botao.module.scss'

import logoDiscord from "../../imagens/imagensProjeto/discord-logo-icone.png"

class BotaoFixo extends React.Component {
    render() {
        return (
            <div>
                <a target='_blank' href={"https://discord.gg/dpS4CSB9hU"}><img src={logoDiscord} className={style.discordFixado}/></a>
            </div>
        )
    }
}

export default BotaoFixo;