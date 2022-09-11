import React from "react";
import "./prize.css";
import first from "./assets/first.svg";
import second from "./assets/second.svg";
import third from "./assets/third.svg";
import { Link } from "react-router-dom";
import zilano from "../../assets/Sponsors/Gold/Zilano.png";
import godaddy from "../../assets/Sponsors/Silver/goDaddy.jpg";
import twilio from "../../assets/Sponsors/Silver/twilio.png";
import github from "../../assets/Sponsors/Platinum/github.png";
import img1 from "../../assets/Media Partners logo/rourkelashines.png";
import img2 from "../../assets/Media Partners logo/bhubaneswarbuzz-dark.png";
import img3 from "../../assets/Media Partners logo/bizodisha-logo.png";
import img4 from "../../assets/Media Partners logo/boronrourkela.jpg";
import img5 from "../../assets/Media Partners logo/ODISHA NOW.jpeg";
import img6 from "../../assets/Media Partners logo/Rourkela -360dark.png";
import img7 from "../../assets/Media Partners logo/Rouekela 360 -light.png";


const Prize = () => {
  return (
    <>
      <section className="container" id="Prizes">
        <h2 className="pl-10 text-xl text-white pb-10 pt-10 prize-heading">
          # Hackodisha Winner's
        </h2>

        <div class="pricing-table">
          <div class="ptable-item">
            <div class="ptable-single">
              <div class="ptable-header">
                <div class="ptable-title">
                  <h2>Silver</h2>
                </div>
                <div class="ptable-price">
                  <div className="prize-svg">
                    <img src={second} alt="second" />
                  </div>
                </div>
              </div>
              <div class="ptable-body">
                <div class="ptable-description">
                  <ul>
                    <li>
                      Cash Prize{" "}
                      <span className="cash-list">&#8377;10,000</span>
                    </li>
                    <li>Goodies & Tshirts </li>
                    <li>Vouchers worth $50k </li>
                    <li>QuillBot’s Premium Subscription</li>
                    <li>Food Coupons, domain name etc. </li>
                  </ul>
                </div>
              </div>
              <div class="ptable-footer">
                <div class="ptable-action">
                  {/* <a href="http://hackodisha2022-prizes.surge.sh/">Know more</a> */}
                  <Link to="/prizes">Know More</Link>
                </div>
              </div>
            </div>
          </div>

          <div class="ptable-item featured-item">
            <div class="ptable-single">
              <div class="ptable-header">
                <div class="ptable-title">
                  <h2>Gold</h2>
                </div>
                <div class="ptable-price">
                  <div className="prize-svg">
                    <img src={first} alt="first" />
                  </div>
                </div>
              </div>
              <div class="ptable-body">
                <div class="ptable-description">
                  <ul>
                    <li>
                      Cash Prize{" "}
                      <span className="cash-list"> &#8377;14,000</span>
                    </li>
                    <li>Goodies & Tshirts </li>
                    <li>Vouchers worth $50k </li>
                    <li>QuillBot’s Premium Subscription</li>
                    <li>Food coupons, domain name etc. </li>
                  </ul>
                </div>
              </div>
              <div class="ptable-footer">
                <div class="ptable-action">
                  {/* <a href="http://hackodisha2022-prizes.surge.sh/">Know more</a> */}
                  <Link to="/prizes">Know More</Link>
                </div>
              </div>
            </div>
          </div>

          <div class="ptable-item">
            <div class="ptable-single">
              <div class="ptable-header">
                <div class="ptable-title">
                  <h2>Bronze</h2>
                </div>
                <div class="ptable-price">
                  <div className="prize-svg">
                    <img src={third} alt="third" />
                  </div>
                </div>
              </div>
              <div class="ptable-body">
                <div class="ptable-description">
                  <ul>
                    <li>
                      Cash Prize <span className="cash-list">&#8377;7000</span>
                    </li>
                    <li>Goodies & Tshirts </li>
                    <li>Vouchers worth $50k</li>
                    <li>QuillBot’s Premium Subscription</li>
                    <li>food coupons, domain name</li>
                  </ul>
                </div>
              </div>
              <div class="ptable-footer">
                <div class="ptable-action">
                  {/* <a href="http://hackodisha2022-prizes.surge.sh/">Know more</a> */}
                  <Link to="/prizes">Know More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>



        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg-grid-cols-3">
          <div className="h-[100px]"><img src={img1}/></div>
          <div className="h-[100px]"><img src={img2}/></div>
          <div className="h-[100px]"><img src={img3}/></div>
          <div className="h-[100px]"><img src={img4}/></div>
          <div className="h-[100px]"><img src={img5}/></div>
          <div className="h-[100px]"><img src={img6}/></div>
          <div className="h-[100px]"><img src={img7}/></div>
        </div> */}
          <div className="text-4xl flex text-white justify-center mt-6 mb-8">Media Partners</div>
        <div className="flex justify-center">
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4  pl-10">
          <div className=" flex justify-center w-[200px]"><img src={img1}/></div>
          <div className=" flex justify-center w-[200px]"><img src="https://pbs.twimg.com/profile_images/1277593626063839235/C63OvMXP_400x400.jpg"/></div>
          <div className=" flex justify-center w-[200px]"><img src={img4}/></div>
          <div className=" flex justify-center w-[200px]"><img src={img5}/></div>
          <div className=" flex justify-center w-[200px]"><img src={img6}/></div>
          <div>
          <div className=" flex justify-center w-[200px]"><img src={img7}/></div>
          <div className=" flex justify-center w-[275px] lg:w-[300px]"><img src={img3}/></div>
          </div>
        </div>
        </div>




        <div className="nitr-prizes mt-16">
          <h2 className="pl-10 text-xl text-white pb-10 prize-heading">
            # Only for NIT Rourkela Students
          </h2>

          <div class="pricing-table">
            {/* <div class="ptable-item">
              <div class="ptable-single">
                <div class="ptable-header">
                  <div class="ptable-title">
                    <h2 className="text-[20px]">
                      Overall Runner up NIT Rourkela
                    </h2>
                  </div>
                   <div class="ptable-price">
                  <div className="prize-svg">
                    <img src={second} alt="second" />
                  </div>
                </div> 
                </div>
                <div class="ptable-body">
                  <div class="ptable-description">
                    <ul>
                      <li>
                        Cash Price{" "}
                        <span className="cash-list">&#8377;3000</span>
                      </li>
                      <li>Goodies & Tshirts </li>
                      <li>Vouchers worth $50k </li>
                      <li>Food coupons, Cinecaarnival offer </li>  
                    </ul>
                  </div>
                </div>
              </div>
            </div> */}

            <div class="ptable-item featured-item">
              <div class="ptable-single">
                <div class="ptable-header">
                  <div class="ptable-title">
                    <h2 style={{ fontSize: "24px" }}>
                      Overall Winner NIT Rourkela
                    </h2>
                  </div>
                  {/* <div class="ptable-price">
                  <div className="prize-svg">
                    <img src={first} alt="first" />
                  </div>
                </div> */}
                </div>
                <div class="ptable-body">
                  <div class="ptable-description">
                    <ul>
                      <li>
                        Cash Prize{" "}
                        <span className="cash-list"> &#8377;4000</span>
                      </li>
                      <li>Goodies & Tshirts </li>
                      <li>Vouchers worth $50k </li>
                      <li>QuillBot’s Premium Subscription</li>
                      <li>Food coupons, Cinecaarnival offer, etc. </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="ptable-item">
              <div class="ptable-single">
                <div class="ptable-header">
                  <div class="ptable-title">
                    <h2 style={{ fontSize: "24px" }}>
                      Best Beginner Team NIT Rourkela
                    </h2>
                  </div>
                  {/* <div class="ptable-price">
                  <div className="prize-svg">
                    <img src={third} alt="third" />
                  </div>
                </div> */}
                </div>
                <div class="ptable-body">
                  <div class="ptable-description">
                    <ul>
                      <li>
                        Cash Prize{" "}
                        <span className="cash-list">&#8377;1000</span>
                      </li>
                      <li>Goodies & Tshirts </li>
                      <li>Vouchers worth $50k </li>
                      <li>QuillBot’s Premium Subscription</li>
                      <li>Food coupons, Cinecaarnival offer, etc. </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* <div class="ptable-item featured-item">
              <div class="ptable-single">
                <div class="ptable-header">
                  <div class="ptable-title">
                    <h2 className="text-[20px]">
                      To all NIT Rourkela Participants
                    </h2>
                  </div>
                   <div class="ptable-price">
                  <div className="prize-svg">
                    <img src={first} alt="first" />
                  </div>
                </div> 
                </div>
                <div class="ptable-body">
                  <div class="ptable-description">
                    <ul>
                      <li>Sugarit food coupons</li>
                       <li></li> 
                      <li>free stickers</li>
                      <li>Discount Coupons</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div className="nitr-prizes mt-16">
          <h2 className="pl-10 text-xl text-white pb-10 prize-heading">
            # For All Students
          </h2>

          <div class="pricing-table">
            <div class="ptable-item">
              <div class="ptable-single">
                <div class="ptable-header">
                  <div class="ptable-title">
                    <h2 className="text-[20px]">For All Students</h2>
                  </div>
                  {/* <div class="ptable-price">
                  <div className="prize-svg">
                    <img src={second} alt="second" />
                  </div>
                </div> */}
                </div>
                <div class="ptable-body">
                  <div class="ptable-description">
                    <ul>
                      <li>QuillBot’s Premium Subscription</li>
                      <li> 5-Year free upgrades for everyone else taskade </li>
                      <li> 25% discount no starch press</li>
                      <li> Discount vouchers interview buddy</li>
                      <li>1Password teams</li>
                      <li>90-day extended trial for Balsamiq Cloud</li>
                      <li>Free domains from .xyz</li>
                      <li>20% discount Rosenfeld</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="pl-10 text-xl text-white pb-10 prize-heading">
            # Track Prizes
          </h2>
          <div class="pricing-table">
            <div class="ptable-item">
              <div class="ptable-single">
                <div class="ptable-header">
                  <div class="ptable-title">
                    <a
                      href="https://www.zilano.com/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <img src={godaddy} alt="zilano" />{" "}
                    </a>
                  </div>
                  {/* <div class="ptable-price">
                  <div className="prize-svg">
                    <img src={second} alt="second" />
                  </div>
                </div> */}
                </div>
                <div class="ptable-body">
                  <div class="ptable-description">
                    <ul>
                      <li> Best Domain Name from GoDaddy Registry </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}
            {/*         
        <div class="pricing-table"> */}
            <div class="ptable-item">
              <div class="ptable-single">
                <div class="ptable-header">
                  <div class="ptable-title">
                    <a
                      href="https://www.twilio.com/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <img src={twilio} alt="twilio" />{" "}
                    </a>
                  </div>
                  {/* <div class="ptable-price">
                  <div className="prize-svg">
                    <img src={second} alt="second" />
                  </div>
                </div> */}
                </div>
                <div class="ptable-body">
                  <div class="ptable-description">
                    <ul>
                      <li> "Twilio Swag Box GameGo Console" </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}
            {/*         
        <div class="pricing-table"> */}
            <div class="ptable-item">
              <div class="ptable-single">
                <div class="ptable-header">
                  <div class="ptable-title">
                    <h2 className="text-[20px]">
                      Best Web Monetization Project
                    </h2>
                  </div>
                  {/* <div class="ptable-price">
                  <div className="prize-svg">
                    <img src={second} alt="second" />
                  </div>
                </div> */}
                </div>
                <div class="ptable-body">
                  <div class="ptable-description">
                    <ul>
                      <li>Portable Charger, Coil Pin & $60 Credit</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}
            {/*         
        <div class="pricing-table"> */}
            <div class="ptable-item">
              <div class="ptable-single">
                <div class="ptable-header">
                  <div class="ptable-title">
                    <h2 className="text-[20px]">
                      Best Blockchain Project Using Hedera
                    </h2>
                  </div>
                  {/* <div class="ptable-price">
                  <div className="prize-svg">
                    <img src={second} alt="second" />
                  </div>
                </div> */}
                </div>
                <div class="ptable-body">
                  <div class="ptable-description">
                    <ul>
                      <li> Glorious Modular Compact Mechanical Keyboard </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}
            {/*         
        <div class="pricing-table"> */}
            <div class="ptable-item">
              <div class="ptable-single">
                <div class="ptable-header">
                  <div class="ptable-title">
                    <a
                      href="https://github.com/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <img src={github} alt="github" />{" "}
                    </a>
                  </div>
                  {/* <div class="ptable-price">
                  <div className="prize-svg">
                    <img src={second} alt="second" />
                  </div>
                </div> */}
                </div>
                <div class="ptable-body">
                  <div class="ptable-description">
                    <ul>
                      <li> GitHub Octocat Puzzle & Sticker bundle </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* <div class="ptable-item featured-item">
              <div class="ptable-single">
                <div class="ptable-header">
                  <div class="ptable-title">
                    <h2 className="text-[20px]">Women's Track</h2>
                  </div>
                   <div class="ptable-price">
                  <div className="prize-svg">
                    <img src={first} alt="first" />
                  </div>
                </div> 
                </div>
                <div class="ptable-body">
                  <div class="ptable-description">
                    <ul>
                      <li>
                        Cash Price{" "}
                        <span className="cash-list"> &#8377;3000</span>
                      </li>
                      <li>Hackathon plan 6 months testmail </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div> */}
          </div>

          <h2 className="pl-10 text-xl text-white pb-10 prize-heading">
            # For Girls Only
          </h2>

          <div class="pricing-table">
            <div class="ptable-item">
              <div class="ptable-single">
                <div class="ptable-header">
                  <div class="ptable-title">
                    <a
                      href="https://www.zilano.com/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <img src={zilano} alt="zilano" />{" "}
                    </a>
                  </div>
                  {/* <div class="ptable-price">
                  <div className="prize-svg">
                    <img src={second} alt="second" />
                  </div>
                </div> */}
                </div>
                <div class="ptable-body">
                  <div class="ptable-description">
                    <ul>
                      <li className="inline-block">
                        Overall Winner{" "}
                        <span className="cash-list mr-[1.5px]">
                          {" "}
                          &#8377;1000{" "}
                        </span>{" "}
                        off on all products
                      </li>
                      <li className="inline-block">
                        First Runner Up{" "}
                        <span className="cash-list mr-[1.5px]">
                          {" "}
                          &#8377;500{" "}
                        </span>{" "}
                        off on all products
                      </li>
                      <li className="inline-block">
                        For all participants{" "}
                        <span className="cash-list mr-[1.5px]">
                          {" "}
                          &#8377;300{" "}
                        </span>{" "}
                        off on all products
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>
    </>
  );
};

export default function PrizeFinal() {
  return <Prize />;
}
