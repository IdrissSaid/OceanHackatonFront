import { useEffect } from "react";
import Body from "../components/Body";
import Header from "../components/Header";

export default function Home () {
    useEffect(() => {
        const currentVisits = localStorage.getItem('totalVisits') || 0;
        const newVisits = parseInt(currentVisits, 10) + 1;
        localStorage.setItem('totalVisits', newVisits.toString());
    }, []);
    return (
    <div>
        <Header />
        <Body />
    </div>
    )
}