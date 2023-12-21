import background from "../../assets/contact/bg.svg";

export default function ContactUs() {
  return (
    <>
      {/* Mobil */}
      <div className="lg:hidden container-medium flex flex-col items-center justify-center h-screen bg-clr-light">
        <div className="p-8 flex flex-col items-center gap-[.1rem]">
          <h5 className="text-[16px] font-bold text-clr-dark">CONTACT US</h5>
          <h1 className="text-[58px] font-bold text-clr-dark">
            Get in touch today!
          </h1>
          <p className="text-[20px] text-center text-clr-second">
            We know how large objects will act, but things on a small scale
          </p>
          <h3 className="flex flex-col text-[24px] font-bold text-clr-dark">
            Phone: +451 215 215
          </h3>
          <h3 className="flex flex-col text-[24px] font-bold text-clr-dark">
            Fax: +451 215 215
          </h3>
        </div>
        <img
          className="w-full h-auto min-w-[70%] min-h-[70%]"
          src={background}
          alt="img"
        />
      </div>

      {/*Masaüstü */}
      <div className="hidden lg:flex items-center justify-center h-screen bg-clr-light">
        <section className="max-w-screen-xl mx-auto flex">
          <div className="flex-shrink-0 w-1/2 p-8 flex flex-col items-start gap-[1rem] pt-[15%]">
            <h5 className="text-[16px] font-bold text-clr-dark">CONTACT US</h5>
            <h1 className="text-[58px] font-bold text-clr-dark">
              Get in touch today!
            </h1>
            <p className="text-[20px] text-clr-second">
              We know how large objects will act, but things on a small scale
            </p>
            <h3 className="flex flex-col text-[24px] font-bold text-clr-dark">
              Phone: +451 215 215
            </h3>
            <h3 className="flex flex-col text-[24px] font-bold text-clr-dark">
              Fax: +451 215 215
            </h3>
          </div>
          <div className="flex-shrink-0 w-1/2">
            <img
              className="w-full h-auto min-w-[70%] min-h-[70%]"
              src={background}
              alt="img"
            />
          </div>
        </section>
      </div>
    </>
  );
}
