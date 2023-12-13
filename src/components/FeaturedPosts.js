import TextAndIcon from "./TextAndIcon";

export default function FeaturedPosts({ imgUrl, className }) {
  return (
    <div className={className}>
      <div>
        <img src={imgUrl} />
      </div>
      <div>
        <div>
          <span>Google</span>
          <span>Trending</span>
          <span>New</span>
        </div>
        <h4>Loudest à la Madison #1 (L'integral)</h4>
        <p>
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </p>
        <div>
          <TextAndIcon text="22 April 2021" />
          <TextAndIcon text="10 comments" />
        </div>
        <div>
          <span>Learn More</span>
          <i></i>
        </div>
      </div>
    </div>
  );
}
