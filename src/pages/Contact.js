import ContactLetsTalk from "../components/contact/ContactLetsTalk";
import ContactSupport from "../components/contact/ContactSupport";
import ContactUs from "../components/contact/ContactUs";

export default function Contact() {
  return (
    <>
      <div className="mt-[5rem]">
        <ContactUs />
        <ContactSupport />
        <ContactLetsTalk />{" "}
      </div>
    </>
  );
}
