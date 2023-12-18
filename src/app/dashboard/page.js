'use client'
import { useState } from 'react';
import Link from "next/link";
import { getSubmissions, getNewSubmissions } from "@/components/utils/getSubmissions";
import { redirect } from "next/navigation";

const URL = process.env.NEXT_PUBLIC_CLOUDINARY_URL;

const Dashboard = ({ isLoggedIn = false }) => {
  const [docs, setDocs] = useState([]);
  const getAllDocs = async () => {
    const allDocs = await getSubmissions()
    setDocs(allDocs);
  }

  const getNewDocs = async () => {
    const allDocs = await getNewSubmissions()
    setDocs(allDocs);
  }

  if (!isLoggedIn) {
    redirect("/login")
  }

  return (
    <main className="min-h-screen">
      <h1 className="text-3xl text-center p-8 font-semibold">Dashboard</h1>
      <div className="flex justify-around mb-6 max-w-lg">
        <button onClick={getAllDocs} className="mt-10 px-8 py-4 underline text-blue-700 min-w-[120px]">Todos</button>
        <button onClick={getNewDocs} className="mt-10 px-8 py-4 underline text-blue-700 min-w-[120px]">Nuevos</button>
      </div>
      <ul className="grid-cols-5 text-center hidden md:grid">
        <li className="p-1">Nombre</li>
        <li className="p-1">Empresa</li>
        <li className="p-1">Email</li>
        <li className="p-1">Telefono</li>
        <li className="p-1">Archivos</li>
      </ul>
      {
        docs && <ul>
          {docs.map(({ nombre, nuevo, telefono, empresa, uid, files }, i) => {
            return <li key={i + telefono} className="mx-2 mb-3 p-2 border-2 border-blue-800">
              <ul>
                <li className="p-1 flex flex-col justify-around"><span className="md:hidden">Nombre</span>{nombre}</li>
                <li className="p-1 flex flex-col justify-around"><span className="md:hidden">Empresa</span>{empresa}</li>
                <li className="p-1 flex flex-col justify-around"><span className="md:hidden"></span>{nuevo}</li>
                <li className="p-1 flex flex-col justify-around"><span className="md:hidden"></span>{telefono}</li>
                {/* <li className="p-1 flex flex-col justify-around"><span className="md:hidden"></span>{files.length > 0 && <Link href={`/:${uid}`} className="hover:underline text-blue-500">Ver Archivos</Link>}</li> */}
                <li className="p-1 flex flex-col justify-around">
                  <span className="md:hidden"></span>

                  {files.length > 0 ? <ul>{files.map(file => <li key={file.name}><a href={file.url} download>{file.name}</a></li>)}</ul> : <p>No hay archivos</p>}
                </li>
              </ul>
            </li>
          })}
        </ul>
      }

    </main>
  )
}

export default Dashboard