"use client";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { XMarkIcon, DocumentTextIcon } from "@heroicons/react/24/outline";

const initialValues = {
  nombre: "",
  email: "",
  empresa: "",
  telefono: "",
  acepto: false,
};

const Form = () => {
  const [formValues, setFormValues] = useState(initialValues);
  const [files, setFiles] = useState([]);
  const [rejected, setRejected] = useState([]);
  const [isSending, setIsSending] = useState(false);
  
  function FormDropzone({ className }) {
    const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
      if (acceptedFiles?.length) {
        setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
      }
      if (rejectedFiles?.length) {
        setRejected((prevRejected) => [...prevRejected, ...rejectedFiles]);
      }
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
      maxFiles: 10,
      maxSize: 1024 * 2000,
      accept: {
        "text/*": [".txt", ".csv"],
        "text/html": [".htm", ".html"],
        "application/pdf": [".pdf"],
        "application/msword": [".doc"],
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
          [".docx"],
        "application/vnd.oasis.opendocument.spreadsheet": [".ods"],
        "application/vnd.oasis.opendocument.text": [".odt"],
      },
    });

    return (
      <div {...getRootProps({ className: className })}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Arrastra hasta aqui ...</p>
        ) : (
          <div className="flex flex-col items-center">
            <DocumentTextIcon className="text-gray-400 w-6 pb-1" />
            <p>Arrastra sus archivos aqui (2mb max),</p>
            <p> o haga click para subirlos</p>
          </div>
        )}
      </div>
    );
  }

  const removeFile = (type, name) => {
    if (type === "accepted")
      setFiles((prevFiles) => prevFiles.filter((file) => file.name !== name));
    else
      setRejected((prevRejected) =>
        prevRejected.filter(({ file }) => file.name !== name)
      );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    const isSent = true /*await submitHandler(files, formValues);*/
    if (isSent) {
      setFormValues(initialValues);
      setFiles([]);
      setRejected([]);
      setIsSending(false);
    } else {
      console.log("error during submit. Please try again later");
    }
  };

  const handleFormUpdate = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => {
      if (name === "acepto")
        return { ...prevValues, [name]: !prevValues.acepto };
      else return { ...prevValues, [name]: value };
    });
  };

  const { nombre, email, empresa, telefono, acepto } = formValues;
  return (
    <section className="z-20 py-8 px-5 rounded-3xl bg-white/50 justify-self-end my-2 mx-2 md:mx-10 max-w-md">
      <h2 className="mb-4 text-2xl md:3xl text-gray-700">
        Recibe un presupuesto por tus traducciones.
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col"
      >
        <input
          type="text"
          placeholder="Persona de contacto"
          required
          name="nombre"
          className="mb-3 py-2 px-4 rounded-2xl border border-gray-400"
          value={nombre}
          onChange={handleFormUpdate}
          autoComplete="true"
        />
        <input
          type="email"
          placeholder="Correo electronico"
          required
          name="email"
          className="mb-3 py-2 px-4 rounded-2xl border border-gray-400"
          value={email}
          onChange={handleFormUpdate}
          autoComplete="true"
        />
        <input
          type="text"
          placeholder="Telefono"
          name="telefono"
          className="mb-3 py-2 px-4 rounded-2xl border border-gray-400"
          value={telefono}
          onChange={handleFormUpdate}
        />
        <input
          type="text"
          placeholder="Empresa"
          name="empresa"
          className="mb-3 py-2 px-4 rounded-2xl border border-gray-400"
          value={empresa}
          onChange={handleFormUpdate}
        />
        <FormDropzone className="my-4 py-4 px-4 text-xs text-center text-gray-500 bg-white border-2 border-dashed border-gray-400 rounded-xl" />
        {files.length > 0 && (
          <ul className="pb-3">
            {files.map((file) => (
              <li
                key={file.name}
                className="group text-sm pl-2 flex items-center"
              >
                <span className="font-semibold">
                  {file.name.length > 15
                    ? file.name.substring(0, 16) + "..."
                    : file.name}
                </span>
                <XMarkIcon
                  className="h-4 w-4 inline-block ml-4 text-gray-800 group-hover:text-red-500 cursor-pointer"
                  onClick={() => removeFile("accepted", file.name)}
                />
              </li>
            ))}
          </ul>
        )}
        {rejected.length > 0 ? (
          <>
            <p className="text-sm pb-2">Algun archivo tiene error:</p>
            <ul>
              {rejected.map(({ file, errors }) => (
                <li
                  key={file.name}
                  className="group text-sm pl-2 flex items-center"
                >
                  <span className="italic">
                    {file.name.length > 15
                      ? file.name.substring(0, 16) + "..."
                      : file.name}
                  </span>
                  :{" "}
                  <span className="text-red-500 px-3">
                    {errors[0].code.split("-").join(" ")}
                  </span>
                  <XMarkIcon
                    className="h-4 w-4 inline-block ml-4 text-gray-800 group-hover:text-red-500 cursor-pointer"
                    onClick={() => removeFile("rejected", file.name)}
                  />
                </li>
              ))}
            </ul>
          </>
        ) : null}
        <fieldset className="mb-3 pt-4 pb-2 px-4">
          <label>
            <input
              type="checkbox"
              name="acepto"
              id=""
              className="text-xl"
              required
              checked={acepto}
              onChange={handleFormUpdate}
            />{" "}
            Acepto Política de Privacidad
          </label>
        </fieldset>
        <button
          type="submit"
          disabled={isSending}
          className={`${
            isSending
              ? "bg-green-300 cursor-not-allowed"
              : "bg-green-600 cursor-pointer"
          } px-6 py-3 text-white rounded shadow-xl`}
        >
          Enviar
        </button>
      </form>
    </section>
  );
};

export default Form;
