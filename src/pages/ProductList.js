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

import first from "../assets/icons/First.svg";
import btn1 from "../assets/icons/1btn.svg";
import btn2 from "../assets/icons/2btn.svg";
import btn3 from "../assets/icons/3btn.svg";
import next from "../assets/icons/Next.svg";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const { gender, categorySlug } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "https://workintech-fe-ecommerce.onrender.com/categories"
      );
      const allCategories = response.data;
      return allCategories;
    } catch (error) {
      console.error("Error fetching categories:", error);
      return [];
    }
  };
  const fetchProductsByCategory = async (categoryId) => {
    try {
      const response = await axios.get(
        `https://workintech-fe-ecommerce.onrender.com/products?category=${categoryId}`
      );
      const products = response.data.products;
      return products;
    } catch (error) {
      console.error(
        `Error fetching products for category ${categoryId}:`,
        error
      );
      return [];
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Tüm kategorileri al
        const allCategories = await fetchCategories();

        // Her bir kategori için ürünleri al
        const productsPromises = allCategories.map(async (category) => {
          const products = await fetchProductsByCategory(category.id);
          return products;
        });

        // Tüm ürünleri birleştir
        const allProducts = (await Promise.all(productsPromises)).flat();

        // Ürünleri duruma kaydet
        setProducts(allProducts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://workintech-fe-ecommerce.onrender.com/categories"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
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
    const fetchProductsByCategory = async (categoryId) => {
      try {
        const response = await axios.get(
          `https://workintech-fe-ecommerce.onrender.com/products?category=${categoryId}`
        );
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    if (selectedCategoryId !== null) {
      fetchProductsByCategory(selectedCategoryId);
    }
  }, [selectedCategoryId]);
  useEffect(() => {
    selectTopCategories();
  }, [categories]);
  useEffect(() => {
    const fetchProductsByCategory = async (categoryId) => {
      try {
        const response = await axios.get(
          `https://workintech-fe-ecommerce.onrender.com/products?category=${categoryId}`
        );
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    if (selectedCategoryId) {
      fetchProductsByCategory(selectedCategoryId);
    }
  }, [selectedCategoryId]);

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

  const handleCategoryClick = (categoryId) => {
    setSelectedCategoryId(categoryId);
  };

  useEffect(() => {
    const filteredProducts = selectedCategoryId
      ? products.filter((product) => product.category_id === selectedCategoryId)
      : products;
    setFilteredProducts(filteredProducts);
  }, [selectedCategoryId, products]);

  // filteredProducts yerine products kullanın
  console.log("Filtered:", filteredProducts);
  console.log("Selected Category ID:", selectedCategoryId);
  console.log("Products:", products);

  return (
    <>
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
                    to={`/shop/${
                      category.gender === "e" ? "erkek" : "kadin"
                    }/${slugify(category.title, {
                      lower: true,
                    })}`}
                  >
                    <ProductListCard
                      imgUrl={category.img}
                      title={category.title}
                      text={`5 Items in ${category.title}`}
                      className="w-full mb-1"
                      style={{ objectFit: "cover" }}
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
              {products.map((product) => (
                <Link
                  to={`/shop/${gender}/${selectedCategoryId}`} // İlgili kategoriye yönlendirme
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
                    productId={product.id} // productId'yi de iletiyoruz
                    categoryId={selectedCategoryId} // categoryId'yi de iletiyoruz
                  />
                </Link>
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
