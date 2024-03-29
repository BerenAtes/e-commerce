import Logos from "../components/Logos";
import ProductCard from "../components/ProductCard";
import ProductListCard from "../components/ProductListCard";
import PagesPath from "../components/PagesPath";
import IconIcon from "../components/Icon";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import slugify from "slugify";

import views1 from "../assets/icons/views1.svg";
import views2 from "../assets/icons/views2.svg";
import Pagination from "../components/Pagination.js";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  const { gender, categorySlug } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://workintech-fe-ecommerce.onrender.com/products"
        );
        setProducts(response.data.products);

        const categoriesResponse = await axios.get(
          "https://workintech-fe-ecommerce.onrender.com/categories"
        );
        setCategories(categoriesResponse.data);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const selectTopCategories = () => {
    if (categories && categories.length > 0) {
      const sortedCategories = [...categories].sort(
        (a, b) => b.rating - a.rating
      );
      const topCategories = sortedCategories.slice(0, 5);
      setSelectedCategories(topCategories);
    }
  };

  useEffect(() => {
    selectTopCategories();
  }, [categories]);

  useEffect(() => {
    if (categorySlug && categories.length > 0) {
      const selectedCategory = categories.find(
        (category) =>
          slugify(category.title, { lower: true }) === categorySlug &&
          category.gender === (gender === "erkek" ? "e" : "k")
      );
      if (selectedCategory) {
        setSelectedCategoryId(selectedCategory.id);
      }
    }
  }, [categorySlug, categories, gender]);

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      if (selectedCategoryId) {
        try {
          let url = `https://workintech-fe-ecommerce.onrender.com/products?category=${selectedCategoryId}`;

          if (sort) {
            url += `&sort=${sort}`;
          }

          const response = await axios.get(url);
          setProducts(response.data.products);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      }
    };

    fetchProductsByCategory();
  }, [selectedCategoryId, filter]);

  const handleFilter = async () => {
    try {
      let url = `https://workintech-fe-ecommerce.onrender.com/products?category=${selectedCategoryId}`;

      if (filter) {
        url += `&filter=${filter}`;
      }
      if (sort) {
        url += `&sort=${sort}`;
      }

      const response = await axios.get(url);
      setProducts(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <>
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-100 opacity-75 z-50">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-24 w-24"></div>
        </div>
      )}
      <div className="bg-bgclr-ligth-gray-1">
        <section className="container-big m-auto pt-[5%] pb-[5%] px-[5%]">
          <div className="flex justify-between items-center mb-[1.5em]">
            <span className="text-[1.5rem] text-clr-dark font-bold">Shop</span>
            <br />
            <PagesPath />
          </div>

          <div className="flex flex-wrap justify-center gap-y-4 md:flex-row md:flex-nowrap">
            {selectedCategories.map((category, index) => (
              <div className="flex w-full md:w-1/4 lg:w-1/6 p-2" key={index}>
                <div className="flex flex-col justify-between w-full h-full">
                  <Link
                    to={`/shopping/${
                      category.gender === "e" ? "erkek" : "kadin"
                    }/${slugify(category.title, {
                      lower: true,
                    })}`}
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
                      onClick={() => setSelectedCategoryId(category.id)}
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div>
        <section className="container-big py-[5rem] flex flex-wrap justify-center gap-y-[1rem] gap-x-[3rem] ">
          <div className="text-clr-second flex flex-row justify-center items-center justify-between py-[1.5em]">
            <div className="text-[0.875rem] font-bold pl-[.5rem]">
              Showing all {products.length} results
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
                name="sortOption"
                onChange={(e) => {
                  setSort(e.target.value);
                  if (
                    e.target.value === "price:asc" ||
                    e.target.value === "price:desc"
                  ) {
                    handleFilter();
                  }
                }}
              >
                <option value="">Select Sort</option>
                <option value="price:asc">Price Low-High</option>
                <option value="price:desc">Price High-Low</option>
              </select>
              <input
                type="text"
                placeholder="Search products..."
                className="border border-gray-300 rounded-md px-3 py-2 w-full md:w-auto mr-[1rem]"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              />
              <button
                className="font-bold btn-small btn-primary text-[0.875rem] pl-[.1rem]"
                onClick={handleFilter}
              >
                Filter
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-y-16 my-8 md:my-16 py-4 gap-[2rem]">
              {products.map((product) => (
                <Link
                  to={`/shop/${gender}/${selectedCategoryId}`}
                  className="relative overflow-hidden"
                  key={product.id}
                >
                  <ProductCard
                    key={product.id}
                    className="w-full mb-8 ml-[.5rem]"
                    imgUrl={product.images[0].url}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    discountedPrice={product.discountedPrice}
                    rating={product.rating}
                    productId={product.id}
                    categoryId={selectedCategoryId}
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>
        <div>
          <Pagination className="gap-[2rem]" />
        </div>
      </div>
      <Logos />
    </>
  );
}
