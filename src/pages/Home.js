import { Link } from "react-router-dom/cjs/react-router-dom.min";
import FeaturedPosts from "../components/FeaturedPosts";

import CategoryCard from "../components/CategoryCard";
import menimg from "../assets/categories/menimg.svg";
import womenImg from "../assets/categories/womenImg.svg";
import kidsImg from "../assets/categories/kidsImg.svg";
import accessoriesImg from "../assets/categories/accessoriesImg.svg";

import winterclothes from "../assets/winterclothes.svg";

import featuredimg1 from "../assets/featuredPosts/img1.svg";
import featuredimg2 from "../assets/featuredPosts/img2.svg";
import featuredimg3 from "../assets/featuredPosts/img3.svg";

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
      <section>
        <span>Practice Advice</span>
        <h3>Featured Posts</h3>
        <p>
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
        <div>
          {Array(3)
            .fill(1)
            .map((item, idx) => (
              <FeaturedPosts key={idx} imgUrl={featuredimg1} />
            ))}
        </div>
      </section>
    </>
  );
}
