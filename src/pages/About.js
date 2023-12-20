import Logos from "../components/Logos";
import StatisticAbout from "../components/about/StatisticAbout";
import VideoAbout from "../components/about/VideoAbout";
import UserCard from "../components/UserCard";
import AboutUs from "../components/about/AboutUs";

import background2 from "../assets/about/background2.svg";

export default function About() {
  return (
    <>
      <div className="">
        <AboutUs />
        <section>
          <div className="container-small">
            <div className="py-[1.5em] flex flex-wrap justify-center max-w-[30%]">
              <div className="flex-shrink-0 p-8 flex flex-col items-start gap-[1rem] max-w-[90%]">
                <p className="text-[14px] text-clr-danger">Problems trying</p>
                <h3 className="text-[24px] text-clr-dark font-bold">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent.
                </h3>
              </div>
              <div className="flex-shrink-0 p-8 flex flex-col items-start max-w-[50%]">
                <p className="text-[14px] text-clr-second">
                  Problems trying to resolve the conflict between the two major
                  realms of Classical physics: Newtonian mechanics{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <StatisticAbout />
          </div>
        </section>
        <section>
          <div>
            <VideoAbout />
          </div>
        </section>
        <section>
          <UserCard />
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
