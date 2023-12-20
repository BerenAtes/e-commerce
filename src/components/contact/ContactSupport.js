import phone from "../../assets/contact/phone.svg";
import location from "../../assets/contact/location.svg";
import mail from "../../assets/contact/mail.svg";

export default function ContactSupport() {
  return (
    <>
      <div className="bg-bgclr-light">
        <div className="container-small">
          <section className="font-bold py-[5em]">
            <div className="w-[55%] m-auto mb-[5rem]">
              <h6 className="text-[0.875rem] text-clr-dark">
                VISIT OUR OFFICE
              </h6>
              <h2 className="text-[2.5rem] text-clr-dark">
                We help small businesses with big ideas
              </h2>
            </div>
            <div className="flex flex-wrap justify-center">
              <div className="flex flex-col items-center gap-y-[0.9375rem] py-[3.125em] px-[2.5em]">
                <img
                  className="w-full h-full object-cover"
                  src={phone}
                  alt="img"
                />
                <div className="text-clr-dark text-[0.875rem]">
                  <p>georgia.young@example.com</p>
                  <p>georgia.young@ple.com</p>
                </div>
                <p className="text-clr-dark">Get Support</p>
                <button className="pill-shape self-center btn-primary-outline btn-small-wide">
                  Submit Request
                </button>
              </div>
              <div className="flex flex-col items-center gap-y-[0.9375rem] py-[3.125em] px-[2.5em] bg-bgclr-dark">
                <img
                  className="w-full h-full object-cover"
                  src={location}
                  alt="img"
                />
                <div className="text-clr-light text-[0.875rem]">
                  <p>georgia.young@example.com</p>
                  <p>georgia.young@ple.com</p>
                </div>
                <p className="text-clr-light">Get Support</p>
                <button className="pill-shape self-center btn-primary-outline btn-small-wide">
                  Submit Request
                </button>
              </div>
              <div className="flex flex-col items-center gap-y-[0.9375rem] py-[3.125em] px-[2.5em]">
                <img
                  className="w-full h-full object-cover"
                  src={mail}
                  alt="img"
                />
                <div className="text-clr-dark text-[0.875rem]">
                  <p>georgia.young@example.com</p>
                  <p>georgia.young@ple.com</p>
                </div>
                <p className="text-clr-dark">Get Support</p>
                <button className="pill-shape self-center btn-primary-outline btn-small-wide">
                  Submit Request
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
