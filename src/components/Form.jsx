"use client"
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

function FormDropzone({className}) {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps({className: className})}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </div>
  );
}

const Form = () => {
  return (
    <section className="z-20 py-8 px-5 rounded-3xl bg-white/50 justify-self-end my-2 mx-2 md:mx-10">
      <h2 className="mb-4 text-2xl md:3xl text-gray-700">
        Recibe un presupuesto por tus traducciones.
      </h2>
      <form className="flex flex-col">
        <input
          type="text"
          placeholder="Persona de contacto"
          required
          className="mb-3 py-2 px-4 rounded-2xl border border-gray-400"
        />
        <input
          type="text"
          placeholder="Correo electronico"
          required
          className="mb-3 py-2 px-4 rounded-2xl border border-gray-400"
        />
        <input
          type="text"
          placeholder="Telefono"
          className="mb-3 py-2 px-4 rounded-2xl border border-gray-400"
        />
        <input
          type="text"
          placeholder="Empresa"
          className="mb-3 py-2 px-4 rounded-2xl border border-gray-400"
        />
        <FormDropzone className="my-4 py-4 px-4 text-xs text-center text-gray-500 bg-white border-2 border-dashed border-gray-500 rounded-xl" />
        <fieldset className="mb-3 py-2 px-4">
          <label>
            <input type="checkbox" name="privacidad" id="" className="" />{" "}
            Acepto Política de Privacidad
          </label>
        </fieldset>
        <button
          type="submit"
          className="bg-green-600 px-6 py-3 text-white rounded"
        >
          Send message
        </button>
      </form>
    </section>
  );
};

export default Form;
