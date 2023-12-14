import BrandName from "../components/BrandName";
import FooterContactBox from "../components/FooterContactBox";
import FooterInformation from "../components/FooterInformation";
import TextAndIcon from "../components/TextAndIcon";

import twitterfooter from "../assets/icons/twitterfooter.svg";
import facefooter from "../assets/icons/facefooter.svg";
import instafooter from "../assets/icons/instafooter.svg";

export default function Footer() {
  return (
    <footer className=" text-left">
      <div className="bg-bgclr-ligth-gray-1">
        <div className=" flex justify-between  py-10 container-small items-center container">
          <BrandName />
          <div>
            <span className="flex items-center gap-[1rem]">
              <TextAndIcon imgUrl={facefooter} />
              <TextAndIcon imgUrl={instafooter} />
              <TextAndIcon imgUrl={twitterfooter} />
            </span>
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-between container-small py-[3rem] mb-[6rem]">
          <FooterInformation
            title="Company Info"
            items={["About Us", "Carrier", "We are haring", "Blog"]}
          />
          <FooterInformation
            title="Legal"
            items={["About Us", "Carrier", "We are haring", "Blog"]}
          />
          <FooterInformation
            title="Features"
            items={[
              "Business Marketing",
              "User Analytic",
              "Live Chat",
              "Unlimited Support",
            ]}
          />
          <FooterInformation
            title="Resources"
            items={["IOS & Android", "Watch a Demo", "Customers", "API"]}
          />
          <FooterContactBox />
        </div>
      </div>
      <div className="bg-bgclr-ligth-gray-1">
        <div className=" container-small text-clr-second font-bold text-[1rem] py-[2rem] text-left">
          Made With Love By Finland All Righ
        </div>
      </div>
    </footer>
  );
}
