import React from "react";

import fcp1 from "../../assets/RefreshmentPartners/fcp1.png";
import fcp2 from "../../assets/RefreshmentPartners/fcp2.png";
import mcp1 from "../../assets/RefreshmentPartners/mcp1.png";
import mcp2 from "../../assets/RefreshmentPartners/daawat.png";
import mcp3 from "../../assets/RefreshmentPartners/sugaritttt.png";

const eventData = [
  {
    img: fcp1,
    Name: "Tikkaway",
  },
  {
    img: fcp2,
    Name: "Baarish",
  },
  {
    img: mcp1,
    Name: "Cinecaarnival",
  },
  {
    img: mcp2,
    Name: "Dawaat",
  },
  {
    img: mcp3,
    Name: "SugarIt",
  },
];

function RefreshmentPartners() {
  return (
    <section id="refreshment-partners">
      <div className="container">
        <div className="text-white p-4 md:p-10 md:pt-4 lg:text-[20px] md:text-[18px] font-semibold">
          <h1 className="py-5 pb-0 md:py-10 text-4xl font-normal">
            Refreshment Partners
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {eventData.map((event, idx) => {
              return (
                <div key={idx}>
                  <img
                    className="rounded-sm"
                    src={event.img}
                    alt={event.Name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default RefreshmentPartners;
