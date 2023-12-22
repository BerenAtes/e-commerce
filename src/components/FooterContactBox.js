export default function FooterContactBox() {
  return (
    <div>
      <h5 className="font-bold text-clr-dark mb-4">Get In Touch</h5>
      <div className="border-[1px] overflow-hidden rounded-[7px] border-[#E6E6E6]">
        <div className="flex flex-col md:flex-row">
          <input
            className="py-[1rem] px-[1.3rem] mb-2 md:mb-0 md:mr-2 w-full md:w-auto"
            type="text"
            placeholder="Your Email"
          />
          <input
            className="bg-bgclr-primary text-clr-light px-[1.5rem] py-[1rem] w-full md:w-auto"
            type="submit"
            value="Subscribe"
          />
        </div>
      </div>
      <p className="text-clr-second">Lore imp sum dolor Amit</p>
    </div>
  );
}
