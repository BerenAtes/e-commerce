import Logos from "../components/Logos";
import StatisticAbout from "../components/about/StatisticAbout";
import VideoAbout from "../components/about/VideoAbout";
import UserCard from "../components/UserCard";
import AboutUs from "../components/about/AboutUs";
import ProblemsTryingAbout from "../components/about/ProblemsTryingAbout";

import background2 from "../assets/about/background2.svg";

export default function About() {
  return (
    <>
      <div className="">
        <AboutUs />
        <ProblemsTryingAbout />
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
        <section className="mx-auto bg-bgclr-ligth-gray-1 p-[2rem] mt-[5rem]">
          <h2 className="text-clr-dark text-[40px] font-bold">
            Big Companies Are Here
          </h2>
          <p className="text-clr-second text-[14px] pb-[2rem] ">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
          <Logos />
        </section>
        <section className="relative bg-blue-500 text-white p-8 md:flex md:items-center">
          <div className="flex-grow p-4 md:p-8 max-w-md md:max-w-2xl md:order-2 text-center">
            <h5 className="text-[16px] text-clr-light">WORK WITH US</h5>
            <h2 className="text-[40px] font-bold text-clr-light">
              Now Let’s grow Yours
            </h2>
            <p className="text-[14px] text-clr-light">
              The gradual accumulation of information about atomic and
              small-scale behavior during the first quarter of the 20th{" "}
            </p>
            <button className="inline-block rounded pb-[.5rem] pt-[.5rem] pr-[2rem] pl-[2rem] m-[.5rem] btn-small-wide self-start bg-transparent border border-primary text-primary">
              Button
            </button>
          </div>
          <div className="hidden md:block flex-shrink-0 w-full md:w-2/3 pl-4 md:pl-8 pt-4 md:pt-0 md:absolute md:top-0 md:right-0 md:bottom-0 overflow-hidden">
            <img
              className="w-full h-auto md:h-full object-cover"
              src={background2}
              alt="img"
            />
          </div>
        </section>
      </div>
    </>
  );
}
