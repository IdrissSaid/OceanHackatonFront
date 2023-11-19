import React, { useState } from 'react';
import MapComponent from '../components/Map/Map.js';
import ButtonScroll from "../components/ButtonScroll";
import Button from "../components/Button";
import { useNavigate } from 'react-router-dom';

function Star({ initialRating = 0, onRatingChange })
{
        const [rating, setRating] = useState(initialRating);

        const handleStarClick = (selectedRating) => {
            setRating(selectedRating);
            if (onRatingChange) {
            onRatingChange(selectedRating);
            }
        };
        return (
            <span>
                {[1, 2, 3, 4, 5].map((star) => (
                    <span
                    key={star}
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleStarClick(star)}
                    >
                    {star <= rating ? '★' : '☆'}
                    </span>
                ))}
            </span>
        );
}

function Vote({children}) {
    return (
        <div className=' w-full flex items-center flex-col h-full'>
            <div className=' h-4/5 flex items-center justify-center flex-col'>
                <h4 className=' my-3'>Environement {<Star />}</h4>
                <h4 className=' my-3'>Social {<Star />}</h4>
                <h4 className=' my-3'>Budget {<Star />}</h4>
            </div>
            {children}
        </div>
    )
}

function Info({page, children}) {
    if (page === 0) {
        return (
            <div className="w-full flex items-center justify-center flex-col">
                <div className="text-center w-1/2 flex align-middle justify-center flex-col">
                    <p className='py-5'>La CINOR s’est engagée au travers de son Plan Climat-Énergie Territorial (PCAET) à mener des actions tendant vers l’utilisation rationnelle de l’énergie, et à réduire ou à minima stabiliser ses consommations énergétiques.</p>
                    <p className='py-5'>La présente étude s’inscrit dans le cadre de l’action 1.1 prévue au PCAET : « Réaliser une étude de potentiel en énergies renouvelables et de récupération sur le territoire ». Lien vers le PCAETLa CINOR a choisi la SPL pour l’accompagner dans la réalisation de cette action via un contrat dédié.</p>
                </div>
                {children}
            </div>
        )
    }
    if (page === 1){
        return (
            <div>
                <div className="w-full grid grid-rows-2">
                    <div className="block">
                        <h1 className="text-center text-2xl">Production Électrique de l’Éolienne</h1>
                    </div>
                    <div className="block">
                        <h1 className="text-center text-2xl">Emprunte Carbone</h1>
                    </div>
                </div>
                <div className="w-full flex justify-center">
                    <table>
                        <li className="text-xl">Parc éolien Saint - Suzanne</li>
                        <li className="text-xl"></li>
                        <li className="text-xl">Parc éolien Saint - Rose</li>
                    </table>
                </div>
                {children}
            </div>
        )
    }
    return (<Vote>{children}</Vote>)
}

export default function Concertation() {

    const navigate = useNavigate();
    const go = () => {
        navigate('/')
    }

    let [page, setPage] = useState(0)

    let title = [
        "Etude du potentiel énergies marines renouvelables",
        "Production Électrique de l’Éolien CINOR 2023",
        "Vote"
    ]

    function changePage(pageNumber, set) {
        if (page + pageNumber === 3)
            return
        if (set === true)
            setPage(pageNumber)
        else
            if (page + pageNumber >= 0)
                setPage(page + pageNumber)
    }

    return (
        <div className="">
            <section id="0" className="h-screen">
                <div className="bg-bg w-full h-2/3 bg-no-repeat bg-cover relative rounded-xl shadow-2xl">
                    <div class="absolute bottom-0 bg-black/20 w-full h-24 flex justify-center items-center rounded-xl">
                        <h1 class="text-white font-semibold text-4xl text-center">L’éolien le future de la production électrique de la CINOR</h1>
                    </div>
                </div>
                <div className="p-5 flex justify-center items-center">
                    <p className="text-center text-3xl">
                        Lorem ipsum dolor:<br />
                        consectetur adipiscing elit.<br />
                        Integer congue lacus orci, id posuere ante mattis vel.<br />
                        euismod leo interdum egestas vel in augue.<br />
                    </p>
                </div>
                <div className="w-screen flex justify-center">
                    <ButtonScroll onClick={() => {
                        changePage(0, true)
                    }} scrollTo="1">Participer</ButtonScroll>
                </div>
            </section>
            <section id="1" className="h-screen px-3 bg-CINOR-dark-green text-white">
                <div className="h-28 flex justify-center items-center">
                    <h1 className="text-3xl font-bold">{title[page]}</h1>
                </div>
                <div className="grid grid-cols-2 w-full h-1/2">
                    <div className="flex justify-center items-center">
                        <MapComponent />
                    </div>
                    <div className="">
                        <Info page={page}>
                            <div className=" mt-40 flex justify-center items-end gap-8">
                                { page !== 0 ?
                                    <ButtonScroll onClick={() => {
                                        changePage(-1, false)
                                    }}>Précédent</ButtonScroll> : <span></span>
                                }
                                { title[page] !== "Vote" ?
                                    <ButtonScroll onClick={() => {
                                        changePage(1, false)
                                    }}>Suivant</ButtonScroll> :
                                    <Button link={go} className=''>Send</Button>
                                }
                            </div>
                        </Info>
                    </div>
                </div>
            </section>
            <div className="grid grid-rows-4 gap-1 fixed top-1/2 right-3">
                <div className=" bg-slate-400 w-3 h-3 rounded-full"></div>
                <div className=" bg-primary w-3 h-3 rounded-full"></div>
            </div>
        </div>
    )
}