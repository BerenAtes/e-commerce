import Logos from "../components/Logos";
import ProductCard from "../components/ProductCard";
import ProductListCard from "../components/ProductListCard";
import PagesPath from "../components/PagesPath";

import clothes from "../assets/productList/cloths/cloths1.svg";
import clothes2 from "../assets/productList/cloths/cloths2.svg";
import clothes3 from "../assets/productList/cloths/cloths3.svg";
import clothes4 from "../assets/productList/cloths/123.svg";
import clothes5 from "../assets/productList/cloths/cloths5.svg";

import shop1 from "../assets/productList/shop/1.png";
import shop2 from "../assets/productList/shop/2.png";
import shop3 from "../assets/productList/shop/3.png";
import shop4 from "../assets/productList/shop/4.png";
import shop5 from "../assets/productList/shop/5.png";
import shop6 from "../assets/productList/shop/6.png";
import shop7 from "../assets/productList/shop/7.png";
import shop8 from "../assets/productList/shop/8.png";
import shop9 from "../assets/productList/shop/9.png";
import shop10 from "../assets/productList/shop/10.png";
import shop11 from "../assets/productList/shop/11.png";
import shop12 from "../assets/productList/shop/12.png";

export default function ProductList() {
  return (
    <>
      <div className="bg-bgclr-ligth-gray-1">
        <section className="container-big m-auto pt-[2.375em] pb-[3em] px-[11em]">
          <div className="flex justify-between items-center mb-[3em]">
            <span className="text-[1.5rem] text-clr-dark font-bold">Shop</span>
            <PagesPath />
          </div>

          <div className="flex  justify-between gap-x-[1rem] relative ">
            <ProductListCard
              className="basis-[206px] grow relative absolute "
              imgUrl={clothes}
              title="CLOTHS"
              text="5 Items"
            />
            <ProductListCard
              className="basis-[206px] grow relative "
              imgUrl={clothes2}
              title="CLOTHS"
              text="5 Items"
            />
            <ProductListCard
              className="basis-[206px] grow relative "
              imgUrl={clothes3}
              title="CLOTHS"
              text="5 Items"
            />
            <ProductListCard
              className="basis-[206px] grow relative "
              imgUrl={clothes4}
              title="CLOTHS"
              text="5 Items"
            />
            <ProductListCard
              className="basis-[206px] grow relative "
              imgUrl={clothes5}
              title="CLOTHS"
              text="5 Items"
            />
          </div>
        </section>
      </div>

      <div>
        <section className="container-big px-[12em] py-[1rem]">
          <div className="text-clr-second flex items-center justify-between py-[1.5em]">
            <div className="text-[0.875rem] font-bold">
              Showing all 12 results
            </div>
            <div className="flex items-center gap-x-[1rem]">
              <span className="text-[0.875rem] font-bold">Views:</span>
              <i className="p-[1rem] rounded-[5px] border-[1px] border-clr-light-gray-2 text-clr-dark fa-solid fa-border-all"></i>
              <i className="p-[1rem] rounded-[5px] border-[1px] border-clr-light-gray-2 text-clr-dark fa-solid fa-list-ul"></i>
            </div>
            <div className="flex">
              <select
                className="mr-[1rem] pr-[2em] pl-[1.3em] text-[0.875rem] border-[1px] rounded-[5px] border-[#DDDDDD] bg-[#F9F9F9]"
                name="cars"
                id="cars"
              >
                <option value="Popularity">Popularity</option>
              </select>
              <button className="font-bold btn-small btn-primary text-[0.875rem]">
                Filter
              </button>
            </div>
          </div>
          <div className=" gap-y-[5rem] my-[5rem] py-4  flex flex-wrap gap-x-[2rem]">
            <ProductCard
              className="  basis-[200px] h-[300px] w-[239px] mb-[5rem]"
              imgUrl={shop1}
            />
            <ProductCard
              className="basis-[200px] h-[300px] w-[239px] mb-[8rem]"
              imgUrl={shop2}
            />
            <ProductCard
              className="basis-[200px] h-[300px] w-[239px] mb-[8rem]"
              imgUrl={shop3}
            />
            <ProductCard
              className="basis-[200px] h-[300px] w-[239px] mb-[8rem]"
              imgUrl={shop4}
            />
            <ProductCard
              className="basis-[200px] h-[300px] w-[239px] mb-[8rem]"
              imgUrl={shop5}
            />
            <ProductCard
              className="basis-[200px] h-[300px] w-[239px] mb-[8rem]"
              imgUrl={shop6}
            />
            <ProductCard
              className="basis-[200px] h-[300px] w-[239px] mb-[8rem]"
              imgUrl={shop7}
            />
            <ProductCard
              className="basis-[200px] h-[300px] w-[239px] mb-[8rem]"
              imgUrl={shop8}
            />
            <ProductCard
              className="basis-[200px] h-[300px] w-[239px] mb-[8rem]"
              imgUrl={shop9}
            />
            <ProductCard
              className="basis-[200px] h-[300px] w-[239px] mb-[8rem]"
              imgUrl={shop10}
            />
            <ProductCard
              className="basis-[200px] h-[300px] w-[239px] mb-[8rem]"
              imgUrl={shop11}
            />
            <ProductCard
              className="basis-[200px] h-[300px] w-[239px] mb-[8rem]"
              imgUrl={shop12}
            />
          </div>
        </section>
      </div>
      <Logos />
    </>
  );
}
