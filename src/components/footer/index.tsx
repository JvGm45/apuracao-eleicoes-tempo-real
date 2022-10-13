import React from "react";
import style from'./footer.module.scss'

import logoGithub from '../../imagens/imagensProjeto/logogithub.png'

class Footer extends React.Component {
    render() {
        return (
            <footer>
            <div className={style.footer}>
                <div className={style.informacoes}>
                    <div className={style.infos}>
                <p className={style.informacoestxt}>Desenvolvido por</p>
                <p className={style.informacoestxt}>JvGm45</p>
                </div>
                </div>

                <div className={style.referencias}>
                <a  target='_blank' href={'https://github.com/JvGm45'}><img src={logoGithub} className={style.referenciasPessoais}/></a>
                </div>

                <div className={style.referencias}>
                <a className={style.informacoesPage} href='/informacoes'>Clique para saber mais sobre o projeto.</a>
                </div>

            </div>
            </footer>
        )
    }
}

export default Footer;