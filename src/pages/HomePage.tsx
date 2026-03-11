import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import LogosSection from "../components/LogosSection";
import ServicesHeader from "../components/ServicesHeader.tsx";
import ServicesGrid from "../components/ServicesGrid.tsx";

export default function HomePage() {
    return (
        <>
            <Navbar />
            <Hero/>
            <LogosSection/>
            <ServicesHeader/>
            <ServicesGrid/>
            <Footer />
        </>
    )
}