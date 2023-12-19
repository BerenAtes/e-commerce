import Logos from "../components/Logos";
import PagesPath from "../components/PagesPath";
import ProductSection from "../components/product/ProductSection";
import ProductDescription from "../components/product/ProductDescription";
import ProductBestSellers from "../components/product/ProductBestSellers";

export default function Product() {
  return (
    <>
      <div>
        {" "}
        <PagesPath />
        <ProductSection />
        <ProductDescription />
        <ProductBestSellers />
      </div>
      <Logos />
    </>
  );
}
