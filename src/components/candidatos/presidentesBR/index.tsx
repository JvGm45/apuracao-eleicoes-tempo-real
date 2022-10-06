import axios from "axios";
import React from "react";
import style from "../../../pages/app.module.scss"

import lula from "../../../imagens/presidentes/lule.jpg"
import bolsonaro from "../../../imagens/presidentes/salnorabo.jpg"

function Presidentes() {

    //Presidentes

        //Urnas apuradas
        const [post, setPost] = React.useState();

        //Nome dos candidatos
        const [post1, setPost1] = React.useState();
        const [post2, setPost2] = React.useState();
    
        //Quantia de votos

        const [Qv, postQv] = React.useState();
        const [Qv2, postQv2] = React.useState();
    
        const [Qv3, postQv3] = React.useState();
        const [Qv4, postQv4] = React.useState();


    function candidatos() {
        axios.get(`https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/br/br-c0001-e000544-r.json`).then((response) => {

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

            // setInterval(candidatos, 5000);
            console.log('Função executada')
        });
    }

    React.useEffect(() => {
      const interval = setInterval(() => { candidatos(); }, 2000)
      return () => clearInterval(interval)
    }, []);

    console.log(Qv)  
    
        return (
            <section>
            <div className={style.titulosGovernadores}>
                <h2 className={style.inicioDaPagina}>Candidatos a presidência do Brasil.</h2>
                <p className={style.inicioDaPagina}>Urnas apuradas: {post}%</p>
            </div>

            <div className={style.governadoresSP}>

            <div>
            <img src={lula} className={style.imagemTamanhoErrado}></img>
            <p className={style.informacoes}>O candidato {post1}</p>
            <p className={style.informacoes}>Tem {Qv}% e {Qv3} votos</p>
            </div>
            
            <div>
            <img src={bolsonaro} className={style.imagemTamanhoErrado}></img>
            <p className={style.informacoes}>O candidato {post2}</p>
            <p className={style.informacoes}>Tem {Qv2}% e {Qv4} votos</p>
            </div>

            </div>
    </section>
        )
        }

export default Presidentes;