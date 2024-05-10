import React from "react";
import Spline from "@splinetool/react-spline";
import "./home.css";
import SafetyCheckIcon from "@mui/icons-material/SafetyCheck";
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
                  Inclusive global{" "}
                  <span className="Home_div_section1_area_1_title_span">
                    banking
                  </span>{" "}
                  designed just for you.
                </div>
                <div className="Home_div_section1_area_1_para">
                  Receive, send, exchange, and manage multiple currencies in one
                  app. Open a foreign UK, US, and EU bank account from your
                  phone for free.
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
                <SafetyCheckIcon className="Home_div_section2_area_1_cont1_icon" />
                <div className="Home_div_section2_area_1_cont1_title">
                  Secure & Safe Payments
                </div>
                <div className="Home_div_section2_area_1_cont1_para">
                  By using our platform you are sure of very secure and fast
                  payments within minutes.
                </div>
              </div>
              <div className="Home_div_section2_area_1_cont1">
                <SafetyCheckIcon className="Home_div_section2_area_1_cont1_icon" />
                <div className="Home_div_section2_area_1_cont1_title">
                  Secure & Safe Payments
                </div>
                <div className="Home_div_section2_area_1_cont1_para">
                  By using our platform you are sure of very secure and fast
                  payments within minutes.
                </div>
              </div>
              <div className="Home_div_section2_area_1_cont1">
                <SafetyCheckIcon className="Home_div_section2_area_1_cont1_icon" />
                <div className="Home_div_section2_area_1_cont1_title">
                  Secure & Safe Payments
                </div>
                <div className="Home_div_section2_area_1_cont1_para">
                  By using our platform you are sure of very secure and fast
                  payments within minutes.
                </div>
              </div>
              <div className="Home_div_section2_area_1_cont1">
                <SafetyCheckIcon className="Home_div_section2_area_1_cont1_icon" />
                <div className="Home_div_section2_area_1_cont1_title">
                  Secure & Safe Payments
                </div>
                <div className="Home_div_section2_area_1_cont1_para">
                  By using our platform you are sure of very secure and fast
                  payments within minutes.
                </div>
              </div>
            </div>
            <div className="Home_div_section2_area_2">
              <div className="Home_div_section2_area_2_title">
                Digital banking services, manage your finances better.
              </div>
              <div className="Home_div_section2_area_2_title_para1">
                We're here to help people solve their biggest problems, starting
                with money.
              </div>
              <div className="Home_div_section2_area_2_title_para2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                architecto accusamus expedita et voluptas quidem, autem placeat
                laboriosam.
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
                USD, GBP & EUR bank accounts for free
              </div>
              <div className="Home_div_section3_area_1_para">
                Receive payments from your employers, clients, social media
                platforms, and other businesses directly to your own foreign
                account – without hidden fees
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
