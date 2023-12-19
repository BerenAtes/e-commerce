import twitter from "../../assets/about/tw.png";
import facebook from "../../assets/about/fb.png";
import instagram from "../../assets/about/ins.png";

export function Card({ children, ...rest }) {
  return <div {...rest}>{children}</div>;
}

function Heading({ children, headingLevel, ...rest }) {
  const Title = `h${headingLevel}`;

  return <Title {...rest}>{children}</Title>;
}

export function Title({ children, titleLevel, ...rest }) {
  return (
    <Heading headingLevel={titleLevel} {...rest}>
      {children}
    </Heading>
  );
}

export function CardSubTitle({ children, titleLevel, ...rest }) {
  return (
    <Heading headingLevel={titleLevel} {...rest}>
      {children}
    </Heading>
  );
}

export function Price({ children, ...rest }) {
  return <span {...rest}>{children}</span>;
}

export function CardImg({ urlImg, altImg, ...rest }) {
  return <img {...rest} src={urlImg} alt={altImg} />;
}

export default function UserCardAbout({
  imgUrl,
  username,
  profession,
  ...rest
}) {
  return (
    <>
      <Card {...rest}>
        <div>
          <CardImg
            className="aspect-[137/100]"
            urlImg={imgUrl}
            altImg="img-user"
          />
        </div>
        <div className="p-[1.875em] flex flex-col items-center gap-y-[0.625rem]">
          <span className="text-clr-dark font-bold">{username}</span>
          <span className="text-clr-second font-bold text-[0.875rem]">
            {profession}
          </span>
          <div className="flex items-center gap-[1.25rem]">
            <img className="" src={facebook} alt="img" />
            <img className="" src={instagram} alt="img" />
            <img className="" src={twitter} alt="img" />
          </div>
        </div>
      </Card>
    </>
  );
}
