import React, { useState } from "react";
import { faArrowRight, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = ({ data }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = (e) => {
    e.preventDefault(); // Supaya tidak redirect
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      {/* Card Utama */}
      <div className="max-w-106 h-full flex flex-col rounded-lg outline-[#FFFFFF] hover:shadow-2xl duration-300 transition-all shadow-gray-300 border border-gray-200">
        <img
          src={import.meta.env.VITE_BASE_URL + data?.img}
          alt={`${data?.title} image`}
          className="rounded-t-lg"
        />

        <div className="p-4 xs:p-8 flex flex-col justify-between h-full flex-grow">
          <div>
            <p className="text-gray-900 text-md xxs:text-lg font-semibold pt-1 mb-3">
              {data?.title}
            </p>
            <p
              style={{ lineHeight: "20px", letterSpacing: "0%" }}
              className="text-black-600 text-xs xxs:text-[14px] text-wrap"
            >
              <strong>Client : </strong>
              {data.client}
            </p>
            <p
              style={{ lineHeight: "20px", letterSpacing: "0%" }}
              className="text-gray-600 text-xs xxs:text-[14px] text-wrap"
            >
              {data?.description?.split(" ").slice(0, 10).join(" ") +
                (data?.description?.split(" ").length > 10 ? "..." : "")}
            </p>
          </div>
          <p className="text-black-600 text-xs font-medium mt-1">
            {data?.techStack}
          </p>

          <button
            onClick={handleOpenModal}
            className="btn hover:border-picto-primary hover:text-picto-primary bg-white text-sm xs:text-[16px] font-semibold hover:gap-3 xs:hover:gap-4 transition-all duration-300 mt-5 xs:py-5.75 px-6 max-sm:w-full flex items-center justify-center"
          >
            View Portfolio
            <span className="ms-1 xs:ms-3">
              <FontAwesomeIcon icon={faArrowRight} size="l" />
            </span>
          </button>
        </div>
      </div>

      {/* Modal Pop-up */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-white/30 z-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-lg relative animate-fadeIn p-6">
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 transition"
            >
              <FontAwesomeIcon icon={faXmark} size="lg" />
            </button>
            <img
              src={import.meta.env.VITE_BASE_URL + data?.img}
              alt={`${data?.title} image`}
              className="rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold mb-2 text-gray-900">
              {data?.title}
            </h2>
            <p className="text-gray-400 text-sm mb-3">{data?.categorys}</p>
            <div className="text-gray-700 text-sm leading-relaxed mb-4 max-h-64 overflow-y-auto pr-2">
              {data.description.split("<br>").map((line, index) => (
                <React.Fragment key={index}>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: line
                        .trim()
                        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                    }}
                  />
                  <br />
                </React.Fragment>
              ))}
            </div>

            <p className="text-black-600 text-xs font-medium mb-2">
              {data?.techStack}
            </p>

            {Array.isArray(data?.link) &&
              data.link.map((url, index) => (
                <a
                  key={index}
                  href={url.startsWith("http") ? url : `https://${url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-picto-primary text-white font-semibold py-2 px-5 rounded-md hover:bg-picto-primary/80 transition-all mb-2 mr-2"
                >
                  View Portfolio {index + 1}
                  <FontAwesomeIcon icon={faArrowRight} />
                </a>
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
