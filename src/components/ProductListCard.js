export default function ProductListCard({ imgUrl, text, title, className }) {
  return (
    <div className={className}>
      <img className="img-absolute" src={imgUrl} alt="imgProductListCard" />
      <div className="relative z-10 text-clr-light text-center">
        <span className="font-bold block">{title}</span>
        <span className="text-[0.875rem] block">{text}</span>
      </div>
    </div>
  );
}
