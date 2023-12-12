import BrandName from "../components/BrandName";
import FooterContactBox from "../components/FooterContactBox";
import FooterInformation from "../components/FooterInformation";

export default function Footer() {
  return (
    <footer>
      <div className="bg-bgclr-ligth-gray-1">
        <div className="flex justify-between  py-10 container-small">
          <BrandName />
          <div>
            <i> facebook</i>
            <i> insta</i>
            <i> twitter</i>
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-between">
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
    </footer>
  );
}
