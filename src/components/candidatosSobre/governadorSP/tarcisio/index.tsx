import React from "react";
import style from'./sobregovsp.module.scss'

import tarcisio from '../../../../../../my-app/src/imagens/govsp/tarcisio.jpg'

class SobreGovSP extends React.Component {
    render() {
        return (
            <div className={style.divisaoTotal}>
                <h1 className={style.nome}>Tarcisio</h1>
                <div className={style.alinhandoConteudo}>
                <img src={tarcisio} className={style.imagemCandidato}/>
                <p className={style.alinhandoTexto}>Tarcísio Gomes de Freitas nasceu no Rio de Janeiro, em 19 de junho de 1975, filho de Amaury Vieira Freitas e Maria Alice Gomes Freitas. 

Bacharelou-se em ciências militares pela Academia Militar de Agulhas Negras (AMAN) no ano de 1996 e passou a atuar como oficial do Exército, na arma de engenharia. Ficou no posto até 2002, quando concluiu a graduação em engenharia civil, pelo Instituto Militar de Engenharia (IME). A partir de então, tornou-se engenheiro do Exército. 

Fez MBA Executivo em gerenciamento de projetos no ano de 2003 pela Fundação Getúlio Vargas (FGV). Em 2004, cursou uma especialização em aplicações militares pela Escola de Aperfeiçoamento de Oficiais.  

De novembro de 2005 e junho de 2006, serviu na Missão das Nações Unidas para Estabilização no Haiti (MINUSTAH) como chefe da seção técnica da Companhia de Engenharia. 
                </p>
                </div>
                </div>
        )
    }
}

export default SobreGovSP;