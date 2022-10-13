import React from "react";
import style from'./sobreprojeto.module.scss'

class SobreProjeto extends React.Component {
    render() {
        return (
            <div className={style.divisaoTotal}>
                <h1 className={style.nome}>Por que o projeto é importante para mim?</h1>
                <div className={style.alinhandoConteudo}>
                <p className={style.alinhandoTexto}>
                    O projeto é um projeto "divisor de águas" para mim. Atualmente eu havia criado projetos apenas utilizando tecnologias como HTML e CSS, e algumas coisas básicas usando node (Como por exemplo um bot no discord). 
                </p>
                <h1 className={style.nome}>De onde veio a idéia?</h1>
                <p className={style.alinhandoTexto}>
                    No dia das eleições, um amigo meu comentou sobre a API do site do TSE comigo e eu resolvi fazer um bot que apuraria em tempo real e enviaria estes dados ao Discord para mim, após o primeiro turno como eu havia feito algo super corrido eu resolvi transformar a ideia em algo muito maior, melhorei o bot do discord (Você pode conferir o tão falado bot clicando na logo do discord logo ao canto direito da sua tela) e resolvi tentar algo maior, que é este website criado usando a tecnologia React e também fiz utilizando TypeScript.
                </p>
                <h1 className={style.nome}>Experiências e desafios:</h1>
                <p className={style.alinhandoTexto}>
                   Bem, depois que eu havia feito parte do website faltava eu hospedar ele, e aí recorri a plataforma "netlify". Eu já havia usado antes a plataforma para hospedar um website meu criado usando html e css, porém para hospedar um website feito com react foi um pouco mais complicado. Tive de aprender a usar Routes para criar diversas páginas no Website, também tive que aprender a configurar melhor as opçÕes do netlify e até mesmo melhorei minha usabilidade de Git.
                </p>
                <h1 className={style.nome}>Sobre o design do Website:</h1>
                <p className={style.alinhandoTexto}>
                    Bem, eu acredito que o design do website não seja dos melhores, tentei usar as cores do Brasil para representar porém não acredito que o design esteja perfeito (E nem a responsividade do website)
                </p>
                </div>
                </div>
        )
    }
}


export default SobreProjeto;