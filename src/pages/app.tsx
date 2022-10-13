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
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SobrePresidentes from '../components/candidatosSobre/presidentes/bolsonaro';
import SobrePresidentes2 from '../components/candidatosSobre/presidentes/lula';
import SobreGovSP from '../components/candidatosSobre/governadorSP/tarcisio';
import SobreGovSP2 from '../components/candidatosSobre/governadorSP/haddad';
import BotaoBackHome from '../components/voltarHome';
import SobreProjeto from '../components/sobreProjeto';


function App() {
    document.title = 'Eleições 2022'
    return (

        <><Router>
            <Routes>
                <Route path="/" element={<>
                    <Header /><section className={style.root}>
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
                </>} />
            </Routes>
        </Router><Router>
                <Routes>
                    <Route path="/presidentes" element={<>
                        <BotaoBackHome />
                        <Header /><section className={style.root}>
                            <BotaoFixo />

                            <SobrePresidentes />
                            <SobrePresidentes2 />

                            <Footer />
                        </section>
                    </>} />
                </Routes>
            </Router><Router>
                <Routes>
                    <Route path="/governadorsp" element={<>
                        <BotaoBackHome />
                        <Header /><section className={style.root}>
                            <BotaoFixo />

                            <SobreGovSP />
                            <SobreGovSP2 />

                            <Footer />
                        </section>
                    </>} />
                </Routes>
            </Router><Router>
                <Routes>
                    <Route path="/informacoes" element={<>
                        <BotaoBackHome />
                        <Header /><section className={style.root}>
                            <BotaoFixo />

                            <SobreProjeto />

                            <Footer />
                        </section>
                    </>} />
                </Routes>
            </Router></>

    )
    }

export default App;
function useRouteMatch() {
    throw new Error('Function not implemented.');
}

