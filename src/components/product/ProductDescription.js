import { Link } from "react-router-dom";
import Icon from "../Icon";

import Vector from "../../assets/icons/Vector.svg";
import productimg from "../../assets/productimg.png";

export default function ProductDescription() {
  return (
    <>
      {/* Masaüstü Görünüm */}
      <div className="hidden lg:flex justify-center items-center bg-gray-100 p-4">
        <Link className="p-[1rem] text-clr-second font-bold">Description</Link>
        <Link className="p-[1rem] text-clr-second font-bold">
          Additional Information
        </Link>
        <Link className="p-[1rem] text-clr-second font-bold">
          Rewievs <span className="text-clr-success">(0)</span>
        </Link>
        <hr className="mt-[1.5rem]" />
      </div>

      <div className="hidden lg:flex container mx-auto px-4">
        <section className="flex items-center justify-between w-full">
          <div className="w-1/2 pr-8">
            <img
              src={productimg}
              alt="img"
              className="shadow-[0_35px_60px_-15px_rgba(#C4C4C4) w-full h-auto"
            />
          </div>
          <div className="w-1/2">
            <div className="max-w-[45%] mb-[2rem]">
              <h3 className="text-clr-dark font-bold text-[24px] pb-[1.5rem]">
                The Quick Fox Jumps Over
              </h3>
              <p className="text-clr-second pb-[1rem]">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
              <p className="text-clr-second pb-[1rem]">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
              <p className="text-clr-second">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
            </div>
          </div>
          <div>
            {" "}
            <div className="m-[1rem]">
              {" "}
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
            </div>
          </div>
        </section>
      </div>

      {/* Mobil Görünüm */}
      <div className="lg:hidden p-4">
        <Link className="block p-[1rem] text-clr-second font-bold mb-2">
          Description
        </Link>
        <Link className="block p-[1rem] text-clr-second font-bold mb-2">
          Additional Information
        </Link>
        <Link className="block p-[1rem] text-clr-second font-bold mb-2">
          Rewievs <span className="text-clr-success">(0)</span>
        </Link>
        <hr className="mt-[1.5rem]" />
      </div>

      <div className="lg:hidden container mx-auto px-4">
        <section>
          <div className="flex flex-col items-center justify-center">
            <img
              src={productimg}
              alt="img"
              className="shadow-[0_35px_60px_-15px_rgba(#C4C4C4) w-full h-auto mb-4"
            />

            <div className="w-full">
              <h3 className="text-clr-dark font-bold text-[24px] pb-[1.5rem]">
                The Quick Fox Jumps Over
              </h3>
              <p className="text-clr-second pb-[1rem]">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
              <p className="text-clr-second pb-[1rem]">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
              <p className="text-clr-second pb-[1rem]">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
            </div>
          </div>
          <div className="m-[1rem]">
            {" "}
            <h3 class="text-clr-dark font-bold text-[24px] pb-[1.5rem]">
              the quick fox jumps over
            </h3>
            <div class="flex pb-[1rem]">
              <Icon class="text-[12px] text-clr-second" imgUrl={Vector}></Icon>
              <span class="text-[0.875rem] text-clr-second">
                the quick fox jumps over the lazy dog
              </span>
            </div>
            <div class="flex pb-[1rem]">
              <Icon class="text-[12px] text-clr-second" imgUrl={Vector}></Icon>
              <span class="text-[0.875rem] text-clr-second">
                the quick fox jumps over the lazy dog
              </span>
            </div>
            <div class="flex pb-[1rem]">
              <Icon class="text-[12px] text-clr-second" imgUrl={Vector}></Icon>
              <span class="text-[0.875rem] text-clr-second">
                the quick fox jumps over the lazy dog
              </span>
            </div>
            <div class="flex pb-[1rem]">
              <Icon class="text-[12px] text-clr-second" imgUrl={Vector}></Icon>
              <span class="text-[0.875rem] text-clr-second">
                the quick fox jumps over the lazy dog
              </span>
            </div>
            <h3 class="text-clr-dark font-bold text-[24px] pb-[1.5rem]">
              the quick fox jumps over
            </h3>
            <div class="flex pb-[1rem]">
              <Icon class="text-[12px] text-clr-second" imgUrl={Vector}></Icon>
              <span class="text-[0.875rem] text-clr-second">
                the quick fox jumps over the lazy dog
              </span>
            </div>
            <div class="flex pb-[1rem]">
              <Icon class="text-[12px] text-clr-second" imgUrl={Vector}></Icon>
              <span class="text-[0.875rem] text-clr-second">
                the quick fox jumps over the lazy dog
              </span>
            </div>
            <div class="flex pb-[1rem]">
              <Icon class="text-[12px] text-clr-second" imgUrl={Vector}></Icon>
              <span class="text-[0.875rem] text-clr-second">
                the quick fox jumps over the lazy dog
              </span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
