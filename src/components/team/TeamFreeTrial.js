import twitter from "../../assets/team/tw.png";
import facebook from "../../assets/team/fb.png";
import instagram from "../../assets/team/ins.png";
import linkedin from "../../assets/team/in.png";

export default function TeamFreeTrial() {
  return (
    <>
      <div>
        <section>
          <h2>Start your 14 days free trial</h2>
          <h6>
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent.
          </h6>
          <button>Try it free now</button>
          <div>
            <img src={twitter} alt="img"></img>
            <img src={facebook} alt="img"></img>
            <img src={instagram} alt="img"></img>
            <img src={linkedin} alt="img"></img>
          </div>
        </section>
      </div>
    </>
  );
}
