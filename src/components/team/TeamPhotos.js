import teamphoto1 from "../../assets/team/teamphoto1.png";
import teamphoto2 from "../../assets/team/teamphoto2.png";
import teamphoto3 from "../../assets/team/teamphoto3.png";
import teamphoto4 from "../../assets/team/teamphoto4.png";
import teamphoto5 from "../../assets/team/teamphoto5.png";

export default function TeamPhotos() {
  return (
    <>
      <div className="flex items-start justify-center m-[1rem] p-[.3rem]">
        <section className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <img
              src={teamphoto1}
              alt="img"
              className="w-full h-auto mb-[.3rem] lg:mb-0"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-wrap mb-[1rem]">
            <div className="w-full lg:w-1/2 p-[.3rem]">
              <img
                src={teamphoto2}
                alt="img"
                className="w-full h-auto mb-[2.2rem]"
              />
              <img
                src={teamphoto3}
                alt="img"
                className="w-full h-auto mb-[2.2rem]"
              />
            </div>
            <div className="w-full lg:w-1/2 mb-[2.2rem]">
              <img
                src={teamphoto4}
                alt="img"
                className="w-full h-auto mb-[1.8rem]"
              />
              <img
                src={teamphoto5}
                alt="img"
                className="w-full h-auto mb-[2.2rem]"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
