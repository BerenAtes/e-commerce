import background from "../../assets/contact/bg.svg";

export default function ContactUs() {
  return (
    <>
      <section>
        <div>
          <img
            className="w-full h-full object-cover"
            src={background}
            alt="img"
          />
        </div>
        <div>
          <h5>CONTACT US </h5>
          <h1>Get in touch today!</h1>
          <p>We know how large objects will act, but things on a small scale</p>
          <h3>Phone ; +451 215 215 </h3>
          <h3>Fax : +451 215 215</h3>
        </div>
      </section>
    </>
  );
}
