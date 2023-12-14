export default function CategoryCard({ imgUrl, textBtn, className }) {
  return (
    <div className={className}>
      <img className="m-[1rem] " src={imgUrl} />
      <button className=" absolute text-clr-dark bg-bgclr-light font-bold min-w-[35%] py-[.6rem] px-[1.5em] left-[0.8rem] ml-[1rem]  bottom-[1rem] ">
        {textBtn}
      </button>
    </div>
  );
}
