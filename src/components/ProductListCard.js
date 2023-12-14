export default function ProductListCard({ imgUrl, text, title, className }) {
  return (
    <div className={className}>
      <img className="" src={imgUrl} alt="imgShopCard" />
      <div className="relative z-10 text-clr-light text-center">
        <span className="font-bold block">{title}</span>
        <span className="text-[0.875rem] block">{text}</span>
      </div>
    </div>
  );
}
