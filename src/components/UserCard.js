import UserCardSpecial from "../components/UserCardSpecial";
import team1 from "../assets/about/team1.png";
import team2 from "../assets/about/team2.png";
import team3 from "../assets/about/team3.png";

export default function UserCard() {
  return (
    <>
      <section className="container-small ">
        <div className="m-[3rem] text-center items-center">
          {" "}
          <h2 className="text-clr-dark font-bold text-[40px]">Meet Our Team</h2>
          <p className="text-clr-second text-[14px]  flex justify-center ">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>{" "}
        </div>

        <div className="py-5rem flex flex-wrap justify-center gap-[2rem]">
          <UserCardSpecial imgUrl={team1} />
          <UserCardSpecial imgUrl={team2} />
          <UserCardSpecial imgUrl={team3} />
        </div>
      </section>
    </>
  );
}
