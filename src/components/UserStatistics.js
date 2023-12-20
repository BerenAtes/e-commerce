export default function UserStatistics({
  statisticNumber,
  description,
  className,
  ...rest
}) {
  return (
    <div className={className}>
      <span className="block text-clr-dark text-[3.625rem]">
        {statisticNumber}
      </span>
      <span className="block text-clr-second fon">{description}</span>
    </div>
  );
}
