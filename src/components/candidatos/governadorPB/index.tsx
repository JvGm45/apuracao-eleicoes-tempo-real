import axios from "axios";
import React, { Component } from "react";
import style from "../../../pages/app.module.scss"

import candpb from "../../../imagens/govpb/candpb.jpg"
import candpb2 from "../../../imagens/govpb/candpb2.jpg"
import { render } from "@testing-library/react";

// class Candidates extends Component {

function CandidatosPB() {

    //São Paulo

        //Urnas apuradas
        const [post, setPost] = React.useState(0);

        //Nome dos candidatos
        const [post1, setPost1] = React.useState(0);
        const [post2, setPost2] = React.useState(0);
    
        //Quantia de votos
        const [Qv, postQv] = React.useState(0);
        const [Qv2, postQv2] = React.useState(0);
    
        const [Qv3, postQv3] = React.useState(0);
        const [Qv4, postQv4] = React.useState(0);


    function candidatos() {
        axios.get(`https://resultados.tse.jus.br/oficial/ele2022/546/dados-simplificados/pb/pb-c0003-e000546-r.json`).then((response) => {
        
            //Urnas apuradas
            setPost(response.data.pst);

            //Nome dos candidatos
            setPost1(response.data.cand[0].nm)
            setPost2(response.data.cand[1].nm)

            //Quantia de votos
            postQv(response.data.cand[0].pvap)
            postQv2(response.data.cand[1].pvap)

            postQv3(response.data.cand[0].vap)
            postQv4(response.data.cand[1].vap)


            // console.log(response.data)
            // console.log(response.data.cand[1].nm)

        });
    }


    React.useEffect(() => {
        const interval = setInterval(() => { candidatos(); }, 2000)
        return () => clearInterval(interval)
      }, []);
 
        return (

            <section>
            <div className={style.divisaoTotal}>
            <div className={style.titulosGovernadores}>
                <h2 className={style.inicioDaPagina}>Candidatos a governador da Paraíba.</h2>
                <p className={style.inicioDaPagina}>Urnas apuradas: {post}%</p>
            </div>

            <div className={style.governadoresSP}>

            <div className={style.divisaoCandidatos}>
            <img src={candpb} className={style.imagemTamanhoErrado}></img>
            <p className={style.informacoes}>O candidato {post1}</p>
            <p className={style.informacoes}>Tem {Qv}% e {Qv3} votos</p>
            </div>
            
            <div className={style.divisaoCandidatos}>
            <img src={candpb2} className={style.imagemTamanhoErrado}></img>
            <p className={style.informacoes}>O candidato {post2}</p>
            <p className={style.informacoes}>Tem {Qv2}% e {Qv4} votos</p>
            </div>

            </div>
            </div>
    </section>
        )
        }

export default CandidatosPB;
