import Star from "../../components/Star";

import sliderproduct from "../../assets/slider/sliderproduct.svg";
import sliderproduct2 from "../../assets/slider/slider2.svg";
import LikeButton from "../LikeButton";
import ShoppingCartButton from "../ShoppingCardButton";
import BrowseButton from "../BrowseButton";
import ImageSlider from "../../utils/ImageSlider";

export default function SliderProduct() {
  return (
    <>
      <div className="bg-bgclr-ligth-gray-1 pb-[3em]">
        <div className="container-small flex flex-wrap gap-x-[2em]">
          <div className="basis-[348px] grow">
            <div>
              <div>
                <img
                  className="w-100 aspect-square object-cover"
                  src={sliderproduct}
                  alt="carousel-img"
                />{" "}
              </div>
            </div>
          </div>
          <div className="basis-[348px] grow pt-[0.6875em] pl-[1.5em] pr-[1.5em] text-left">
            <h4 className="text-clr-dark text-[20px] font-bold mb-[0.75rem]">
              Floating Point
            </h4>
            <div className="flex gap-[.5rem]">
              <Star />
              <span className="font-bold text-clr-second text-[0.875rem]">
                10 reviews
              </span>
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
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <hr className="border-clr-muted my-[1.5rem]" />

            <div className="flex gap-x-[0.625rem] mb-[4.2rem]"></div>

            <div className="flex items-center gap-x-[0.625rem]">
              <button className="btn-small btn-primary font-bold">
                Select Options
              </button>
              <LikeButton />
              <ShoppingCartButton />
              <BrowseButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
