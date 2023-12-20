import TeamFreeTrial from "../components/team/TeamFreeTrial";
import TeamIntroduction from "../components/team/TeamIntroduction";
import TeamPhotos from "../components/team/TeamPhotos";
import TeamUserCard from "../components/team/TeamUserCard";

export default function Team() {
  return (
    <>
      <TeamIntroduction />
      <TeamPhotos />
      <TeamUserCard />
      <TeamFreeTrial />
    </>
  );
}
