import Form from "./components/Form";
import Contact from "./components/Contact";


export default function Home() {
  return (
    <main className="flex flex-col justify-between text-gray-700">
      
      <div className="hero-section relative h-auto flex flex-col md:flex-row-reverse justify-around py-20">
        <div className="absolute top-0 left-0 bottom-0 right-0 bg-black/40 z-10" />
        <div className="z-20 items-center justify-between text-sm px-2 pt-10 pb-20 text-white md:flex md:flex-col md:justify-end">
          <h1 className="text-3xl md:text-[40px] md:leading-[42px] lg:text-[60px] md:leading-[64px] pb-6 lg:pl-8 font-bold">Traducciones Profesionales en España</h1>
          <h2 className="text-lg lg:text-2xl lg:px-10">Mas de 30 anos de experiencia y miles de clientes nos avala.</h2>
        </div>
        <Form />
      </div>
      <Contact />
      
    </main>
  )
}


