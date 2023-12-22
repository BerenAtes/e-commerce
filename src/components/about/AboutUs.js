import background from "../../assets/about/background.svg";

export default function AboutUs() {
  return (
    <>
      {/* Mobil */}
      <div className="lg:hidden container-medium flex flex-col items-center justify-center h-screen bg-clr-light">
        <div className="p-8 flex flex-col items-center gap-[.1rem]">
          <h5 className="text-[16px] font-bold text-clr-dark">About Company</h5>
          <h1 className="text-[58px] font-bold text-clr-dark">ABOUT US</h1>
          <p className="text-[20px] text-center text-clr-second">
            We know how large objects will act, but things on a small scale
          </p>
        </div>
        <img
          className="w-full h-auto min-w-[70%] min-h-[50%] object-contain"
          src={background}
          alt="img"
        />
      </div>

      {/*Masaüstü */}
      <div className="hidden lg:flex items-center justify-center  bg-clr-light">
        <section className="max-w-screen-xl mx-auto flex m-[3rem]">
          <div className="flex-shrink-0 w-1/2 p-8 flex flex-col items-start gap-[1rem] ">
            <h5 className="text-[16px] font-bold text-clr-dark">
              About Company
            </h5>
            <h1 className="text-[58px] font-bold text-clr-dark">ABOUT US</h1>
            <p className="text-[20px] text-clr-second">
              We know how large objects will act, but things on a small scale
            </p>
            <button className="btn-primary btn-small-wide">
              Get Quote Now
            </button>
          </div>
          <div className="flex-shrink-0 w-1/2">
            <img
              className="w-full h-auto object-cover"
              src={background}
              alt="img"
            />
          </div>
        </section>
      </div>
    </>
  );
}
