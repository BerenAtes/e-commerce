import UserCardSpecial from "../../components/UserCardSpecial";
import team1 from "../../assets/about/team1.png";
import team2 from "../../assets/about/team2.png";
import team3 from "../../assets/about/team3.png";
import media from "../../assets/about/media.png";
import media1 from "../../assets/about/media1.png";
import media2 from "../../assets/about/media2.png";
import media3 from "../../assets/about/media3.png";
import media4 from "../../assets/about/media4.png";
import media5 from "../../assets/about/media5.png";

export default function TeamUserCard() {
  return (
    <>
      <section className="container-small pt-[3rem] ">
        <h2 className="text-clr-dark font-bold text-[40px]">Meet Our Team</h2>

        <div className="py-[5rem] flex flex-wrap gap-y-[5rem] gap-x-[4rem]  justify-center ">
          <UserCardSpecial imgUrl={team1} />
          <UserCardSpecial imgUrl={team2} />
          <UserCardSpecial imgUrl={team3} />
          <UserCardSpecial imgUrl={media} />
          <UserCardSpecial imgUrl={media1} />
          <UserCardSpecial imgUrl={media2} />
          <UserCardSpecial imgUrl={media3} />
          <UserCardSpecial imgUrl={media4} />
          <UserCardSpecial imgUrl={media5} />
        </div>
      </section>
    </>
  );
}
