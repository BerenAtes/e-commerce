import { Carousel, Typography, Button } from "@material-tailwind/react";
import Slider from "react-slick";
import slider2 from "../assets/slider/slider2.svg";

const HomeBottomSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Carousel {...settings} className="h-[715px]">
      <div className="relative h-full w-full bg-[#23856D]">
        <img
          src={slider2}
          alt="image 1"
          className=" object-cover absolute top-[86px] right-[215px]"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center  ">
          <div className=" w-[30rem] text-center mr-[20rem]">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Vita Classic Product
            </Typography>
            <Typography variant="h4" color="white" className="mb-12 opacity-80">
              We know how large objects will act, We know how are objects will
              act, We know
            </Typography>
            <div className="flex justify-between gap-2">
              <h5 className="text-[1.5rem] font-bold text-white my-auto ml-2">
                $16.48
              </h5>
              <Button size="lg" color="white">
                ADD TO CART
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Beauty of Nature
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default HomeBottomSlider;
