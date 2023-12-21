import { Link } from "react-router-dom";
import Icon from "../Icon";

import Vector from "../../assets/icons/Vector.svg";
import productimg from "../../assets/productimg.png";

export default function ProductDescription() {
  return (
    <>
      <div className="">
        <Link className="p-[1rem] text-clr-second font-bold">Description</Link>
        <Link className="p-[1rem] text-clr-second font-bold">
          Additional Information
        </Link>
        <Link className="p-[1rem] text-clr-second font-bold">
          Rewievs <span className="text-clr-success">(0)</span>
        </Link>
        <hr className="mt-[1.5rem]" />
      </div>

      <div className="mt-[1rem]">
        <section>
          <div class="flex flex-col md:flex-row-reverse items-center justify-center h-screen">
            <div class="flex  md:order-2">
              <img
                src={productimg}
                alt="img"
                class="ml-[8rem] shadow-[0_35px_60px_-15px_rgba(#C4C4C4) w-full md:w-auto h-auto"
              ></img>
            </div>
            <div class="flex flex-col md:flex-row w-full md:order-1">
              <div class="max-w-full md:max-w-[45%] md:ml-[10rem] mb-[2rem] md:mb-0">
                <h3 class="text-clr-dark font-bold text-[24px] pb-[1.5rem]">
                  the quick fox jumps over
                </h3>
                <p class="text-clr-second pb-[1rem]">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
                <p class="text-clr-second pb-[1rem]">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
                <p class="text-clr-second">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
              </div>

              <div class="flex flex-col md:flex-row gap-[1rem]">
                <div class="md:w-[50%] md:flex-col">
                  <h3 class="text-clr-dark font-bold text-[24px] pb-[1.5rem]">
                    the quick fox jumps over
                  </h3>
                  <div class="flex pb-[1rem]">
                    <Icon
                      class="text-[12px] text-clr-second"
                      imgUrl={Vector}
                    ></Icon>
                    <span class="text-[0.875rem] text-clr-second">
                      the quick fox jumps over the lazy dog
                    </span>
                  </div>
                  <div class="flex pb-[1rem]">
                    <Icon
                      class="text-[12px] text-clr-second"
                      imgUrl={Vector}
                    ></Icon>
                    <span class="text-[0.875rem] text-clr-second">
                      the quick fox jumps over the lazy dog
                    </span>
                  </div>
                  <div class="flex pb-[1rem]">
                    <Icon
                      class="text-[12px] text-clr-second"
                      imgUrl={Vector}
                    ></Icon>
                    <span class="text-[0.875rem] text-clr-second">
                      the quick fox jumps over the lazy dog
                    </span>
                  </div>
                  <div class="flex pb-[1rem]">
                    <Icon
                      class="text-[12px] text-clr-second"
                      imgUrl={Vector}
                    ></Icon>
                    <span class="text-[0.875rem] text-clr-second">
                      the quick fox jumps over the lazy dog
                    </span>
                  </div>
                </div>
                <div class="md:w-[50%] md:flex-col">
                  <h3 class="text-clr-dark font-bold text-[24px] pb-[1.5rem]">
                    the quick fox jumps over
                  </h3>
                  <div class="flex pb-[1rem]">
                    <Icon
                      class="text-[12px] text-clr-second"
                      imgUrl={Vector}
                    ></Icon>
                    <span class="text-[0.875rem] text-clr-second">
                      the quick fox jumps over the lazy dog
                    </span>
                  </div>
                  <div class="flex pb-[1rem]">
                    <Icon
                      class="text-[12px] text-clr-second"
                      imgUrl={Vector}
                    ></Icon>
                    <span class="text-[0.875rem] text-clr-second">
                      the quick fox jumps over the lazy dog
                    </span>
                  </div>
                  <Icon
                    class="text-[12px] text-clr-second"
                    imgUrl={Vector}
                  ></Icon>
                  <span class="text-[0.875rem] text-clr-second">
                    the quick fox jumps over the lazy dog
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
