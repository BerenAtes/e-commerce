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

export default function Header() {
  return (
    <header className=" ">
      <div className="bg-bgclr-dark text-clr-light p-4  hidden lg:block">
        <div className="container-big ">
          <nav className="flex items-center justify-between flex-wrap">
            <div className="flex gap-4">
              <IconIcon
                className="text-[0.875rem] font-bold mb-[1rem] mr-[5rem]"
                imgUrl={telephone}
                text="(225) 555-0118"
              />
              <IconIcon
                className="text-[0.875rem] font-bold"
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

      <div className="container-big px-[1em] py-[1.5em] flex flex-col md:flex-row md:justify-between items-center">
        <BrandName />
        <nav className="mt-4 md:mt-0 flex-grow flex flex-col md:flex-row justify-between">
          <ul className="flex flex-col md:flex-row text-clr-second gap-6 font-bold mb-4 md:mb-0">
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li className="text-clr-dark">
              <NavLink to="/shop">Shop</NavLink>
              <i></i>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="#">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="#">Pages</NavLink>
            </li>
          </ul>
          <ul className="flex flex-col md:flex-row row nowrap font-bold text-clr-primary gap-x-2 mr-2">
            <li className="flex items-center hidden md:hidden">
              <IconIcon imgUrl={login} classText="text-xl mr-2 font-bold" />
              <span className="pb-[2rem] mr-[8rem]">Login/Register</span>
            </li>

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
