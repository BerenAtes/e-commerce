import Logos from "../components/Logos";
import ProductCard from "../components/ProductCard";
import ProductListCard from "../components/ProductListCard";
import PagesPath from "../components/PagesPath";
import IconIcon from "../components/Icon";
import { useEffect, useState } from "react";
import axios from "axios";

import clothes from "../assets/productList/cloths/cloths1.svg";
import clothes2 from "../assets/productList/cloths/cloths2.svg";
import clothes3 from "../assets/productList/cloths/cloths3.svg";
import clothes4 from "../assets/productList/cloths/123.svg";
import clothes5 from "../assets/productList/cloths/cloths5.svg";

import views1 from "../assets/icons/views1.svg";
import views2 from "../assets/icons/views2.svg";

import first from "../assets/icons/First.svg";
import btn1 from "../assets/icons/1btn.svg";
import btn2 from "../assets/icons/2btn.svg";
import btn3 from "../assets/icons/3btn.svg";
import next from "../assets/icons/Next.svg";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://workintech-fe-ecommerce.onrender.com/products"
        );
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);
  const handleCategoryClick = (categoryId) => {
    // Önce products dizisinin tanımlı olduğunu ve boş olmadığını kontrol et
    if (products && Array.isArray(products)) {
      // Ardından filter işlemini gerçekleştir
      const filteredProducts = products.filter(
        (product) => product.category_id === categoryId
      );
      // Diğer işlemleri gerçekleştir...
    } else {
      console.error("products is not defined or not an array.");
    }
  };

  return (
    <>
      <div className="bg-bgclr-ligth-gray-1">
        <section className="container-big m-auto pt-[10%] pb-[10%] px-[10%]">
          <div className="flex justify-between items-center mb-[3em]">
            <span className="text-[1.5rem] text-clr-dark font-bold">Shop</span>
            <br />
            <PagesPath />
          </div>
          <div className="flex flex-wrap justify-center gap-y-4 md:flex-row md:flex-nowrap">
            <div className="w-full sm:w-auto md:w-[206px] grow relative">
              <ProductListCard imgUrl={clothes} title="CLOTHS" text="5 Items" />
            </div>
            <div className="w-full sm:w-auto  grow relative">
              <ProductListCard
                imgUrl={clothes2}
                title="CLOTHS"
                text="5 Items"
              />
            </div>
            <div className="w-full sm:w-auto  grow relative">
              <ProductListCard
                imgUrl={clothes3}
                title="CLOTHS"
                text="5 Items"
              />
            </div>
            <div className="w-full sm:w-auto  grow relative">
              <ProductListCard
                imgUrl={clothes4}
                title="CLOTHS"
                text="5 Items"
              />
            </div>
            <div className="w-full sm:w-auto  grow relative">
              <ProductListCard
                imgUrl={clothes5}
                title="CLOTHS"
                text="5 Items"
              />
            </div>
          </div>
        </section>
      </div>

      <div>
        <section className="container-big py-[5rem] flex flex-wrap justify-center gap-y-[5rem] gap-x-[3rem] ">
          <div className="text-clr-second flex flex-row justify-center items-center justify-between py-[1.5em]">
            <div className="text-[0.875rem] font-bold pl-[.5rem]">
              Showing all 12 results
            </div>
            <div className="flex items-center gap-x-[1rem]">
              <span className="text-[0.875rem] font-bold pl-[1rem] pr-[0]">
                Views:
              </span>
              <IconIcon
                className="text-[12px] text-clr-second"
                imgUrl={views1}
              />
              <IconIcon
                className="text-[12px] text-clr-second"
                imgUrl={views2}
              />
            </div>
            <div className="flex">
              <select
                className="mr-[1rem] pr-[.5rem] pl-[.5rem] text-[0.875rem] border-[1px] rounded-[5px] border-[#DDDDDD] bg-[#F9F9F9]"
                name="cars"
                id="cars"
              >
                <option value="Popularity">Popularity</option>
                <option value="Price High-Low">Price High-Low</option>
                <option value="Price Low-High">Price Low-High</option>
              </select>
              <button className="font-bold btn-small btn-primary text-[0.875rem] pl-[.1rem]">
                Filter
              </button>
            </div>
          </div>
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

          <span className="flex items-center justify-center    ">
            <IconIcon classText="text-xl   " imgUrl={first} />
            <IconIcon classText="text-xl  " imgUrl={btn1} />
            <IconIcon classText="text-xl  " imgUrl={btn2} />
            <IconIcon classText="text-xl  " imgUrl={btn3} />
            <IconIcon classText="text-xl  " imgUrl={next} />
          </span>
        </section>
      </div>
      <Logos />
    </>
  );
}
