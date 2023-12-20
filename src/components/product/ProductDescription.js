import { Link } from "react-router-dom";
import Icon from "../Icon";

import Vector from "../../assets/icons/Vector.svg";
import productimg from "../../assets/productimg.png";

export default function ProductDescription() {
  return (
    <>
      <div className="m-[2rem]">
        <Link className="p-[1rem] text-clr-second font-bold">Description</Link>
        <Link className="p-[1rem] text-clr-second font-bold">
          Additional Information
        </Link>
        <Link className="p-[1rem] text-clr-second font-bold">
          Rewievs <span className="text-clr-success">(0)</span>
        </Link>
        <hr className="mt-[1.5rem]" />
      </div>

      <div>
        <section>
          <div className="flex items-center justify-center h-screen">
            <div className="flex justify-center ">
              <img
                src={productimg}
                alt="img"
                className=" m-[2rem] shadow-[0_35px_60px_-15px_rgba(#C4C4C4) w-[100%] h-auto "
              ></img>
            </div>
            <div className="flex w-[60%]">
              <div className=" max-w-[45%] mr-[10rem] ">
                <h3 className="text-clr-dark font-bold text-[24px] pb-[1.5rem]">
                  the quick fox jumps over{" "}
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

              <div className="gap-[1rem]">
                <div>
                  <h3 className="text-clr-dark font-bold text-[24px] pb-[1.5rem]">
                    the quick fox jumps over{" "}
                  </h3>
                  <div className="flex pb-[1rem]">
                    {" "}
                    <Icon
                      className="text-[12px] text-clr-second"
                      imgUrl={Vector}
                    ></Icon>
                    <span className="text-[0.875rem] text-clr-second">
                      the quick fox jumps over the lazy dog
                    </span>{" "}
                  </div>
                  <div className="flex pb-[1rem]">
                    <Icon
                      className="text-[12px] text-clr-second"
                      imgUrl={Vector}
                    ></Icon>
                    <span className="text-[0.875rem] text-clr-second">
                      the quick fox jumps over the lazy dog
                    </span>
                  </div>
                  <div className="flex pb-[1rem]">
                    <Icon
                      className="text-[12px] text-clr-second"
                      imgUrl={Vector}
                    ></Icon>
                    <span className="text-[0.875rem] text-clr-second">
                      the quick fox jumps over the lazy dog
                    </span>{" "}
                  </div>
                  <div className="flex pb-[1rem]">
                    {" "}
                    <Icon
                      className="text-[12px] text-clr-second"
                      imgUrl={Vector}
                    ></Icon>
                    <span className="text-[0.875rem] text-clr-second ">
                      the quick fox jumps over the lazy dog
                    </span>{" "}
                  </div>
                </div>
                <div>
                  <h3 className="text-clr-dark font-bold text-[24px] pb-[1.5rem]">
                    the quick fox jumps over{" "}
                  </h3>
                  <div className="flex pb-[1rem]">
                    {" "}
                    <Icon
                      className="text-[12px] text-clr-second"
                      imgUrl={Vector}
                    ></Icon>
                    <span className="text-[0.875rem] text-clr-second">
                      the quick fox jumps over the lazy dog
                    </span>{" "}
                  </div>
                  <div className="flex pb-[1rem]">
                    {" "}
                    <Icon
                      className="text-[12px] text-clr-second"
                      imgUrl={Vector}
                    ></Icon>
                    <span className="text-[0.875rem] text-clr-second">
                      the quick fox jumps over the lazy dog
                    </span>{" "}
                  </div>
                  <div className="flex pb-[1rem]">
                    {" "}
                    <Icon
                      className="text-[12px] text-clr-second"
                      imgUrl={Vector}
                    ></Icon>
                    <span className="text-[0.875rem] text-clr-second">
                      the quick fox jumps over the lazy dog
                    </span>{" "}
                  </div>
                  <div className="flex pb-[1rem]">
                    {" "}
                    <Icon
                      className="text-[12px] text-clr-second"
                      imgUrl={Vector}
                    ></Icon>
                    <span className="text-[0.875rem] text-clr-second">
                      the quick fox jumps over the lazy dog
                    </span>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
