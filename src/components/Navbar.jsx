import Image from "next/image"
import Link from 'next/link'

const Navbar = () => {
  return (
    <header>
        <div className="bg-yellow-700 py-5">
          <ul className="flex flex-col lg:flex-row p-4">
            <li><Link href={""}>Contacto</Link></li>
            <li><Link href={""}>Quienes Somos</Link></li>
          </ul>
        </div>
        <nav className="flex items-center bg-white p-10 text-gray-700">
          <Image width={150} height={50} src={""} alt="" className="self-center"/>
          <ul className="flex flex-col lg:flex-row p-4">
            <li className="px-3"><Link href={""}>Traducciones</Link></li>
            <li className="px-3"><Link href={""}>Interpretaciones</Link></li>
            <li className="px-3"><Link href={""}>Traducciones Juradas</Link></li>
          </ul>
        </nav>
    </header>
  )
}

export default Navbar;