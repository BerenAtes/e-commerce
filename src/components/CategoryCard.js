export default function CategoryCard({ imgUrl, textBtn, className }) {
  return (
    <div className={className}>
      <img className="" src={imgUrl} />
      <button className=" absolute text-clr-dark bg-bgclr-light font-bold min-w-[35%] py-[0.75em] px-[1.625em] left-[1rem] bottom-[1rem] z-10">
        {textBtn}
      </button>
    </div>
  );
}
