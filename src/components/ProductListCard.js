export default function ProductListCard({ imgUrl, text, title, className }) {
  return (
    <div className={className}>
      <div className="relative">
        <img className="w-full h-auto" src={imgUrl} alt="imgShopCard" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-clr-light">
          <span className="font-bold block   ">{title}</span>
          <span className="text-[0.875rem] block ">{text}</span>{" "}
        </div>
      </div>
    </div>
  );
}
