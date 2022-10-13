import React from "react";
import style from'./sobrepresidentes.module.scss'

import bolsonaro from '../../../../../../my-app/src/imagens/presidentes/salnorabo.jpg'

class SobrePresidentes extends React.Component {
    render() {
        return (
            <div className={style.divisaoTotal}>
                <h1 className={style.nome}>Jair Messias Bolsonaro</h1>
                <div className={style.alinhandoConteudo}>
                <img src={bolsonaro} className={style.imagemCandidato}/>
                <p className={style.alinhandoTexto}>Foi eleito em outubro de 2018, obteve um total de 57.797.847 dos votos, 55,13% do eleitorado brasileiro. O atual presidente foi candidato e eleito pelo partido PSL (Partido Social Liberal) 
Sua carreira política começou em 1988, quando concorreu à Câmara Municipal do Rio de Janeiro e conseguiu uma vaga no legislativo da cidade, dois anos depois de eleito, conquistou o primeiro dos sete mandatos consecutivos no cargo de deputado federal pelo Rio de Janeiro.
O atual presidente da república nasceu em Campinas (São Paulo) dia 21 de março de 1955, o mesmo é descendente de imigrantes italianos que chegaram ao Brasil depois da segunda guerra mundial. Filho de Percy Geraldo Bolsonaro e de Olinda Bonturi Bolsonaro, Jair é casado com Michelle, com quem teve sua filha chamada Laura. Jair teve também mais quatro filhos, Flávio Bolsonaro, Carlos, Eduardo e Renan
                </p>
                </div>
                </div>
        )
    }
}

export default SobrePresidentes;