//
const Form = () => {
  return (
    <section className="">
      <h2>Recibe un presupuesto por tus traducciones.</h2>
      <form className="">
        <input
          type="text"
          placeholder="Persona de contacto"
          required
          className=""
        />
        <input
          type="text"
          placeholder="Correo electronico"
          required
          className=""
        />
        <input type="text" placeholder="Telefono" className="" />
        <input type="text" placeholder="Empresa" className="" />
        <input type="file" placeholder="" className="" />
        <fieldset>
          <label>
            <input type="checkbox" name="privacidad" id="" className="" />{" "}
            Acepto Política de Privacidad
          </label>
        </fieldset>
        <button type="submit" className="">
          Send message
        </button>
      </form>
    </section>
  );
};

export default Form;
