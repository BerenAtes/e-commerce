import { Carousel } from "react-responsive-carousel";

export default function ProductSection() {
  return (
    <>
      <div>
        <div>
          <Carousel></Carousel>{" "}
        </div>
        <div>
          <h4>Floating Phone </h4>
          <div className="text-[#F3CD03] mb-[2rem]">
            <i className=" fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <span className="text-clr-second text-[0.875rem]">10 reviews</span>
          </div>
        </div>
        <div className="text-clr-dark text-[1.5rem] font-bold mb-[0.5rem]">
          $1,139.33
        </div>
        <div className="mb-[2rem]">
          <span className="text-clr-second text-[0.875rem] font-bold">
            Availability :
          </span>
          <span className="text-clr-primary text-[0.875rem] font-bold">
            {" "}
            In Stock
          </span>
        </div>

        <p className="text-[0.875rem] text-[#858585]">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent door ENIM RELIT Mollie. Excitation venial
          consequent sent nostrum met.
        </p>
        <hr className="border-clr-muted my-[1.5rem]" />

        <div className="flex gap-x-[0.625rem] mb-[4.2rem]"></div>

        <div className="flex items-center gap-x-[0.625rem]">
          <button className="btn-small btn-primary font-bold">
            Select Options
          </button>
          <i className="aspect-square rounded-full p-[0.5em] border-[1px] border-clr-muted text-[1.25rem] fa-regular fa-heart"></i>
          <i className="aspect-square rounded-full p-[0.5em] border-[1px] border-clr-muted text-[1.25rem] fa-solid fa-cart-shopping"></i>
          <i className="aspect-square rounded-full p-[0.5em] border-[1px] border-clr-muted text-[1.25rem] fa-solid fa-eye"></i>
        </div>
      </div>
    </>
  );
}
