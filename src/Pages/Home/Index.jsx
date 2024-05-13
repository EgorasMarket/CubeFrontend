import React from "react";
import Spline from "@splinetool/react-spline";
import "./home.css";
import SafetyCheckIcon from "@mui/icons-material/SafetyCheck";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import SpeedIcon from "@mui/icons-material/Speed";
import PublicIcon from "@mui/icons-material/Public";
import Grid from "./Grid";
function Home() {
  return (
    <div className="Home_div">
      <section className="Home_div_section1">
        <div className="custom_container">
          <div className="Home_div_section1_conts">
            <div className="Home_div_section1_area">
              <div className="Home_div_section1_area_1">
                <div className="Home_div_section1_area_1_title">
                  Move Your
                  <span className="Home_div_section1_area_1_title_span">
                    {" "}
                    Money
                  </span>
                  <br /> Without Borders.
                </div>
                <div className="Home_div_section1_area_1_para">
                  Experience seamless money transfers. Send and receive funds
                  globally with ease, regardless of location, occupation, or
                  income level.
                </div>
                <button className="Home_div_section1_area_1_btn">
                  Get started
                </button>
              </div>
              <div className="Home_div_section1_area_2">
                {" "}
                <Spline
                  scene="https://prod.spline.design/VNzUdteCzQL-qkW9/scene.splinecode"
                  className="home_div_section1_area_2_spline_scene"
                />
                <img
                  src="/img/bg_blur.png"
                  alt=""
                  className="Home_div_section1_area_2_img"
                />
              </div>
            </div>
            {/* <div className="Home_div_section1_conts_companies">
              <div className="Home_div_section1_conts_companies_title">
                AS SEEN ON
              </div>
              <div className="Home_div_section1_conts_companies_divs">
                <img
                  src="/img/tech_crunch_img.svg"
                  alt=""
                  className="Home_div_section1_conts_companies_divs_img"
                />
                <div className="Home_div_section1_conts_companies_divs_divider"></div>
                <img
                  src="/img/tech_crunch_img.svg"
                  alt=""
                  className="Home_div_section1_conts_companies_divs_img"
                />
                <div className="Home_div_section1_conts_companies_divs_divider"></div>
                <img
                  src="/img/tech_crunch_img.svg"
                  alt=""
                  className="Home_div_section1_conts_companies_divs_img"
                />
                <div className="Home_div_section1_conts_companies_divs_divider"></div>
                <img
                  src="/img/tech_crunch_img.svg"
                  alt=""
                  className="Home_div_section1_conts_companies_divs_img"
                />
              </div>
            </div> */}
          </div>
        </div>
        {/* <Grid /> */}

        <img src="/img/grains_ellipse.png" alt="" className="grains_ellipse" />
        {/* <img src="/img/bg_shape.png" alt="" className="hero_bg_shape" /> */}
      </section>
      {/* ======== */}
      {/* ======== */}
      {/* ======== */}
      {/* ======== */}
      {/* ======== */}
      {/* ======== */}
      {/* ======== */}
      {/* ======== */}
      <section className="Home_div_section2">
        <div className="custom_container">
          <div className="Home_div_section2_area">
            <div className="Home_div_section2_area_1">
              <div className="Home_div_section2_area_1_cont1">
                <AccessibilityIcon className="Home_div_section2_area_1_cont1_icon" />
                <div className="Home_div_section2_area_1_cont1_title">
                  Inclusive Accessibility
                </div>
                <div className="Home_div_section2_area_1_cont1_para">
                  Anyone with a basic smartphone and data connection can utilize
                  the Cube payment system, promoting financial inclusion for
                  all.
                </div>
              </div>
              <div className="Home_div_section2_area_1_cont1">
                <SafetyCheckIcon className="Home_div_section2_area_1_cont1_icon" />
                <div className="Home_div_section2_area_1_cont1_title">
                  Stable Reliability
                </div>
                <div className="Home_div_section2_area_1_cont1_para">
                  Cube Coins are backed by a secure reserve of liquid assets,
                  including cash and highly-tradable, short-term government
                  securities, ensuring stability and peace of mind.
                </div>
              </div>
              <div className="Home_div_section2_area_1_cont1">
                <SpeedIcon className="Home_div_section2_area_1_cont1_icon" />
                <div className="Home_div_section2_area_1_cont1_title">
                  Effortless Speed
                </div>
                <div className="Home_div_section2_area_1_cont1_para">
                  Cube transactions are designed for swift and convenient money
                  transfer and spending, regardless of location.
                </div>
              </div>
              <div className="Home_div_section2_area_1_cont1">
                <PublicIcon className="Home_div_section2_area_1_cont1_icon" />
                <div className="Home_div_section2_area_1_cont1_title">
                  Global Connectivity
                </div>
                <div className="Home_div_section2_area_1_cont1_para">
                  The Cube payment system fosters a more interconnected and
                  accessible global financial landscape.
                </div>
              </div>
            </div>
            <div className="Home_div_section2_area_2">
              <div className="Home_div_section2_area_2_title">
                The cube payment system is for everyone.
              </div>
              <div className="Home_div_section2_area_2_title_para1">
                We're here to help people solve their biggest problems, starting
                with money.
              </div>
              <div className="Home_div_section2_area_2_title_para2">
                We envision a world where sending money internationally is as
                effortless and inexpensive as sending a message, empowering
                everyone to participate in a connected financial ecosystem.
              </div>
              <button className="Home_div_section2_area_2_btn">
                Get started
              </button>
            </div>
          </div>
        </div>
        <img src="/img/grains_ellipse.png" alt="" className="grains_ellipse" />
      </section>
      {/* ======== */}
      {/* ======== */}
      {/* ======== */}
      {/* ======== */}
      {/* ======== */}
      {/* ======== */}
      {/* ======== */}
      <section className="Home_div_section3">
        <div className="custom_container">
          <div className="Home_div_section3_area">
            <div className="Home_div_section3_area_1">
              <div className="Home_div_section3_area_1_title">
                African financial infrastructure with global ambitions
              </div>
              <div className="Home_div_section3_area_1_para">
                Experience seamless money transfers. Send and receive funds
                globally with ease, regardless of location, occupation, or
                income level.
              </div>
              <button className="Home_div_section3_area_1_btn">
                Get started
              </button>
            </div>
            <div className="Home_div_section3_area_2">
              <img
                src="/img/phones_bg.png"
                alt=""
                className="Home_div_section3_area_2_img"
              />
            </div>
            <img
              src="/img/grains_ellipse.png"
              alt=""
              className="grains_ellipse"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
