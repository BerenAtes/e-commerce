import teamphoto1 from "../../assets/team/teamphoto1.png";
import teamphoto2 from "../../assets/team/teamphoto2.png";
import teamphoto3 from "../../assets/team/teamphoto3.png";
import teamphoto4 from "../../assets/team/teamphoto4.png";
import teamphoto5 from "../../assets/team/teamphoto5.png";

export default function TeamPhotos() {
  return (
    <>
      <div>
        <section>
          <div>
            <img src={teamphoto1} alt="img"></img>
          </div>
          <div>
            <img src={teamphoto2} alt="img"></img>
            <img src={teamphoto3} alt="img"></img>
            <img src={teamphoto4} alt="img"></img>
            <img src={teamphoto5} alt="img"></img>
          </div>
        </section>
      </div>
    </>
  );
}
