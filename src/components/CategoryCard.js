export default function CategoryCard({ imgUrl, textBtn, className }) {
  return (
    <div className={className}>
      <img src={imgUrl} />
      <button>{textBtn}</button>
    </div>
  );
}
