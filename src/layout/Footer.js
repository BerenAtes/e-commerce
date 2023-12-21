import BrandName from "../components/BrandName";
import FooterContactBox from "../components/FooterContactBox";
import FooterInformation from "../components/FooterInformation";
import Icon from "../components/Icon";

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
              <Icon imgUrl={facefooter} />
              <Icon imgUrl={instafooter} />
              <Icon imgUrl={twitterfooter} />
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col container-small p-[1rem] mb-6 ">
        <div className="flex flex-wrap justify-between gap-4">
          <FooterInformation
            title="Company Info"
            items={["About Us", "Carrier", "We are Hiring", "Blog"]}
          />
          <FooterInformation
            title="Legal"
            items={[
              "Privacy Policy",
              "Terms of Service",
              "Refund Policy",
              "Cookie Policy",
            ]}
          />
          <FooterInformation
            title="Features"
            items={[
              "Business Marketing",
              "User Analytics",
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
        <div className="bg-bgclr-ligth-gray-1 py-2 text-clr-second font-bold text-sm text-left mt-[3rem]">
          Made With Love By Finland. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
