import TextAndIcon from "./TextAndIcon";

export default function FeaturedPosts({ imgUrl, className }) {
  return (
    <div className={className}>
      <div>
        <img src={imgUrl} />
      </div>
      <div className="flex flex-col text-left gap-y-[0.625rem] px-[1.5625rem] pt-[1.5625rem] pb-[2.1875rem">
        <div className="text-[12px]">
          <span className=" text-clr-disabled-element mr-[1rem]">Google</span>
          <span className=" text-clr-second mr-[1rem]">Trending</span>
          <span className=" text-clr-second mr-[1rem] ">New</span>
        </div>
        <h4 className="text-clr-dark font-bold text-[20px]">
          Loudest à la Madison #1 (L'integral)
        </h4>
        <p className="text-[14px]  text-clr-second max-w-[85%]">
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </p>
        <div className="flex justify-between">
          <TextAndIcon
            text="22 April 2021"
            className="text-[12px] text-clr-second"
          />
          <TextAndIcon
            text="10 comments"
            className="text-[12px] text-clr-second"
          />
        </div>
        <div>
          <span>Learn More</span>
          <i></i>
        </div>
      </div>
    </div>
  );
}
