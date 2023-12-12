export default function TextAndIcon({ icon, text, classText, ...rest }) {
  return (
    <span {...rest}>
      <i className={icon} />
      <span className={classText}> {text} </span>
    </span>
  );
}
