import UserCardSpecial from "../components/UserCardSpecial";
import team1 from "../assets/about/team1.png";
import team2 from "../assets/about/team2.png";
import team3 from "../assets/about/team3.png";

export default function UserCard() {
  return (
    <>
      <section className="container-small pt-[8rem] ">
        <h2 className="text-clr-dark font-bold text-[24px]">Meet Our Team</h2>
        <p>
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
        <div className="py-[5rem] flex flex-wrap gap-y-[5rem] gap-x-[1.875rem]  justify-start ">
          <UserCardSpecial imgUrl={team1} />
          <UserCardSpecial imgUrl={team2} />
          <UserCardSpecial imgUrl={team3} />
        </div>
      </section>
    </>
  );
}
