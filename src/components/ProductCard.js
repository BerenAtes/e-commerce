import data from "../data";

export default function ProductCard({ imgUrl, className }) {
  return (
    <div className={className}>
      <div className="w-[230px] relative  aspect-[80/100] ">
        <img src={imgUrl} className="" alt="img-product" />
      </div>
      <div className="flex flex-col grow gap-y-[0.5rem]">
        <h5 className="text-clr-dark font-bold text-[16px] pt-[1.5rem]">
          Graphic Design
        </h5>
        <span className="text-clr-second text-[14px] font-bold">
          English Department
        </span>
        <div className="">
          <span className="text-clr-muted text-[16px] font-bold pr-[.5rem]">
            $16.48
          </span>
          <span className="text-clr-secondary-1 text-[16px] font-bold">
            $6.48
          </span>
        </div>
        <div className="flex  gap-x-[.2rem] justify-center ">
          <div className=" pr-[1rem] w-[5%] aspect-square rounded-full bg-bgclr-primary" />
          <div className="pr-[1rem] w-[5%] aspect-square rounded-full bg-bgclr-secondary-1" />
          <div className="pr-[1rem] w-[5%] aspect-square rounded-full bg-bgclr-alert" />
          <div className="pr-[1rem] w-[5%] aspect-square rounded-full bg-bgclr-dark" />
        </div>
      </div>
    </div>
  );
}
