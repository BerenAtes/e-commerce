import Logos from "../components/Logos";
import PagesPath from "../components/PagesPath";
import ProductSection from "../components/product/ProductSection";
import ProductDescription from "../components/product/ProductDescription";

export default function Product() {
  return (
    <>
      <div>
        <ProductSection />
        <ProductDescription />
        <PagesPath />
      </div>
      <Logos />
    </>
  );
}
