import Navbar from "../components/Navbar";
import Form from "../components/Form";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col justify-between text-gray-700">
      <Navbar />
      <div className="hero-section relative h-auto flex flex-col md:flex-row-reverse justify-around py-20">
        <div className="absolute top-0 left-0 bottom-0 right-0 bg-black/40 z-10" />
        <div className="z-20 items-center justify-between text-sm px-2 py-10 text-white lg:flex lg:flex-col lg:justify-end">
          <h1 className="text-3xl md:text-[40px] md:leading-[42px] lg:text-[60px] md:leading-[64px] pb-3 lg:pl-8 font-bold">Traducciones Profesionales en España</h1>
          <h2 className="text-lg lg:text-2xl">Mas de 30 anos de experiencia y miles de clientes nos avala.</h2>
        </div>
        <Form />
      </div>
      <Contact />
      <Footer />
    </main>
  )
}
// Image by <a href="https://www.freepik.com/free-photo/medium-shot-woman-holding-project_11311098.htm#page=2&query=woman%20with%20documents&position=39&from_view=search&track=ais&uuid=11a90d94-1bd6-4bec-82c8-cb23e3466405">Freepik</a>

