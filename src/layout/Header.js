import { NavLink } from "react-router-dom/cjs/react-router-dom";
import IconIcon from "../components/Icon";
import BrandName from "../components/BrandName";

import telephone from "../assets/icons/telephone.svg";
import mail from "../assets/icons/mail.svg";

import insta from "../assets/icons/insta.svg";
import youtube from "../assets/icons/youtube.svg";
import facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";

import login from "../assets/icons/login.svg";
import search from "../assets/icons/search.svg";
import shop from "../assets/icons/shop.svg";
import like from "../assets/icons/like.svg";

import { Link } from "react-router-dom";
import Gravatar from "react-gravatar";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { userLogout } from "../store/actions/userAction";
import CartDropdown from "../components/CartDropdown";

export default function Header() {
  const { user, isLoggedIn } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogout = () => {
    dispatch(userLogout());
    history.push("/");
  };
  return (
    <header className=" ">
      <div className="bg-bgclr-dark text-clr-light p-4  hidden lg:block">
        <div className="container-big ">
          <nav className="flex items-center justify-between flex-wrap">
            <div className="flex gap-4">
              <IconIcon
                className="text-[0.875rem] font-bold mb-[1rem] mr-[5rem] flex-col grid grid-cols-[auto,1fr]"
                imgUrl={telephone}
                text="(225) 555-0118"
              />
              <IconIcon
                className="text-[0.875rem] font-bold flex-col grid grid-cols-[auto,1fr]"
                imgUrl={mail}
                text="michelle.rivera@example.com"
              />
            </div>
            <span className="text-[0.875rem] font-bold block md:inline-block mb-2 md:mb-0">
              Follow Us and get a chance to win 80% off
            </span>
            <div className="flex items-center gap-2">
              <span className="text-[0.875rem] font-bold">Follow Us :</span>
              <IconIcon imgUrl={insta} />
              <IconIcon imgUrl={youtube} />
              <IconIcon imgUrl={facebook} />
              <IconIcon imgUrl={twitter} />
            </div>
          </nav>
        </div>
      </div>

      <div className="container-big pb-[0] px-[1em] py-[1.5em] flex flex-col md:flex-row md:justify-between items-center">
        <BrandName />
        <nav className="mt-4 md:mt-0 flex-grow flex flex-col md:flex-row justify-between">
          <ul className="flex flex-col md:flex-row text-clr-second gap-6 font-bold mb-4 md:mb-0">
            <li>
              <NavLink
                to="/home"
                className="nav-link hover:text-blue-500 transition-colors duration-300"
              >
                Home
              </NavLink>
            </li>
            <li className="text-clr-dark">
              <CartDropdown />
              <i></i>
            </li>
            <li>
              <NavLink
                to="/about"
                className="nav-link hover:text-blue-500 transition-colors duration-300"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#"
                className="nav-link hover:text-blue-500 transition-colors duration-300"
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="nav-link hover:text-blue-500 transition-colors duration-300"
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#"
                className="nav-link hover:text-blue-500 transition-colors duration-300"
              >
                Pages
              </NavLink>
            </li>
          </ul>

          <ul className="flex flex-col md:flex-row row nowrap font-bold text-clr-primary gap-x-2 mb-[1rem]">
            {isLoggedIn ? (
              <div className="flex flex-wrap items-center px-2 ">
                <Gravatar
                  email={user.email}
                  className="rounded-full w-9 mb-[1rem]"
                />
                <p className="flex text-clr-second text-[.9rem] px-3 tracking-wider pb-[1rem]">
                  {user.name}
                </p>
              </div>
            ) : (
              <div className="flex flex-wrap items-center px-2 mb-[2rem]">
                <Link to="/login">
                  <span> Login</span>
                </Link>
                <span> /</span>
                <Link to="/Register">
                  <span> Register</span>
                </Link>
              </div>
            )}
            <div>
              {user.name ? (
                <div className="flex justify-end mr-[1rem] pt-[.3rem] mb-[1rem]">
                  <button
                    onClick={() => handleLogout()}
                    className="text-[.8rem] px-2 py-1 bg-bgclr-primary text-clr-light font-bold rounded-md "
                  >
                    Logout
                    <hr />
                  </button>
                </div>
              ) : null}
            </div>

            <li className="s hidden md:inline-block ">
              <IconIcon imgUrl={search} classText="text-xl" />
            </li>
            <li className="flex items-center  hidden md:inline-block">
              <IconIcon classText="text-xl mr-2" imgUrl={shop} />
              <span className="text-lg pb-[1.5rem]"></span>
            </li>
            <li className="flex items-center hidden md:inline-block ">
              <IconIcon classText="text-xl mr-2" imgUrl={like} />
              <span className="text-lg pb-[1.5rem]"></span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
