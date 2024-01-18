import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavLink,
} from "reactstrap";

const CartDropdown = () => {
  const categories = useSelector((store) => store.global.categories);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const dropdownRef = useRef(null);

  const history = useHistory();
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

  return (
    <div className="flex">
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
                  KADIN
                </DropdownItem>
                <hr />
                {categoriesWomen.map((category, i) => (
                  <NavLink
                    key={i}
                    href={`/shopping/:${
                      category.gender === "k" ? "kadin" : "erkek"
                    }/:${category.code.slice(2)}`}
                    className="p-2"
                  >
                    <DropdownItem>{category.title}</DropdownItem>
                  </NavLink>
                ))}
              </div>
              <div className="flex flex-col">
                <DropdownItem header className="ml-2">
                  ERKEK
                </DropdownItem>
                <hr />
                {categoriesMen.map((category, i) => (
                  <NavLink
                    key={i}
                    href={`/shopping/:${
                      category.gender === "k" ? "kadin" : "erkek"
                    }/:${category.code.slice(2)}`}
                    className="p-2"
                  >
                    <DropdownItem>{category.title}</DropdownItem>
                  </NavLink>
                ))}
              </div>
            </div>
          )}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default CartDropdown;
