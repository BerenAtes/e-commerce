export default function UserStatistics({
  statisticNumber,
  description,
  className,
  ...rest
}) {
  return (
    <div className={className}>
      <span className="block text-clr-dark  font-bold text-[58px]">
        {statisticNumber}
      </span>
      <span className="block text-clr-second font-bold">{description}</span>
    </div>
  );
}
