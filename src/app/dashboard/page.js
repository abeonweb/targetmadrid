'use client'
import { useState } from 'react';
import { getSubmissions, getNewSubmissions } from "@/components/utils/getSubmissions.utils";
import { redirect } from "next/navigation";
import { CheckCircleIcon, CloudArrowDownIcon, TrashIcon } from "@heroicons/react/20/solid";


const Dashboard = ({ isLoggedIn = true }) => {
  const [docs, setDocs] = useState([]);

  const getAllDocs = async () => {
    const allDocs = await getSubmissions()
    setDocs(allDocs);
  }

  const getNewDocs = async () => {
    const allDocs = await getNewSubmissions()
    setDocs(allDocs);
  }

  const getContentType = (name)=>{
    switch(name){
      case name.includes('pdf'):
        return 'application/pdf';
      case name.includes('odt'):
        return 'application/vnd.oasis.opendocument.text';
      default:
        return 'text/plain';
    }
  }

  const downloadFile = (file)=>{
    const contentType = getContentType(file.name);
    fetch(file.url, {
      method:"GET",
      headers: {
        "Content-type": contentType,
        "Access-Control-Allow-Origin":"http://localhost:3000/, *"
      }
    })
    .then(res => res.blob())
    .then(blob => {
      const url = window.URL.createObjectURL(new Blob([blob]));

      const link = document.createElement('a');
      link.href = url;
      link.download = file.name;

      document.body.appendChild(link);

      link.click();

      link.parentNode.removeChild(link);
    })

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
      {
        docs && <ul className="mx-1">
          {docs.map(({ nombre, nuevo, telefono, empresa, uid, files }) => {
            return <li key={uid} className="mb-2 border-2 border-gray-500 rounded shadow-xl max-w-xl">
              <ul>
                {/* <li className="py-1 flex flex-col justify-around"><div className="pl-2 border-b border-gray-500 md:hidden"></div><div className="pl-2 border-b-2 border-gray-700 md:hidden">{nuevo}</div></li> */}
                <li className="flex flex-col justify-around"><div className="pl-2 py-2 border-b border-gray-500 text-xs font-semibold">Nombre</div><div className="pl-2 py-2 border-b-2 border-gray-700">{nombre}</div></li>
                <li className="flex flex-col justify-around"><div className="pl-2 py-2 border-b border-gray-500 text-xs font-semibold">Empresa</div><div className="pl-2 py-2 border-b-2 border-gray-700">{empresa}</div></li>
                <li className="flex flex-col justify-around"><div className="pl-2 py-2 border-b border-gray-500 text-xs font-semibold">Telefono</div><div className="pl-2 py-2 border-b-2 border-gray-700">{telefono}</div></li>
                {/* <li className="p-1 flex flex-col justify-around"><span className="md:hidden"></span>{files.length > 0 && <Link href={`/:${uid}`} className="hover:underline text-blue-500">Ver Archivos</Link>}</li> */}
                <li className="py-1 flex flex-col justify-around">
                  <div className="pl-2 py-2 border-b border-gray-500 text-xs font-semibold">Archivos</div>

                  {files.length > 0 ? (
                    <ul>
                      {files.map((file, i) => {
                        return <li key={i + file.name} className="mb-1 p-2 border-b border-gray-300">
                          <button onClick={()=>downloadFile(file)} className="text-sm text-blue-500 text-normal cursor-pointer">
                            {file.isNew && <CheckCircleIcon className="w-4 text-blue-500"/>}
                          {file.name}</button>
                          <CloudArrowDownIcon className="w-4 text-gray-600"/>
                          <TrashIcon className="w-4 text-gray-600"/>

                        </li>
                      }
                      )}</ul>)
                    : <p className="p-2">No hay archivos</p>
                  }
                </li>
              </ul>
            </li>
          })}
        </ul>
      }

    </main>
  )
}

export default Dashboard;