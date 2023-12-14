import { NavLink } from "react-router-dom/cjs/react-router-dom";
import TextAndIcon from "../components/TextAndIcon";
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
    <header className="">
      <div className="bg-bgclr-dark text-clr-light ">
        <nav className="container-big py-[1.5em] px-[1em] flex justify-between items-center">
          <div className="flex gap-[1.875rem]">
            <TextAndIcon
              className="flex items-center "
              classText="text-[0.875rem] font-bold"
              imgUrl={telephone}
              text="(225) 555-0118"
            />
            <TextAndIcon
              className="flex items-center "
              classText="text-[0.875rem] font-bold"
              imgUrl={mail}
              text="michelle.rivera@example.com"
            />
          </div>
          <span className="text-[0.875rem] font-bold">
            Follow Us and get a chance to win 80% off
          </span>
          <span className="flex items-center gap-[1rem]">
            <span className="text-[0.875rem] font-bold">Follow Us :</span>
            <TextAndIcon imgUrl={insta} />
            <TextAndIcon imgUrl={youtube} />
            <TextAndIcon imgUrl={facebook} />
            <TextAndIcon imgUrl={twitter} />
          </span>
        </nav>
      </div>
      <div className="container-big px-[1em] py-[1.5em] flex gap-x-[2.5rem] items-center">
        <BrandName />
        <nav className="grow flex  justify-between">
          <ul className="flex text-clr-second gap-6 font-bold ">
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
          <ul className="flex row nowrap font-bold text-clr-primary gap-x-[2rem] mr-2">
            <li>
              <span className="flex items-center ">
                <TextAndIcon
                  imgUrl={login}
                  classText="text-[1rem] font-bold "
                  className="flex row nowrap"
                />
                <span>Login/Register</span>{" "}
              </span>
            </li>
            <li className="pt-[.5rem]">
              <TextAndIcon imgUrl={search} />
            </li>
            <li className="flex items-center ">
              <TextAndIcon classText="text-xl mr-2" imgUrl={shop} />
              <span className="text-lg pb-[1.5rem]">1</span>
            </li>
            <li className="flex items-center ">
              <TextAndIcon classText="text-xl mr-2 " imgUrl={like} />
              <span className="text-lg pb-[1.5rem]">1</span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
