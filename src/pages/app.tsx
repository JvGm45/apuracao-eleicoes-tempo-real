import style from './app.module.scss';

import CandidatosSP from "../components/candidatos/governadorSP"
import Presidentes from "../components/candidatos/presidentesBR";
import GovernadorMS from "../components/candidatos/governadorMS";
import GovernadorES from "../components/candidatos/governadorES";
import GovernadorPB from "../components/candidatos/governadorPB";
import GovernadorAL from "../components/candidatos/candidatosAL";
import GovernadorAM from "../components/candidatos/candidatosAM";
import GovernadorPE from "../components/candidatos/candidatosPE";
import GovernadorBA from "../components/candidatos/candidatosBA";
import GovernadorSC from "../components/candidatos/candidatosSC";
import GovernadorSE from "../components/candidatos/candidatosSE";
import BotaoFixo from "../components/botaoDiscord";
import Footer from "../components/footer";
import Header from "../components/header";


function App() {
    document.title = 'Eleições 2022'
    
    return (
        <>

        <Header />

        <section className={style.root}> 
        <BotaoFixo />

        <Presidentes />
        <CandidatosSP />
        <GovernadorMS />
        <GovernadorES />
        <GovernadorPB />
        <GovernadorAL />
        <GovernadorAM />
        <GovernadorBA />
        <GovernadorPE />
        <GovernadorSC />
        <GovernadorSE />

        <Footer />
        </section>
            </>

    )
    }

export default App;
