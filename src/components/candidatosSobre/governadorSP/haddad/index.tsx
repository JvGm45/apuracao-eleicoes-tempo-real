import React from "react";
import style from'./sobregovsp.module.scss'

import haddad from '../../../../../../my-app/src/imagens/govsp/poste.jpg'

class SobreGovSP2 extends React.Component {
    render() {
        return (
            <div className={style.divisaoTotal}>
                <h1 className={style.nome}>Haddad</h1>
                <div className={style.alinhandoConteudo}>
                <img src={haddad} className={style.imagemCandidato}/>
                <p className={style.alinhandoTexto}>Fernando Haddad nasceu em São Paulo, no dia 25 de janeiro de 1963, Filho de Khalil Haddad e de Norma Thereza Goussain Haddad.

Graduou-se em direito em 1985, concluiu mestrado em economia em 1990 e doutorado em filosofia em 1996. Todas essas atividades foram realizadas na Universidade de São Paulo (USP). Exerceu a advocacia, e a partir de 1990 foi professor de ciência política na USP.

Filiou-se ao Partido dos Trabalhadores (PT) em 1983. Então envolvido com o movimento estudantil, foi eleito presidente do centro acadêmico de sua faculdade em 1985.

Marta Suplicy foi eleita prefeita de São Paulo nas eleições municipais de 2000, pela legenda do PT. Durante a gestão, Haddad foi convidado para atuar como chefe de gabinete da Secretaria de Finanças e Desenvolvimento Econômico da Prefeitura, então sob o comando de João Sayad. Ocupou o cargo entre os anos de 2001 e 2003, e enquanto chefe de gabinete chegou a exercer interinamente a função de secretário.
                </p>
                </div>
                </div>
        )
    }
}

export default SobreGovSP2;