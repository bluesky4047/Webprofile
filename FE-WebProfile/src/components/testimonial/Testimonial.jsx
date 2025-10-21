import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import TestimonialTemplate from "./TestimonialTemplate";
import "./testimonial.css";

const testimonialData = [
  {
    message: "Good skill and communication, feel great work together with him",
    name: "Garry Priambudi",
    designation: "React Native & ReactJS Developer",
  },
  {
    message:
      "Hafidh has a lot of experience especially in IT development, he is a kind person and has an ability to critically think about a problem. He also has the ability to manage a project.",
    name: "Fikri Hashfi",
    designation: "Backend | Cloud Engineer (GCP)",
  },
  {
    message:
      "I have worked with hafid in the same company before, he has good skill and ability in programming, working with him is a good opportunity",
    name: "Bagus Hidayat",
    designation: "Software Engineer",
  },
  {
    message:
      "Hafidh is a great coworker. he helped me a lot when i didn't know. he likes to share new teknologi, experience, and care with team and others. I wish him always success",
    name: "Hikam Abqory",
    designation: "Software Engineer | Backend, Fullstack",
  },
  {
    message:
      "Hafid has excellent communication skills to clients and to team members. he has great skills and knowledge about programming. he ever became my best partner during college and a lecturer partner to fill campus events.",
    name: "Suprihatin",
    designation: "Video Creator at PT. Kreasi Magenta Solusindo",
  },
  {
    message:
      "Hafidh is a good coworker that help us bringing great teamwork as team. he is talented worker with amazing skills.",
    name: "Ferry Firmansyah",
    designation: "Graphic Designer, UI/UX, Illustrator at Pre Grad Project",
  },
  {
    message: "It was fantastic to work together with Hafidh",
    name: "Moch Ma'ruf Amien",
    designation:
      "Full-Stack Dev who loves JavaScript & PHP | Node.js, React, Laravel",
  },
  {
    message: `I have known him since we were in the same college, he was my junior when I was in semester 3.
    He is a good personality, wants to learn something new and is active when discussing in the IT community in college.

    because I know him very well, I recommended him to join Edgeprop for a better career and he successfully joined the company.
    When in a work situation he can provide better solutions and respond quickly to the tasks he gets.

    I hope he can grow better for himself and the environment`,
    name: "Aisy Rozsidhy",
    designation: "Full stack Programmer | Antusias dengan Teknologi dan Desain",
  },
];

const Testimonial = () => {
  return (
    <div className="flex mx-auto justify-center px-2 max-w-218 pb-10 md:pb-25">
      <div className="w-full h-full cursor-grab">
        <p className="section-title mb-6 text-center">Testimonial</p>
        <Swiper
          id="testimonialSwiper"
          spaceBetween={30}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
        >
          {testimonialData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialTemplate testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
