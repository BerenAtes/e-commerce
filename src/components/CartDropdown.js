import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavLink,
} from "reactstrap";
import ProductListCard from "./ProductListCard";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const CartDropdown = () => {
  const categories = useSelector((store) => store.global.categories);
  const dispatch = useDispatch();
  const history = useHistory();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const dropdownRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);

  console.log("categories", categories);
  const categoriesWomen = categories.filter(
    (category) => category.gender === "k"
  );
  const categoriesMen = categories.filter(
    (category) => category.gender === "e"
  );

  const handleToggle = () => {
    setDropdownOpen(!dropdownOpen);
    setIsHovered(!isHovered);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    if (!dropdownOpen) {
      setDropdownOpen(true);
      setIsHovered(true);
    }
  };

  const handleMouseLeave = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.relatedTarget)
    ) {
      closeDropdown();
    }
  };

  const handleShopClick = () => {
    history.push("/shop");
    closeDropdown();
  };

  useEffect(() => {
    if (!isHovered) {
      closeDropdown();
    }
  }, [isHovered]);

  const handleCategoryClick = async (categoryId) => {
    try {
      const response = await axios.get(
        `https://workintech-fe-ecommerce.onrender.com/products?category=${categoryId}`
      );
      setProducts(response.data.products);
      setSelectedCategory(categoryId);
    } catch (error) {
      console.error("Error fetching products by category:", error);
    } finally {
    }
  };

  return (
    <div className="flex flex-wrap">
      <Dropdown
        isOpen={dropdownOpen && isHovered}
        toggle={handleToggle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        innerRef={dropdownRef}
      >
        <DropdownToggle
          caret
          className="bg-white text-gray-700 font-bold text-base border-none cursor-pointer transition duration-300 hover:text-blue-500"
          onClick={handleShopClick}
        >
          Shop ↓
        </DropdownToggle>
        <DropdownMenu
          className="position-absolute"
          style={{
            top: "100%",
            left: "0",
            zIndex: 1000,
            backgroundColor: "white",
            borderRadius: "0.5rem",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            padding: "25px",
            display: isHovered ? "block" : "none",
          }}
          onMouseLeave={closeDropdown}
        >
          {isHovered && (
            <div className="flex flex-row">
              <div className="flex flex-col">
                <DropdownItem header className="ml-2">
                  <Link
                    to={`/categories/${
                      categoriesWomen.length > 0 ? "kadin" : "erkek"
                    }`}
                  >
                    KADIN
                  </Link>
                </DropdownItem>
                <hr />
                {categoriesWomen.map((category, i) => (
                  <NavLink
                    key={i}
                    href={`/shopping/${
                      category.gender === "k" ? "kadin" : "erkek"
                    }/${category.code.slice(2)}`}
                    className="p-2"
                  >
                    <DropdownItem
                      onClick={() => handleCategoryClick(category.id)}
                    >
                      {category.title}
                    </DropdownItem>
                  </NavLink>
                ))}
              </div>
              <div className="flex flex-col">
                <DropdownItem header className="ml-2">
                  <Link
                    to={`/categories/${
                      categoriesMen.length > 0 ? "erkek" : "kadin"
                    }`}
                  >
                    ERKEK
                  </Link>
                </DropdownItem>
                <hr />
                {categoriesMen.map((category, i) => (
                  <NavLink
                    key={i}
                    href={`/shopping/${
                      category.gender === "k" ? "kadin" : "erkek"
                    }/${category.code.slice(2)}`}
                    className="p-2"
                  >
                    <DropdownItem
                      onClick={() => handleCategoryClick(category.id)}
                    >
                      {category.title}
                    </DropdownItem>
                  </NavLink>
                ))}
              </div>
            </div>
          )}
        </DropdownMenu>
      </Dropdown>

      <div className="flex flex-wrap justify-center gap-y-4 md:flex-row md:flex-nowrap w-full mt-8">
        {products.map((product) => (
          <div
            key={product.id}
            className={`w-full sm:w-auto ${
              selectedCategory === product.category_id ? "selected" : ""
            } grow relative`}
          >
            <ProductListCard
              imgUrl={product.images[0].url}
              title={product.name}
              text={`(${product.stock} Items)`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartDropdown;
