import React from "react";
import Mohit from "./assets/mohit.jfif";
import abhishek from "./assets/abhishek.jfif";
import aman from "./assets/aman.jfif";
import manasi from "./assets/manasi.jfif";
import thakur from "./assets/thakur.jfif";
import vinit from "./assets/vinit.jfif";
import saurabh from "./assets/saurabh.jfif";

const judgesData = [
  {
    name: "Mohit Prateek",
    img: Mohit,
    link: "https://www.linkedin.com/in/mohitprateek/",
    desc: "CEO & Founder, Anakin(Y Combinator S21)",
  },
  {
    name: "Vinit Shahdeo",
    img: vinit,
    link: "https://linkedin.com/in/vinitshahdeo",
    desc: "Software Engineer, Postman",
  },
  {
    name: "Mansi Parashar",
    img: manasi,
    link: "https://linkedin.com/in/mansi-parashar-4bb713173",
    desc: "Software Development Engineer, Amazon",
  },
  {
    name: "Saurabh Thakur",
    img: saurabh,
    link: "http://linkedin.com/in/thakursaurabh1998",
    desc: "Software Engineer, Cruise",
  },
  {
    name: "Thakur Patel",
    img: thakur,
    link: "https://www.linkedin.com/in/thakur-patel/",
    desc: "Chief of Blockchain Products, MetaDecrypt",
  },
  {
    name: "Aman kumar Dewangan",
    img: aman,
    link: "https://www.linkedin.com/in/aman-kumar-dewangan-akd13o1/",
    desc: "Edison Engineer, GE Healthcare",
  },
  {
    name: "Abhishek Upmanyu",
    img: abhishek,
    link: "https://www.linkedin.com/in/abhishekupmanyu/",
    desc: "Associate Software Engineer, Tekion",
  },
];

function Judges() {
  return (
    <section id="Judges">
      <div className="container">
        <div className="text-white lg:text-[20px] md:text-[18px] font-semibold">
          <h1 className="mx-16 py-10 mb-3 text-4xl font-normal"># Judges</h1>
          <div className="grid grid-cols-1 sm:gird-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {judgesData.map((judge, idx) => {
              return (
                <div className="flex flex-col items-center justify-center text-center">
                  <a href={judge.link} rel="noreferrer" target={"_blank"}>
                    <img
                      src={judge.img}
                      alt={judge.name}
                      width="200px"
                      className="rounded-[50%] border-cyan-400"
                    />
                  </a>
                  <h3 className="mt-6 text-slate-50">{judge.name}</h3>
                  <p className="mb-6 md:mb-8 text-slate-300 text-sm">
                    {judge.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Judges;
