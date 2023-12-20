import background from "../../assets/about/background.svg";

export default function About() {
  return (
    <>
      <div className="container-medium flex h-screen bg-clr-light">
        <section className="max-w-screen-xl mx-auto flex ">
          <div className="flex-shrink-0 w-1/2 p-8  flex flex-col  items-start gap-[1rem] pt-[8rem] ">
            <h5 className="text-[16px] font-bold text-clr-dark">
              About Company{" "}
            </h5>
            <h1 className="text-[58px] font-bold text-clr-dark">ABOUT US</h1>
            <p className="text-[20px]  text-clr-second">
              We know how large objects will act, but things on a small scale
            </p>
            <button className="btn-primary btn-small-wide self-start">
              Get Quote Now
            </button>
          </div>
          <div className="flex-shrink-0 w-1/2">
            <img className="w-auto h-auto " src={background} alt="img" />
          </div>
        </section>
      </div>
    </>
  );
}
