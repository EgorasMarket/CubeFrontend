import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import CallMadeIcon from "@mui/icons-material/CallMade";
import LoginIcon from "@mui/icons-material/Login";
import "./header.css";
import getUserInfo from "../../helper/userhelper";

const Header = () => {
  const [headerMenu, setHeaderMenu] = useState(false);
  const [fixed, setFixed] = useState(false);
  const ToggleHeaderMenu = () => {
    setHeaderMenu(!headerMenu);
  };
  const handleScroll = () => {
    if (window.scrollY >= 100) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  const linksActive = window.location.pathname;
  const urlArr = linksActive.split("/");
  return (
    <>
      {/* {linksActive === "/event" ? null : (
        <div className="header_partial_div">
          Egochain Mainnet Airdrop is live{" "}
          <a href="/join/event">
            <button className="header_partial_div_btn">Get started</button>
          </a>
        </div>
      )} */}
      {linksActive === "/event" ? null : (
        <div className={fixed ? "header_div" : "header_div_relative"}>
          <div className="custom_container">
            <div className="header_div_area">
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
              <div className="header_div_area_2">
                <a href="#" className="header_div_area_2_link1">
                  About us
                </a>
                {localStorage.getItem("x-token") !== null ? (
                  <>
                    {" "}
                    <a href="/app/home">
                      {" "}
                      <button className="Airdrop_head_btn2">
                        Dashboard
                        <LoginIcon className="Airdrop_head_btn_icon" />
                      </button>
                    </a>
                  </>
                ) : (
                  <>
                    {" "}
                    <a href="/login">
                      {" "}
                      <button className="Airdrop_head_btn2">Login</button>
                    </a>
                    <a href="/register">
                      {" "}
                      <button className="Airdrop_head_btn">Register</button>
                    </a>
                  </>
                )}

                {/* <MenuIcon
                  className="header_div_area_2_menu_icon"
                  onClick={ToggleHeaderMenu}
                /> */}
              </div>
            </div>
          </div>
          {headerMenu ? (
            <div className="headerMenuDiv">
              <div className="headerMenuDiv_cont">
                <div className="headerMenuDiv_cont_1">
                  <CloseIcon
                    className="headerMenuDiv_cont_1_icon"
                    onClick={ToggleHeaderMenu}
                  />
                </div>
                <div className="headerMenuDiv_cont_body">
                  <a href="/wallet" className="headerMenuDiv_cont_body_link1">
                    Ego Wallet
                  </a>
                  <a href="/station" className="headerMenuDiv_cont_body_link1">
                    Ego Station
                  </a>
                  <a
                    href={
                      window.location.protocol === "http:"
                        ? `http://localhost:${window.location.port}/egax/coin/info`
                        : `https://egochain.org/egax/coin/info`
                    }
                    className="headerMenuDiv_cont_body_link1"
                  >
                    EGAX Coin
                  </a>
                  {/* <a
                  href={
                    window.location.protocol === "http:"
                      ? `http://localhost:${window.location.port}/egc/coin/info`
                      : `https://egochain.org/egc/coin/info`
                  }
                  className="headerMenuDiv_cont_body_link1"
                >
                  EGC Coin
                </a> */}
                  <a
                    href={
                      window.location.protocol === "http:"
                        ? `http://localhost:${window.location.port}/about`
                        : `https://egochain.org/about`
                    }
                    className="headerMenuDiv_cont_body_link1"
                  >
                    About
                  </a>
                  <a
                    href={
                      window.location.protocol === "http:"
                        ? `http://localhost:${window.location.port}/whitepaper`
                        : `https://egochain.org/whitepaper`
                    }
                    className="headerMenuDiv_cont_body_link1"
                  >
                    White paper
                  </a>
                  <a
                    href={
                      window.location.protocol === "http:"
                        ? `http://faucet.localhost:${window.location.port}/`
                        : `https://faucet.egochain.org/`
                    }
                    className="headerMenuDiv_cont_body_link1"
                    target="_blank"
                  >
                    {" "}
                    Faucet
                    <CallMadeIcon className="header_div_area_2_link1_icon" />
                  </a>
                  <a
                    href="https://github.com/EgorasMarket"
                    target="_blank"
                    className="headerMenuDiv_cont_body_link1"
                  >
                    {" "}
                    Developer
                    <CallMadeIcon className="header_div_area_2_link1_icon" />
                  </a>
                  <a
                    href="https://egoswap.io"
                    className="headerMenuDiv_cont_body_link1"
                    target="_blank"
                  >
                    {" "}
                    Egoswap
                    <CallMadeIcon className="header_div_area_2_link1_icon" />
                  </a>
                  <a
                    href="https://testnet.egoscan.io/"
                    className="headerMenuDiv_cont_body_link1"
                    target="_blank"
                  >
                    {" "}
                    Explorer
                    <CallMadeIcon className="header_div_area_2_link1_icon" />
                  </a>
                  <a
                    href="https://egodao.org/"
                    className="headerMenuDiv_cont_body_link1"
                    target="_blank"
                  >
                    {" "}
                    Stake
                    <CallMadeIcon className="header_div_area_2_link1_icon" />
                  </a>
                  <a href="/join/event" style={{ width: "100%" }}>
                    <button className="Airdrop_head_btn_mobile">
                      Join Airdrop
                    </button>
                  </a>
                  {/* <div className="headerMenuDiv_cont_body_div">
                <a
                  href="https://play.google.com/store/apps/details?id=io.egox.dex&hl=be&gl=US"
                  target="_blank"
                >
                  <button className="header_div_area_2_btn">
                    Get App{" "}
                    <img
                      src="/img/play_store_icon.png"
                      alt=""
                      className="header_div_area_2_btn_img"
                    />
                  </button>
                </a>
                <button className="header_div_area_2_btn2">
                  <div className="header_div_area_2_btn2_div">
                    Get App <span>coming soon</span>
                  </div>
                  <img
                    src="/img/apple_store_icon.webp"
                    alt=""
                    className="header_div_area_2_btn2_img"
                  />
                </button>
              </div> */}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      )}
    </>
  );
};

export default Header;
