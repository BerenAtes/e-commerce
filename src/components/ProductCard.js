export default function ProductCard({ imgUrl, className }) {
  return (
    <div className={className}>
      <div className="w-full relative  aspect-[56/100]">
        <img src={imgUrl} className="img-absolute" alt="img-product" />
      </div>
      <div className="flex flex-col grow gap-y-[0.625rem]">
        <h5>Graphic Design</h5>
        <span>English Department</span>
        <div>
          <span>$16.48</span>
          <span>$6.48</span>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
