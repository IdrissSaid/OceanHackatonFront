import Box from "./Box";
import Button from "./Button";
import ConcertationsList from "./ConcertationsList";

export default function Body () {
    return (
        <section>
            <div className="h-80 bg-gradient-to-r from-dark-blue to-dark-green">
                <div className="p-24">
                    <p className="text-center font-bold text-white text-xl">
                        Participer à la construction de notre territoire<br/>
                        La CINOR organise régulièrement des concertations pour permettre aux citoyens de contribuer au développement de notre territoire
                    </p>
                </div>
                <div className="flex justify-center gap-48">
                    <Box>
                        <h1 className="text-center font-bold text-xl">Voir les<br />Concertations Citoyens</h1>
                        <Button>
                            Consulter
                        </Button>
                    </Box>
                    <Box>
                        <h1 className="text-center font-bold text-xl">Voir les<br />Actualités</h1>
                        <Button>
                            Actualités
                        </Button>
                    </Box>
                </div>
                <section>
                    <ConcertationsList />
                </section>
            </div>
        </section>
    )
}