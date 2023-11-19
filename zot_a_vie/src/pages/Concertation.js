import React from 'react';
import MapComponent from '../components/Map/Map.js';
import ButtonScroll from "../components/ButtonScroll";


export default function Concertation() {
    return (
        <div className="">
            <section id="1" className="h-screen p-8">
                <div className="bg-bg w-full h-2/3 bg-no-repeat bg-cover relative rounded-xl shadow-2xl">
                    <div class="absolute bottom-0 bg-black/20 w-full h-24 flex justify-center items-center rounded-xl">
                        <h1 class="text-white font-semibold text-4xl text-center"> L’éolien le future de la production électrique de la CINORD </h1>
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
                    <ButtonScroll scrollTo="2">Participer</ButtonScroll>
                </div>
            </section>
            <section id="2" className="h-screen px-3">
                <div className="h-28 flex justify-center items-center">
                    <h1 className="text-3xl font-bold">Production Électrique de l’Éolien CINOR 2023</h1>
                </div>
                <div className="p-3 grid grid-cols-2 gap-4 w-full h-4/5">
                    <div className="flex justify-center items-center">
                        <MapComponent />
                    </div>
                    <div className="grid grid-rows-3 py-10">
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
                        <div className="relative bottom-0 flex justify-center items-end gap-8">
                            <ButtonScroll scrollTo="1">Précédent</ButtonScroll>
                            <ButtonScroll scrollTo="3">Précédent</ButtonScroll>
                        </div>
                    </div>
                </div>
            </section>
            <section id="3" className="h-screen px-3">

            </section>
            <div className="grid grid-rows-4 gap-1 fixed top-1/2 right-3">
                <div className=" bg-slate-400 w-3 h-3 rounded-full"></div>
                <div className=" bg-primary w-3 h-3 rounded-full"></div>
                <div className=" bg-slate-400 w-3 h-3 rounded-full"></div>
                <div className=" bg-slate-400 w-3 h-3 rounded-full"></div>
            </div>
        </div>
    )
}