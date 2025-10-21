import person from "../../assets/images/person.png";
import "./introduction.css";
import InformationSummary from "./InformationSummary";

const informationSummaryData = [
  {
    id: 1,
    title: "Experience",
    description: "6 Y.",
  },
  {
    id: 2,
    title: "Projects Completed",
    description: "9",
  },
  {
    id: 3,
    title: "Happy Clients",
    description: "9",
  },
];

const Introduction = ({ data }) => {
  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500">
          <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full">
            Hello, I’m
            <span className="flex flex-wrap shrink-0 w-full">
              Ahmad Hafidh Ayatullah, M.Kom
            </span>
          </p>
          <p className="text-xs xxs:text-lg lg:text-[18px] my-6">
            Master’s Degree in Computer Science (ITS, 2023). Over 6 years of
            experience in software engineering across startup and enterprise
            environments, including Krigav LTD (News & Media, UK), EdgeProp
            Singapore (Property Tech), and BINAR Academy (Education Technology).
            <br />
            <br />
            From 2017 to 2021, I completed 9+ freelance projects as a backend
            developer, focusing on building scalable and high-performance web
            applications. Skilled in:{" "}
            <span className="bg-highlight">
              Laravel, Node.js, Express.js, MySQL, PostgreSQL, MongoDB,
              React.js, Next.js, Golang, Typescript, Python for AI and Data
              Mining.
            </span>{" "}
            <br />
            <br />
            Currently based in GMT+7, open to collaboration and global
            opportunities.
          </p>
          <p className="text-center lg:text-start"></p>
        </div>
        <div className="mx-auto lg:mx-0 relative">
          <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit mt-10 gap-1">
            {informationSummaryData.map((item, index) => (
              <InformationSummary key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
      <div
        className={`max-w-134 w-full h-full max-lg:mx-auto aspect-[536/636] relative`}
      >
        <img
          className={`shadow-2xl shadow-gray-200 w-full h-full absolute bottom-0 object-cover bg-white rounded-3xl`}
          src=""
          alt="person"
        />
      </div>
    </div>
  );
};

export default Introduction;
