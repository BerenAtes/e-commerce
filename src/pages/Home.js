import { Link } from "react-router-dom/cjs/react-router-dom.min";

import CategoryCard from "../components/CategoryCard";
import menimg from "../assets/categories/menimg.svg";
import womenImg from "../assets/categories/womenImg.svg";
import kidsImg from "../assets/categories/kidsImg.svg";
import accessoriesImg from "../assets/categories/accessoriesImg.svg";

import winterclothes from "../assets/winterclothes.svg";

export default function Home() {
  return (
    <>
      <section>
        <h2>EDITOR'S PICK</h2>
        <p>Problems trying to resolve the conflict between </p>
        <div>
          <div>
            <CategoryCard imgUrl={menimg} textBtn={"MEN"} />
          </div>
          <div>
            <CategoryCard imgUrl={womenImg} textBtn={"WOMEN"} />
          </div>
          <div>
            <CategoryCard imgUrl={kidsImg} textBtn={"KIDS"} />
          </div>
          <div>
            <CategoryCard imgUrl={accessoriesImg} textBtn={"ACCESSORIES"} />
          </div>
        </div>
      </section>

      <section>
        <div>
          <div>
            <img src={winterclothes} />
          </div>
          <div>
            <div>
              <span>SUMMER 2020</span>
              <h2>Part of the Neural Universe</h2>
              <span>
                We know how large objects will act, but things on a small scale.
              </span>
              <div>
                <Link to="#">BUY NOW</Link>
                <Link to="#">READ MORE</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
