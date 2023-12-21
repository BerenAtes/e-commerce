export default function ProductListCard({ imgUrl, text, title, className }) {
  return (
    <div className={className}>
      <div className="relative overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={imgUrl}
          alt="imgShopCard"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center text-clr-light">
          <span className="font-bold block">{title}</span>
          <span className="text-[0.875rem] block">{text}</span>
        </div>
      </div>
    </div>
  );
}
