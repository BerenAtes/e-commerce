export default function Icon({ imgUrl, text, classText, ...rest }) {
  return (
    <span {...rest}>
      <img className="pr-[.5rem]" src={imgUrl} alt="icon" />
      <span className={classText}> {text} </span>
    </span>
  );
}
