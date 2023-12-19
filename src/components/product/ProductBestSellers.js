import ProductCard from "../ProductCard";

import bs1 from "../../assets/bestsellers/bs1.png";
import bs2 from "../../assets/bestsellers/bs2.png";
import bs3 from "../../assets/bestsellers/bs3.png";
import bs4 from "../../assets/bestsellers/bs4.png";
import bs5 from "../../assets/bestsellers/bs5.png";
import bs6 from "../../assets/bestsellers/bs6.png";
import bs7 from "../../assets/bestsellers/bs7.png";
import bs8 from "../../assets/bestsellers/bs8.png";

export default function ProductBestSellers() {
  return (
    <>
      <section className="container-small pt-[8rem] ">
        <h3 className="text-clr-dark font-bold text-[24px]">
          BESTSELLER PRODUCTS
        </h3>
        <hr />
        <div className="py-[5rem] flex flex-wrap gap-y-[5rem] gap-x-[1.875rem]  justify-start ">
          <ProductCard imgUrl={bs1} />
          <ProductCard imgUrl={bs2} />
          <ProductCard imgUrl={bs3} />
          <ProductCard imgUrl={bs4} />
          <ProductCard imgUrl={bs5} />
          <ProductCard imgUrl={bs6} />
          <ProductCard imgUrl={bs7} />
          <ProductCard imgUrl={bs8} />
        </div>
      </section>
    </>
  );
}
