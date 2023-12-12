import { NavLink } from "react-router-dom/cjs/react-router-dom";
import TextAndIcon from "../components/TextAndIcon";
import BrandName from "../components/BrandName";

export default function Header() {
  return (
    <header className="">
      <div className="bg-bgclr-dark text-clr-light ">
        <nav className="container-big py-[1.5em] px-[1em] flex justify-between items-center">
          <div className="flex gap-[1.875rem]">
            <TextAndIcon
              className="flex items-center "
              classText="text-[0.875rem] font-bold"
              classIcon=""
              text="(225) 555-0118"
            />
            <TextAndIcon
              className="flex items-center "
              classText="text-[0.875rem] font-bold"
              classIcon=""
              text="michelle.rivera@example.com"
            />
          </div>
          <span className="text-[0.875rem] font-bold">
            Follow Us and get a chance to win 80% off
          </span>
          <span className="flex items-center gap-[1rem]">
            <span className="text-[0.875rem] font-bold">Follow Us :</span>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </span>
        </nav>
      </div>
      <div className="container-big px-[1em] py-[1.5em] flex gap-x-[2.5rem] items-center">
        <BrandName />
        <nav className="grow flex justify-between">
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
          <ul className="flex font-bold text-clr-primary gap-x-[2rem]">
            <li>
              <TextAndIcon classIcon="" text=" Login " />/<span>Register</span>
            </li>
            <li>
              <i className=""></i>
            </li>
            <li>
              <TextAndIcon classIcon="" text=" 1" />
            </li>
            <li>
              <TextAndIcon classIcon="" text=" 1" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
