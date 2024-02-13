import Image from "next/image";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-2 bg-gradient-to-b from-blue-100 via-blue-300 via-blue-500 to-gray-200 flex flex-col">
      <article className="bg-white shadow-2xl h-1/2 pt-8 pb-2 lg:pt-16 lg:pb-10 lg:mx-10 urounded">
        <div className="text-center px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold pb-5">
            Contacte con nosotros
          </h2>
          <p className="font-semibold text-lg lg:text-xl pb-3">de Lunes a Viernes</p>
          <p className="font-semibold text-lg lg:text-xl pb-3">9:00 a 19:00</p>
        </div>
        <div className="flex flex-col lg:flex-row">
          <ul className="text-center border-b-2 border-orange-500 mx-4 md:mx-8 lg:border-b-0 lg:w-1/2 lg:flex lg:flex-col lg:justify-center">
            <li>
              <div className="mx-2">
                <div className="w-8 mx-auto pt-10 pb-5">
                  <Image
                    className=""
                    src={"/phone.png"}
                    alt=""
                    width={64}
                    height={64}
                  />
                </div>
                <p className="text-3xl font-bold pb-10">
                  <a href="tel:+34915646803">+34 91 564 68 03</a>
                </p>
              </div>
            </li>
            <li>
              <div className=" pb-10 ">
                <div className="w-8 mx-auto pt-10 pb-5">
                  <Image
                    className=""
                    src={"/email.png"}
                    alt=""
                    width={64}
                    height={64}
                  />
                </div>
                <p className="text-2xl font-semibold">
                  <a href="mailto:info@targetmadrid.com">
                    info@targetmadrid.com
                  </a>
                </p>
              </div>
            </li>
          </ul>

          <div className="pt-10 pb-6 lg:pb-1 border-orange-500 lg:border-l-[3px] lg:my-10 lg:w-3/5">
            {/* address and google map */}
            <div className="mx-auto">
              <div className="w-12 mx-auto pb-5">
                <Image
                  className=""
                  src={"/location.png"}
                  alt=""
                  width={64}
                  height={64}
                />
              </div>
              <p className="pb-10 px-4 text-xl text-center font-semibold">
                Calle de Santiago Bernabéu 4 S-1, 28036 Madrid
              </p>
            </div>
            <div className="w-full h-60 lg:h-[420px] px-4 lg:px-8 lg:pb-8 mx-auto">
              {/* <iframe
                width="100%"
                height="100%"
                src="https://maps.google.com/maps?width=100%25&amp;height=100%&amp;hl=en&amp;q=calle%20Santiago%20Bernab%C3%A9u%204,%2028036%20Madrid+(Target%20Translations)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              /> */}
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Contact;
