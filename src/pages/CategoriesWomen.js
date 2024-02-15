import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import slugify from "slugify";
import ProductListCard from "../components/ProductListCard";

export default function CategoriesWomen() {
  const [categoriesWomen, setCategoriesWomen] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://workintech-fe-ecommerce.onrender.com/categories"
        );
        const categories = response.data.filter(
          (category) => category.gender === "k"
        );
        setCategoriesWomen(categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="bg-bgclr-ligth-gray-1">
      <section className="container-big m-auto pt-[5%] pb-[5%] px-[5%]">
        <div className="flex justify-between items-center mb-[1.5em]">
          <span className="text-[1.5rem] text-clr-dark font-bold">Shop</span>
          <br />
        </div>
        <div className="flex flex-wrap justify-center gap-y-4 md:flex-row md:flex-nowrap">
          {categoriesWomen.map((category, index) => (
            <div className="flex w-full md:w-1/4 lg:w-1/6 p-2" key={index}>
              <Link
                to={`/shopping/kadin/${slugify(category.title, {
                  lower: true,
                })}`}
                className="flex flex-col justify-between w-full h-full"
              >
                <ProductListCard
                  key={category.id}
                  categoryId={category.id}
                  gender={category.gender}
                  imgUrl={category.img}
                  title={category.title}
                  text={` ${category.title}`}
                  className="w-full mb-1"
                  style={{ objectFit: "cover" }}
                />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
