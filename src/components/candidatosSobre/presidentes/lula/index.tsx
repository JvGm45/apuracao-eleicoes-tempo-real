import React from "react";
import style from'./sobrepresidentes.module.scss'

import bolsonaro from '../../../../../../my-app/src/imagens/presidentes/lule.jpg'

class SobrePresidentes2 extends React.Component {
    render() {
        return (
            <div className={style.divisaoTotal}>
                <h1 className={style.nome}>Lula</h1>
                <div className={style.alinhandoConteudo}>
                <img src={bolsonaro} className={style.imagemCandidato}/>
                <p className={style.alinhandoTexto}>Luiz Inácio da Silva Lula (Lula) nasceu em 27 de outubro de 1945, é um ex-sindicalista, ex-metalúrgico e político brasileiro, filiado ao Partido dos Trabalhadores (PT) e governou o Brasil entre 1 de janeiro de 2003 e 1 de janeiro de 2011.
De origem humilde, migrou ainda criança de Pernambuco para São Paulo com sua família. Foi metalúrgico e sindicalista, época em que recebeu a alcunha “Lula”. Lula foi uma das principais lideranças do movimento Diretas Já, no período da redemocratização, quando iniciou sua carreira política. Elegeu-se em 1986 deputado federal pelo estado de São Paulo com votação recorde. Em 1989 concorreu pela primeira vez à presidência da República, perdendo no segundo turno para Fernando Collor de Mello. Foi candidato a presidente por outras duas vezes, em 1994 e em 1998, perdendo ambas as eleições no primeiro turno para Fernando Henrique Cardoso. Venceu a eleição presidencial de 2002, derrotando José Serra no segundo turno, sendo empossado em janeiro de 2003. Na eleição de 2006, foi reeleito ao vencer no segundo turno contra Geraldo Alckmin.
                </p>
                </div>
                </div>
        )
    }
}

export default SobrePresidentes2;