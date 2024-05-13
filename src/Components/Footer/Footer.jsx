/* eslint-disable */
import React, { useState, useEffect } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import "./footer.css";
const Footer = () => {
  const currentPage = window.location.pathname;
  const myArr = currentPage.split("/");
  useEffect(() => {
    if (currentPage === "/app/home") {
      document.getElementById("footer").style.display = "none";
    }
    if (currentPage === "/app/add-money") {
      document.getElementById("footer").style.display = "none";
    }
    if (currentPage === "/app/send-money") {
      document.getElementById("footer").style.display = "none";
    }
    if (currentPage === "/app/all-transactions") {
      document.getElementById("footer").style.display = "none";
    }
    if (currentPage === "/app/user-settings") {
      document.getElementById("footer").style.display = "none";
    }
    if (currentPage === "/app/pay_bills") {
      document.getElementById("footer").style.display = "none";
    }
  });
  return (
    <div className="footerDiv" id="footer">
      <div className="container">
        <div className="footerDivArea">
          <div className="footerDiv1">
            <div className="footerDiv1_area1">
              <div className="footerDiv1_area1_cont1">
                <a href="/" className="header_div_area_1">
                  <div className="header_div_area_1_div1">
                    <img
                      src="/cube_logo_bg.svg"
                      alt=""
                      className="header_div_area_1_img"
                    />

                    <img
                      src="/cube.svg"
                      alt=""
                      className="header_div_area_1_img_anima"
                    />

                    {/* <img
                    src="/cube_logo.svg"
                    alt=""
                    className="header_div_area_1_img"
                  /> */}
                  </div>
                  Cub<span className="header_div_area_1_span">e</span>
                </a>
              </div>
              <div className="footerDiv1_area1_cont2">
                <div className="footerDiv1_area1_cont2_links">
                  <a href="https://twitter.com/usefortapp/">
                    <TwitterIcon className="footerDiv1_area1_cont2_links_link1" />
                  </a>
                  <a href="https://www.linkedin.com/company/fortapp/">
                    <LinkedInIcon className="footerDiv1_area1_cont2_links_link1" />
                  </a>
                  <a href="https://web.facebook.com/usefortapp/">
                    <FacebookIcon className="footerDiv1_area1_cont2_links_link1" />
                  </a>
                </div>
              </div>
            </div>
            <div className="footerDiv1_area2">
              <div className="footerDiv1_area2_cont1">
                <div className="footerDiv1_area2_title">Company</div>
                <div className="footerDiv1_area2_title_subLinks_div">
                  <a
                    href="/privacy"
                    className="footerDiv1_area2_title_subLinks_div_link1"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="/terms-conditions"
                    className="footerDiv1_area2_title_subLinks_div_link1"
                  >
                    Terms & conditions
                  </a>
                  <a
                    href="/about"
                    className="footerDiv1_area2_title_subLinks_div_link1"
                  >
                    About Us
                  </a>
                </div>
              </div>
              <div className="footerDiv1_area2_cont1">
                <div className="footerDiv1_area2_title">Need Help?</div>
                <div className="footerDiv1_area2_title_subLinks_div">
                  <a
                    href="#"
                    className="footerDiv1_area2_title_subLinks_div_link1"
                  >
                    support@cube.co
                  </a>
                </div>
              </div>
            </div>
          </div>

          <hr className="footer_hr" />
          <div className="footer_lastDiv">© 2024 Cube.io</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
