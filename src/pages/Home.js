import { Link } from "react-router-dom/cjs/react-router-dom.min";
import FeaturedPosts from "../components/FeaturedPosts";
import ProductCard from "../components/ProductCard";
import CategoryCard from "../components/CategoryCard";

import menimg from "../assets/categories/menimg.svg";
import womenImg from "../assets/categories/womenImg.svg";
import kidsImg from "../assets/categories/kidsImg.svg";
import accessoriesImg from "../assets/categories/accessoriesImg.svg";

import winterclothes from "../assets/winterclothes.svg";

import featuredimg1 from "../assets/featuredPosts/img1.svg";

import productimg from "../assets/ProductCard/productimg.png";
import HomeSlider from "../utils/slider1";
import HomeBottomSlider from "../utils/slider2";

export default function Home() {
  return (
    <>
      <section>
        <HomeSlider />
      </section>
      <section className="text-center container-small py-[5em]">
        <h2 className="mb-[0.625rem] text-clr-dark text-[1.5rem] font-bold">
          EDITOR’S PICK
        </h2>
        <p className="mb-[3rem] text-[0.875rem] text-clr-second">
          Problems trying to resolve the conflict between{" "}
        </p>
        <div className="flex relative gap-x-[2rem] aspect-[2/1]">
          <div className="basis-[539px]">
            <CategoryCard
              className="w-full h-full"
              imgUrl={menimg}
              textBtn={"MEN"}
            />
          </div>
          <div className="relative basis-[255px]">
            <CategoryCard
              className="w-full h-full"
              imgUrl={womenImg}
              textBtn={"WOMEN"}
            />
          </div>
          <div className=" relative basis-[239px] flex flex-wrap gap-y-[1rem]">
            <CategoryCard
              className="basis-[239px]"
              imgUrl={accessoriesImg}
              textBtn={"ACCESORIES"}
            />
            <CategoryCard
              className="relative basis-[239px]"
              imgUrl={kidsImg}
              textBtn={"KIDS"}
            />
          </div>
        </div>
      </section>
      <section className="container-small pt-[8rem] ">
        <h2 className="text-clr-second font-semibold text-[20px]">
          Featured Products
        </h2>
        <h3 className="text-clr-dark font-bold text-[24px]">
          BESTSELLER PRODUCTS
        </h3>
        <p className="text-clr-second font-semibold text-[14px]">
          Problems trying to resolve the conflict between{" "}
        </p>
        <div className="py-[5rem] flex flex-wrap gap-y-[5rem] gap-x-[1.875rem]  justify-start ">
          {Array(8)
            .fill(2)
            .map((item, idx) => (
              <ProductCard key={idx} imgUrl={productimg} />
            ))}
        </div>
      </section>
      <section>
        <HomeBottomSlider />{" "}
      </section>

      <section className="max-w-[1248px] m-auto pb-[8rem]">
        <div className="flex gap-x-[2rem]">
          <div className="basis-[624px] grow-[9]">
            <img src={winterclothes} />
          </div>
          <div className="container-small basis-[484px] grow-[7] flex flex-col justify-center items-start">
            <div className=" font-bold flex flex-col items-start gap-y-[2.1875rem] justify-between">
              <span className="text-clr-muted text-[16px]">SUMMER 2020</span>
              <h2 className="text-[40px] font-bold text-clr-dark text-left">
                Part of the Neural Universe
              </h2>
              <span className="text-[20px] text-clr-second font-bold">
                We know how large objects will act, but things on a small scale.
              </span>
              <div>
                <Link
                  className="btn-success inline-block btn-md text-[14px]  mr-[0.5rem]"
                  to="#"
                >
                  BUY NOW
                </Link>
                <Link
                  className="btn-success-outline inline-block btn-md text-[14px] "
                  to="#"
                >
                  READ MORE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container-small pb-[10rem]">
        <span className="text-clr-primary font-bold">Practice Advice</span>
        <h3 className="text-clr-dark text-[40px] font-bold">Featured Posts</h3>
        <p className="text-clr-second text-[14px] max-w-[45%] mx-auto mb-[4rem] font-bold ">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
        <div className="flex justify-between gap-x-[0.5rem]">
          {Array(3)
            .fill(1)
            .map((item, idx) => (
              <FeaturedPosts
                className=" border-2 pb-[1.5rem] base-[350px]"
                key={idx}
                imgUrl={featuredimg1}
              />
            ))}
        </div>
      </section>
    </>
  );
}
