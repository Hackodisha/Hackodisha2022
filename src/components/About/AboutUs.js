import React,{useState,useEffect} from "react";
import "./AboutUs.css";

export default function About() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

{/* Performs similarly to componentDidMount in classes */}
useEffect(() => {
    window.addEventListener("resize", () => {
        const ismobile = window.innerWidth < 1200;
        if (ismobile !== isMobile) setIsMobile(ismobile);
    }, false);
}, [isMobile]);

  return (
    <section id="About">
    <div className={`AboutUs ${isMobile ? "none" : "container"} w-[100%]`}>
      {/* <div className=" text-3xl lg:text-5xl ml-[5%] lg:ml-[10%] xl:ml-[7%] pt-20 mb-12 text-white tracking-normal font-medium">
        About Us
      </div> */}
      <div className="lg:flex pb-4 ">
        <img
          src="https://res.cloudinary.com/ash123/image/upload/v1657686843/HackOdisha2022/AboutUsImg_jlahdm-removebg-preview_fttq1j.png"
          alt="HackOdisha2022"
          className="h-[20vh] sm:h-[35vh] xl:h-[45vh] mb-[10%] w-[50%] lg:w-[55%] xl:w-[42%] mx-[10%] lg:ml-36 lg:mr-12"
        />
        <div className=" px-[10%] lg:pl-[2%] lg:pr-0 lg:w-[60%] lg:mr-3 ">
          <p className="font-sans lg:w-[95%]  text-sm md:text-base lg:text-xl txt leading-4">
            Welcome to HackOdisha 2.0, a hackathon that aims to bring creatives
            and developers together to solve some of the most pressing problems
            faced by communities all over the world. This 36-hour-long event
            will bring together technocrats from all over the country. The
            problem statements are stimulating enough for programmers who love
            solving mind-bending problems. Our mission is to join creative minds
            with technical skills to come up with innovative ways of using
            sponsors’ technologies to develop innovative solutions to solve
            important real-world problems. The hackathon is open to experts as
            well as beginners because abstractions are equally important as
            implementations.
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