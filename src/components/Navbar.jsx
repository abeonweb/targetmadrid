import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-white flex flex-col justify-center">
      {/* <div className="bg-orange-500 py-1">
          <ul className="flex flex-col lg:flex-row px-3 py-2 text-white text-sm gap-x-4">
          </ul>
        </div> */}
      <nav className="max-w-[1200px] flex items-center justify-between bg-white p-1 text-gray-700">
        <Image
          width={180}
          height={100}
          src={"/logo.png"}
          alt=""
          className="w-24 h-auto px-2 py-2 self-center"
        />
        <ul className="flex flex-col hidden lg:inline-flex lg:flex-row p-4">
          <li className="px-3">
            <Link href={""}>Traducciones</Link>
          </li>
          <li className="px-3">
            <Link href={""}>Interpretaciones</Link>
          </li>
          <li className="px-3">
            <Link href={""}>Traducciones Juradas</Link>
          </li>
          <li className="px-3">
            <Link href={""}>Contacto</Link>
          </li>
          <li className="px-3">
            <Link href={""}>Quienes somos</Link>
          </li>
        </ul>
      <div id="menuToggle" className="lg:hidden pr-4">
        <input id="checkbox" type="checkbox" />
        <label className="toggle" htmlFor="checkbox">
          <div className="bar bar--top"></div>
          <div className="bar bar--middle"></div>
          <div className="bar bar--bottom"></div>
        </label>
      </div>
      </nav>
    </header>
  );
};

export default Navbar;
