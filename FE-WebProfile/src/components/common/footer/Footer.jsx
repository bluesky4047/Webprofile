import logo from "../../../assets/logo.png";

/* Footer nabLinks */
const navItems = [
  { id: 1, name: "Home", url: "introduction" },
  // { id: 2, name: "About", url: "About" },
  // { id: 3, name: "Process", url: "Process" },
  { id: 4, name: "Portfolio", url: "Portfolio" },
  // { id: 5, name: "Blog", url: "Blog" },
  { id: 6, name: "My Services", url: "Services" },
  { id: 7, name: "Contact", url: "Contact" },
];
const copyrightYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="pt-25 md:pt-40 content max-2xl:px-3">
      <div className="flex max-md:flex-col justify-center mx-0 items-center h-full w-full text-neutral-200">
        <div className="mx-7 max-md:my-7 text-center">
          {navItems.map((item) => (
            <a
              key={item.id}
              className="mx-2 group inline-block relative w-fit text-[12px] sm:text-[16px]"
              href={`#${item.url.toLowerCase()}`}
            >
              {item.name}
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-white scale-x-0 duration-300 group-hover:scale-x-100"></span>
            </a>
          ))}
        </div>
      </div>
      <p className="text-white text-center max-xs:text-[12px] max-md:text-[14px] w-full py-10">
        Copyright &copy; {copyrightYear} Picto.
      </p>
    </div>
  );
};

export default Footer;
