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
import featuredimg2 from "../assets/featuredPosts/img2.svg";
import featuredimg3 from "../assets/featuredPosts/img3.svg";

import HomeSlider1 from "../utils/slider1";
import HomeSlider2 from "../utils/slider2";

import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://workintech-fe-ecommerce.onrender.com/products"
        );
        const data = await response.json();

        const sortedProducts = data.products.sort(
          (a, b) => b.sell_count - a.sell_count
        );

        const top8Products = sortedProducts.slice(0, 8);

        setProducts(top8Products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <section>
        <HomeSlider1 />
      </section>
      <section className="text-center container-small py-[5em]">
        <h2 className="mb-[0.625rem] text-clr-dark text-[1.5rem] font-bold">
          EDITOR’S PICK
        </h2>
        <p className="mb-[3rem] text-[0.875rem] text-clr-second">
          Problems trying to resolve the conflict between
        </p>
        <div className="flex relative gap-x-[2rem] aspect-[2/1] flex-col md:flex-row items-center">
          <div className="basis-[539px] mb-[1rem] md:mb-0">
            <CategoryCard
              className="w-auto h-auto max-w-[95%]"
              imgUrl={menimg}
              textBtn={"MEN"}
            />
          </div>
          <div className="relative basis-[255px] mb-[1rem] md:mb-0 ">
            <CategoryCard
              className="w-full h-full max-w-[95%]"
              imgUrl={womenImg}
              textBtn={"WOMEN"}
            />
          </div>
          <div className="relative basis-[239px] flex flex-col gap-y-[1rem] items-center">
            <CategoryCard
              className="relative basis-[239px] max-w-[95%]"
              imgUrl={accessoriesImg}
              textBtn={"ACCESORIES"}
            />
            <CategoryCard
              className="relative basis-[239px] max-w-[95%]"
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
        <div className="flex justify-center items-center w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-y-16 my-8 md:my-16 py-4 gap-[2rem]">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                className="w-full mb-8 ml-[.5rem]"
                imgUrl={product.images[0].url}
                name={product.name}
                description={product.description}
                price={product.price}
                discountedPrice={product.discountedPrice}
                rating={product.rating}
              />
            ))}
          </div>
        </div>
      </section>
      <section>
        <HomeSlider2 />{" "}
      </section>
      <section className="max-w-[1248px] mx-auto pb-8 md:pb-0 overflow-x-hidden">
        <div className="flex flex-col md:flex-row gap-x-0 md:gap-x-2">
          <div className="w-full md:w-[624px]">
            <img
              src={winterclothes}
              alt="Winter Clothes"
              className="w-full h-auto pr-[2rem] pl-[2rem]"
            />
          </div>
          <div className="w-full md:w-[484px] flex flex-col justify-center items-center md:items-start">
            <div className="font-bold text-center md:text-left mb-4">
              <span className="text-clr-muted text-xs md:text-base block">
                SUMMER 2020
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-clr-dark">
                Part of the Neural Universe
              </h2>
              <span className="text-lg md:text-xl text-clr-second font-bold">
                We know how large objects will act, but things on a small scale.
              </span>
            </div>
            <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2">
              <Link
                className="btn-success inline-block btn-md text-xs md:text-sm mb-2 md:mb-0 mr-1"
                to="#"
              >
                BUY NOW
              </Link>
              <Link
                className="btn-success-outline inline-block btn-md text-xs md:text-sm"
                to="#"
              >
                READ MORE
              </Link>
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
        <div className="flex flex-wrap justify-center gap-x-[0.5rem]">
          <FeaturedPosts
            className="border-2 pb-[1.5rem] base-[350px] w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.33%-0.5rem)]"
            imgUrl={featuredimg1}
          />
          <FeaturedPosts
            className="border-2 pb-[1.5rem] base-[350px] w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.33%-0.5rem)]"
            imgUrl={featuredimg2}
          />
          <FeaturedPosts
            className="border-2 pb-[1.5rem] base-[350px] w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.33%-0.5rem)]"
            imgUrl={featuredimg3}
          />
        </div>
      </section>
    </>
  );
}
