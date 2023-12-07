import Navbar from "../components/Navbar";
import Form from "../components/Form";
import Footer from "../components/Footer";
import Contacto from "../components/Contacto";

export default function Home() {
  return (
    <main className="flex flex-col justify-between">
      <Navbar />
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1>Traducciones en Madrid</h1>
        <h2 className="subheading">Mas de 30 anos de experiencia y miles de clientes nos avala</h2>
        <Form />
      </div>
      <Contacto />
      <Footer />
    </main>
  )
}
