import Logos from "../components/Logos";

import background from "../assets/about/background.svg";
import background2 from "../assets/about/background2.svg";
import UserCardAbout from "../components/about/UserCardAbout";

export default function About() {
  return (
    <>
      <div>
        <section>
          <div>
            <img
              className="w-full h-full object-cover"
              src={background}
              alt="img"
            />
          </div>
          <div>
            <h5>About Company </h5>
            <h1>ABOUT US</h1>
            <p>
              We know how large objects will act, but things on a small scale
            </p>
            <button className="btn-primary btn-small-wide self-start">
              Get Quote Now
            </button>
          </div>
        </section>
        <section>
          <div>
            <div>
              <p>Problems trying</p>
              <h3>
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent.
              </h3>
            </div>
            <div>
              <p>
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics{" "}
              </p>
            </div>
          </div>
        </section>
        <section>
          <UserCardAbout />
        </section>
        <section>
          <h2>Big Companies Are Here</h2>
          <p>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
          <Logos />
        </section>
        <section>
          <div>
            <img
              className="w-full h-full object-cover"
              src={background2}
              alt="img"
            />
          </div>
          <div>
            <h5>WORK WITH US</h5>
            <h2>Now Let’s grow Yours</h2>
            <p>
              The gradual accumulation of information about atomic and
              small-scale behavior during the first quarter of the 20th{" "}
            </p>
            <button className="btn-primary btn-small-wide self-start">
              Button
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
