export default function FooterContactBox() {
  return (
    <div>
      <h5 className="font-bold text-clr-dark mb-8">Get In Touch</h5>
      <div className="border-[1px]  overflow-hidden  rounded-[7px] border-[#E6E6E6]">
        <input
          className="py-[1rem] px-[1.3rem]  "
          type="text"
          placeholder="Your Email"
        />
        <input
          className="bg-bgclr-primary text-clr-light px-[1.5rem] py-[1rem]"
          type="submit"
          value="Subscribe"
        />
      </div>
      <p className="text-clr-second">Lore imp sum dolor Amit</p>
    </div>
  );
}
