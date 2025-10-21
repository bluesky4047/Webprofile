import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Web Development",
    description:
      "We build end-to-end web solutions, handling both backend and frontend development. Our team specializes in modern, scalable, and high-performance applications using technologies like Laravel, Golang, MySQL, PostgreSQL, MongoDB, React, and Next.js. From system architecture to UI/UX design, we deliver digital products that are fast, secure, and user-friendly, perfectly tailored to your business needs.",
  },
  {
    id: 2,
    title: "Cloud Management",
    description: `
    We provide comprehensive cloud management services from deployment to optimization ensuring your systems run securely, efficiently, and reliably.<br><br>
    Our expertise includes:<br>
    • AWS Cloud Infrastructure setup, scaling, and cost optimization for EC2, S3, RDS, and more.<br>
    • Linux Server Administration configuring, hardening, and automating production environments.<br>
    • VPS Management provisioning and maintaining virtual servers with customized configurations.<br>
    • aaPanel Setup & Optimization simplifying hosting and control with a clean, intuitive interface.<br>
    • Docker & Containerization building scalable and portable environments for modern microservices.<br><br>
    We make sure your cloud infrastructure is secure, automated, and ready to scale, so you can focus on growing your business not managing servers.
  `,
  },
  {
    id: 3,
    title: "Fullstack Mentorship",
    description: `We guide aspiring developers and professionals to become skilled full-stack engineers, capable of handling both frontend and backend development.
    Our mentorship covers:<br>
    •⁠  ⁠Backend Development API design, JWT authentication, database management, and deployment.<br>
    •⁠  ⁠Frontend Development modern interface building, HTML/CSS slicing, and interactive UI`,
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">My Services</p>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
