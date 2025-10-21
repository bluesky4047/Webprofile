import Marquee from "react-fast-marquee";
const commonSVGClass = "h-5 sm:h-8 md:h-10";
const commonImgClass = "h-5 sm:h-8 md:h-10 object-contain";

const brandLogos = [
  <img
    key="adge"
    src="./src/assets/Archive/adge.png"
    alt="Logo"
    className={commonImgClass}
  />,
  <img
    key="bca"
    src="./src/assets/Archive/bca.png"
    alt="Logo"
    className={commonImgClass}
  />,
  <img
    key="binar"
    src="./src/assets/Archive/binar.png"
    alt="Logo"
    className={commonImgClass}
  />,
  <img
    key="bni"
    src="./src/assets/Archive/bni.jpg"
    alt="Logo"
    className={commonImgClass}
  />,
  <img
    key="docotel"
    src="./src/assets/Archive/docotel.jpg"
    alt="Logo"
    className={commonImgClass}
  />,
  <img
    key="komerce"
    src="./src/assets/Archive/komerce.png"
    alt="Logo"
    className={commonImgClass}
  />,
  <img
    key="sig"
    src="./src/assets/Archive/sig.png"
    alt="Logo"
    className={commonImgClass}
  />,
  <img
    key="synrgy"
    src="./src/assets/Archive/synrgy.jpeg"
    alt="Logo"
    className={commonImgClass}
  />,
];

const HappyClients = () => {
  return (
    <div className="content py-10 md:py-25 flex flex-col items-center px-2">
      <div className="max-w-144.25 text-center ">
        <p className="section-title mb-6">Happy Clients</p>
        <p className="text-[14px] sm:text-lg text-soft-dark font-normal">
          I've had the pleasure of working with a diverse range of companies,
          from startups to established brands.
        </p>
      </div>
      <Marquee pauseOnHover={true} speed={100} className="">
        <p className="flex items-center pt-4 md:pt-10">
          {brandLogos?.map((logo, index) => (
            <span className="ps-5 sm:ps-10 md:ps-20" key={index}>
              {logo}
            </span>
          ))}
        </p>
      </Marquee>
    </div>
  );
};

export default HappyClients;
