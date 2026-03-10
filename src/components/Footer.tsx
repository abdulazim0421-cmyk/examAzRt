import Container from "../ui/Container"

export default function Footer() {
    return (
        <footer className="bg-black text-white mt-20">
            <Container>

                <div className="py-12 flex justify-between">

                    <div>
                        <h2 className="font-bold text-lg">UNIO</h2>
                        <p className="text-gray-400 mt-2">
                            Digital agency
                        </p>
                    </div>

                    <div className="flex gap-6">
                        <a href="#">Instagram</a>
                        <a href="#">Twitter</a>
                        <a href="#">LinkedIn</a>
                    </div>

                </div>

            </Container>
        </footer>
    )
}