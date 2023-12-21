import BrandName from "../components/BrandName";
import FooterContactBox from "../components/FooterContactBox";
import FooterInformation from "../components/FooterInformation";
import Icon from "../components/Icon";

import twitterfooter from "../assets/icons/twitterfooter.svg";
import facefooter from "../assets/icons/facefooter.svg";
import instafooter from "../assets/icons/instafooter.svg";

export default function Footer() {
  return (
    <footer className="text-left justify-center">
      <div className="bg-bgclr-ligth-gray-1 py-4">
        <div className="container-small pl-[1rem]">
          <BrandName className="text-2xl font-bold text-clr-dark" />
          <div className="mt-4 pl-[1rem]">
            <span className="flex items-center gap-4">
              <Icon imgUrl={facefooter} className="w-6 h-6" />
              <Icon imgUrl={instafooter} className="w-6 h-6" />
              <Icon imgUrl={twitterfooter} className="w-6 h-6" />
            </span>
          </div>
        </div>
      </div>

      <div className="container-small p-4 mb-6 lg:flex lg:justify-between">
        <div className="flex flex-col  gap-[5rem] md:flex-row lg:flex-row items-start">
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
        <br />
        <div className=" bg-bgclr-ligth-gray-1 py-2 text-clr-second font-bold text-sm mt-4 text-center">
          Made With Love By Finland. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
