import video from "../../assets/about/videobg.svg";
import videobutton from "../../assets/about/videobutton.svg";

export default function VideoAbout() {
  return (
    <div className="bg-bgclr-light">
      <div className="container-small">
        <section className="relative py-[7em] px-[2em]">
          <img
            className="object-cover rounded-[1.25rem]"
            src={video}
            alt="video-thumb"
          />
          <div className="bg-bgclr-primary absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 w-[10%] aspect-square rounded-full">
            <img
              className="object-cover rounded-[1.25rem]"
              src={videobutton}
              alt="video-thumb"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
