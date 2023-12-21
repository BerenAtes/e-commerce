import background from "../../assets/contact/bg.svg";

export default function ContactUs() {
  return (
    <>
      <div className="container-medium flex items-center justify-center h-screen bg-clr-light">
        <section className="max-w-screen-xl mx-auto flex ">
          <div className="flex-shrink-0 w-1/2 p-8  flex flex-col  items-start gap-[1rem] pt-[8rem] ">
            <h5 className="text-[16px] font-bold text-clr-dark">CONTACT US </h5>
            <h1 className="text-[58px] font-bold text-clr-dark">
              Get in touch today!
            </h1>
            <p className="text-[20px]  text-clr-second">
              We know how large objects will act, but things on a small scale
            </p>
            <h3 className="text-[24px] font-bold text-clr-dark">
              Phone ; +451 215 215{" "}
            </h3>
            <h3 className="text-[24px] font-bold text-clr-dark">
              Fax : +451 215 215
            </h3>
          </div>
          <div className="flex-shrink-0 w-1/2">
            <img
              className="w-full h-auto min-w-[70%]  min-h-[70%]"
              src={background}
              alt="img"
            />
          </div>
        </section>
      </div>
    </>
  );
}
