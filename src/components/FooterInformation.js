export default function FooterInformation({ title, items }) {
  return (
    <div>
      <h5>{title}</h5>

      {items?.map((item) => (
        <p key={item.toString()}>{item}</p>
      ))}
    </div>
  );
}
