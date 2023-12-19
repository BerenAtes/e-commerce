import { Link } from "react-router-dom";
import Icon from "../Icon";

import Vector from "../../assets/icons/Vector.svg";

export default function ProductDescription() {
  return (
    <>
      <div>
        <Link>Description</Link>
        <Link>Additional Information</Link>
        <Link>
          Rewievs <span>(0)</span>
        </Link>
        <hr />
      </div>

      <div>
        <section>
          <div>
            <div>
              <img></img>
            </div>
            <div>
              <h3>the quick fox jumps over </h3>
              <p>
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
              <p>
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
              <p>
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
            </div>

            <div>
              <div>
                <h3>the quick fox jumps over </h3>
                <div>
                  {" "}
                  <Icon
                    className="text-[12px] text-clr-second"
                    imgUrl={Vector}
                  ></Icon>
                  <span className="text-[0.875rem] font-bold">
                    the quick fox jumps over the lazy dog
                  </span>{" "}
                </div>
                <div>
                  <Icon
                    className="text-[12px] text-clr-second"
                    imgUrl={Vector}
                  ></Icon>
                  <span className="text-[0.875rem] font-bold">
                    the quick fox jumps over the lazy dog
                  </span>
                </div>
                <div>
                  <Icon
                    className="text-[12px] text-clr-second"
                    imgUrl={Vector}
                  ></Icon>
                  <span className="text-[0.875rem] font-bold">
                    the quick fox jumps over the lazy dog
                  </span>{" "}
                </div>
                <div>
                  {" "}
                  <Icon
                    className="text-[12px] text-clr-second"
                    imgUrl={Vector}
                  ></Icon>
                  <span className="text-[0.875rem] font-bold">
                    the quick fox jumps over the lazy dog
                  </span>{" "}
                </div>
              </div>
              <div>
                <h3>the quick fox jumps over </h3>
                <div>
                  {" "}
                  <Icon
                    className="text-[12px] text-clr-second"
                    imgUrl={Vector}
                  ></Icon>
                  <span className="text-[0.875rem] font-bold">
                    the quick fox jumps over the lazy dog
                  </span>{" "}
                </div>
                <div>
                  {" "}
                  <Icon
                    className="text-[12px] text-clr-second"
                    imgUrl={Vector}
                  ></Icon>
                  <span className="text-[0.875rem] font-bold">
                    the quick fox jumps over the lazy dog
                  </span>{" "}
                </div>
                <div>
                  {" "}
                  <Icon
                    className="text-[12px] text-clr-second"
                    imgUrl={Vector}
                  ></Icon>
                  <span className="text-[0.875rem] font-bold">
                    the quick fox jumps over the lazy dog
                  </span>{" "}
                </div>
                <div>
                  {" "}
                  <Icon
                    className="text-[12px] text-clr-second"
                    imgUrl={Vector}
                  ></Icon>
                  <span className="text-[0.875rem] font-bold">
                    the quick fox jumps over the lazy dog
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
