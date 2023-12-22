import UserStatistics from "../UserStatistics";

export default function StatisticAbout() {
  return (
    <div>
      <section className="container-small flex flex-col md:flex-row justify-center items-center p-[5rem] gap-[3rem]">
        <UserStatistics statisticNumber="15K" description="Happy Customers" />
        <UserStatistics statisticNumber="150K" description="Monthly Visitors" />
        <UserStatistics
          statisticNumber="15"
          description="Countries Worldwide"
        />
        <UserStatistics statisticNumber="100+" description="Top Partners" />
      </section>
    </div>
  );
}
