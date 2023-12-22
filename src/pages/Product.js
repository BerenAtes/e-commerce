import Logos from "../components/Logos";
import PagesPath from "../components/PagesPath";
import ImageSlider from "../utils/ImageSlider";

import ProductDescription from "../components/product/ProductDescription";
import ProductBestSellers from "../components/product/ProductBestSellers";
import SliderProduct from "../components/product/SliderProduct";

export default function Product() {
  return (
    <>
      <div>
        {" "}
        <PagesPath />
        <SliderProduct />
        <ProductDescription />
        <ProductBestSellers />
      </div>
      <Logos />
    </>
  );
}
