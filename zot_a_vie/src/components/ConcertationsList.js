import Button from "./Button";
import Pp from "../img/eolienne.jpg"
import { useNavigate } from "react-router-dom";

function Concertation() {
    let navigate = useNavigate();
    const go = () => {
        navigate("/concertation");
    };

    return (
        <div className="min-h-32 flex align-middle rounded-lg shadow-xl">
            <div className="w-48">
                <img src={Pp} alt="" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="grid grid-rows-auto">
                <h1 className="font-bold text-center p-2">Parc Éolien Ofshore</h1>
                <p className="w-96 text-center p-2">Réaliser une étude de potentiel en énergies renouvelables et de récupération sur le territoire</p>
                <div className="flex justify-center p-2">
                    <Button link={go}>En savoir plus</Button>
                </div>
            </div>
        </div>
    )
}

export default function ConcertationsList() {
    return (
        <div className="rounded-lg p-10">
            <h1 className="text-xl font-bold">Concertations Citoyens en cours <a className="underline text-xs font-light decoration-solid" href="#">Voir plus</a></h1>
            <div className="p-5 rounded-lg overflow-scroll grid grid-cols-3 gap-8 shadow-xl">
                <Concertation />
                <Concertation />
                <Concertation />
                <Concertation />
                <Concertation />
                <Concertation />
                <Concertation />
            </div>
        </div>
    );
}