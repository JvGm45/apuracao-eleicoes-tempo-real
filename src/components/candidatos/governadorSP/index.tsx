import axios from "axios";
import React from "react";
import style from "../../../pages/app.module.scss"

import poste from "../../../imagens/govsp/poste.jpg"
import tarcisio from "../../../imagens/govsp/tarcisio.jpg"

function CandidatosSP() {

    //São Paulo

        //Urnas apuradas
        const [postSP, setPostSP] = React.useState();

        //Nome dos candidatos
        const [post1SP, setPost1SP] = React.useState();
        const [post2SP, setPost2SP] = React.useState();
    
        //Quantia de votos
        const [QvSP, postQvSP] = React.useState();
        const [Qv2SP, postQv2SP] = React.useState();
    
        const [Qv3SP, postQv3SP] = React.useState();
        const [Qv4SP, postQv4SP] = React.useState();


    function candidatosSP() {
        axios.get(`https://resultados.tse.jus.br/oficial/ele2022/546/dados-simplificados/sp/sp-c0003-e000546-r.json`).then((response) => {
        
            //Urnas apuradas
            setPostSP(response.data.pst);

            //Nome dos candidatos
            setPost1SP(response.data.cand[0].nm)
            setPost2SP(response.data.cand[1].nm)

            //Quantia de votos
            postQvSP(response.data.cand[0].pvap)
            postQv2SP(response.data.cand[1].pvap)

            postQv3SP(response.data.cand[0].vap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."))
            postQv4SP(response.data.cand[1].vap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."))

        });
    }


    React.useEffect(() => {
        const interval = setInterval(() => { candidatosSP(); }, 2000)
        return () => clearInterval(interval)
      }, []);

      
        return (
            <section>
            <div className={style.divisaoTotal}>
            <div className={style.titulosGovernadores}>
                <h2 className={style.inicioDaPagina}>Candidatos a governador de São Paulo.</h2>
                <p className={style.inicioDaPagina}>Urnas apuradas: {postSP}%</p>
            </div>

            <div className={style.governadoresSP}>

            <div className={style.divisaoCandidatos}>
            <img src={tarcisio} className={style.imagemTamanhoErrado}></img>
            <p className={style.informacoes}>O candidato {post1SP}</p>
            <p className={style.informacoes}>Tem {QvSP}% com {Qv3SP} votos</p>
            </div>
            
            <div className={style.divisaoCandidatos}>
            <img src={poste} className={style.imagemTamanhoErrado}></img>
            <p className={style.informacoes}>O candidato {post2SP}</p>
            <p className={style.informacoes}>Tem {Qv2SP}% com {Qv4SP} votos</p>
            </div>

            </div>
            <a className={style.saibaMaisCandidatos} href={"/governadorsp"}>Saiba mais sobre os candidatos.</a>
            </div>
    </section>
        )
        }

export default CandidatosSP;
