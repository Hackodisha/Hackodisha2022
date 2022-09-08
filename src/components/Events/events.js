import React from "react";
import cp from "../../assets/Events/code-o-fiesta.jpeg";
import ev1 from "../../assets/Events/Anshul.jpeg";
import ev2 from "../../assets/Events/Gaurav Sen.jpeg";
import ev3 from "../../assets/Events/MD Fraz.jpeg";
import "./events.css";
import { BsArrowRight } from "react-icons/bs";

const eventData = [
  {
    id: 1,
    Name: "code-o-fiesta",
    type: "competition",
    thumbnail: cp,
    RegisterLink:
      "https://www.codingninjas.com/events/code-o-fiesta-hackodissa-2-0",
  },
  {
    id: 2,
    Name: "Gaurav Sen",
    type: "Workshop",
    thumbnail: ev2,
    Join: "",
  },
  {
    id: 3,
    Name: "MD Fraz",
    type: "Workshop",
    thumbnail: ev3,
    Join: "",
  },
  {
    id: 4,
    Name: "Anshul",
    type: "Workshop",
    thumbnail: ev1,
    Join: "",
  },
];

function Events() {
  return (
    <section id="events">
      <div className="container">
        <div className="text-white p-20 lg:text-[20px] md:text-[18px] font-semibold">
          <h1 className="mx-4 py-10 mb-3 text-4xl font-medium">
            Hackodisha 2.0 Events
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {eventData.map((event) => {
              return (
                <div key={event.id} className="relative">
                  {" "}
                  {event.type === "competition" && (
                    <div>
                      <img
                        className="registration-competition-thumbnail"
                        src={event.thumbnail}
                        alt={event.Name}
                      />
                      <a
                        href={event?.RegisterLink}
                        rel="noreferrer"
                        target="_blank"
                        className="registration-competition-button"
                      >
                        Register
                        <span>
                          <BsArrowRight />
                        </span>
                      </a>
                    </div>
                  )}
                  {event.type !== "competition" && (
                    <img src={event.thumbnail} alt={event.Name} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Events;
