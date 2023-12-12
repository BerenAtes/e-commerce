export default function FooterInformation({ title, items }) {
  return (
    <div>
      <h5 className="font-bold text-clr-dark mb-[1.5rem]">{title}</h5>

      {items?.map((item) => (
        <p
          className="text-clr-second font-bold text-[14px] mt-[10px]"
          key={item.toString()}
        >
          {item}
        </p>
      ))}
    </div>
  );
}
