import React from "react";
import "./AboutUs.css";
export default function About() {
  return (
    <section id="About">
      <div className="AboutUs container w-[100%]">
        <div className="lg:flex py-[3%]">
          <img
            src="https://res.cloudinary.com/ash123/image/upload/v1657686843/HackOdisha2022/AboutUsImg_jlahdm-removebg-preview_fttq1j.png"
            alt="HackOdisha2022"
            className="h-[30vh] sm:h-[35vh] lg:mt-12 xl:h-[45vh] w-[80%] md:w-[60%] lg:w-[45%] xl:w-[42%] ml-12 md:ml-36 lg:ml-24 lg:mr-4"
          />
          <div className="  lg:pr-0 lg:w-[60%] py-1 pl-2 pr-1 ">
            <p className="font-sans lg:w-[95%]  text-base md:text-lg lg:text-xl xl:text-2xl txt leading-6">
              Welcome to HackOdisha 2.0, a hackathon that aims to bring
              creatives and developers together to solve some of the most
              pressing problems faced by communities all over the world. This
              36-hour-long event will bring together technocrats from all over
              the country. The problem statements are stimulating enough for
              programmers who love solving mind-bending problems. Our mission is
              to join creative minds with technical skills to come up with
              innovative ways of using sponsors’ technologies to develop
              innovative solutions to solve important real-world problems. The
              hackathon is open to experts as well as beginners because
              abstractions are equally important as implementations.
            </p>
            {/* <button
            type="button"
            class="text-white border-[3px] hover:bg-[#170d20] border-white font-medium rounded-3xl text-base lg:text-2xl px-3 py-0.5 lg:px-12 lg:py-2 text-center mr-2 my-12 "
          >
            Read More
          </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
