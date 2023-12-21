import twitter from "../../assets/team/tw.png";
import facebook from "../../assets/team/fb.png";
import instagram from "../../assets/team/ins.png";
import linkedin from "../../assets/team/in.png";

export default function TeamFreeTrial() {
  return (
    <>
      <div className="flex justify-center">
        <section className="text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-clr-dark font-bold">
            Start your 14 days free trial
          </h2>
          <h6 className="text-sm sm:text-base text-clr-second mt-4 sm:mt-6">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent.
          </h6>
          <button className="btn-primary btn-small-wide mt-4 sm:mt-6">
            Try it free now
          </button>
          <div className="flex justify-center mt-4 sm:mt-6">
            <img src={twitter} alt="img" className="p-2"></img>
            <img
              src={facebook}
              alt="img"
              className="p-2 bg-blue-500 rounded-full"
            ></img>
            <img src={instagram} alt="img" className="p-2"></img>
            <img src={linkedin} alt="img" className="p-2"></img>
          </div>
        </section>
      </div>
    </>
  );
}
