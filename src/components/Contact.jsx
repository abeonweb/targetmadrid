import Image from "next/image";

const Contact = () => {
  return (
    <section className="py-20 px-2 bg-gradient-to-b from-white via-gray-400 to-white flex flex-col">
      <article className="bg-white shadow-2xl h-1/2 pt-8 pb-2">
        <div className="text-center px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold pb-5">
            Contacte con nosotros
          </h2>
          <p className="pb-3">de Lunes a Viernes</p>
          <p className="pb-3">9:00 a 19:00</p>
        </div>
        <div>
          <ul>
            <li>
              <div className="mx-2">
                <div className="w-8 mx-auto pt-10 pb-5">
                  <Image className="" src={"/phone.png"} alt="" width={64} height={64}/>
                </div>
                <p className="text-3xl font-bold text-center px-10 pb-10">
                  91 564 68 03
                </p>
              </div>
            </li>
            <li>
              <div className="border-b-2 border-b-orange-500 pb-10 mx-2">
              <div className="w-8 mx-auto pt-10 pb-5">
                  <Image className="" src={"/email.png"} alt="" width={64} height={64}/>
                </div>
                <p className="text-2xl text-center font-semibold">
                  info@targetmadrid.com
                </p>
              </div>
            </li>
          </ul>
          <div className="pt-10">
            {/* address and google map */}
              <div className="mx-2">
                <div className="w-12 mx-auto pb-5">
                  <Image className="" src={"/location.png"} alt="" width={64} height={64}/>
                </div>
            <p className="pb-10 px-3 text-xl text-center font-semibold">Santiago Bernabéu 4 S-1 28036 Madrid</p>
            </div>
            <div className="w-full h-60 p-[4px]">
              <iframe
                width="100%"
                height="100%"
                src="https://maps.google.com/maps?width=100%25&amp;height=100%&amp;hl=en&amp;q=calle%20Santiago%20Bernab%C3%A9u%204,%2028036%20Madrid+(Target%20Translations)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Contact;
