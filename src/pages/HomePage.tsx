import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import LogosSection from "../components/LogosSection";
import ServicesHeader from "../components/ServicesHeader.tsx";
import ServicesGrid from "../components/ServicesGrid.tsx";
import WhyChooseHeader from "../components/WhyChooseHeader.tsx";
import WhyChooseGrid from "../components/WhyChooseGrid.tsx";
import TestimonialsHeader from "../components/TestimonialsHeader.tsx";
import TestimonialsGrid from "../components/TestimonialsGrid.tsx";

export default function HomePage() {
    return (
        <>
            <Navbar />
            <Hero/>
            <LogosSection/>
            <ServicesHeader/>
            <ServicesGrid/>
            <WhyChooseHeader/>
            <WhyChooseGrid/>
            <TestimonialsHeader/>
            <TestimonialsGrid/>
            <Footer />
        </>
    )
}