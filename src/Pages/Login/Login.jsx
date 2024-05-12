import React, { useEffect, useState } from "react";
import "../Signup/signupLogin.css";
import ScaleLoader from "react-spinners/ScaleLoader";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { LOGIN, REGISTER } from "../../Services/auth.services";
import { useMutation, useQueryClient } from "@tanstack/react-query";

// dummySelectData;
const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [userPin, setUserPin] = useState(!null);
  const [isLoading, setIsLoading] = useState(false);
  const [disable, setDisable] = useState(true);
  const [success, setSuccess] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [errorTxt, setErrorTxt] = useState("");
  const [pinModal, setPinModal] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpDisable, setOtpDisable] = useState(false);
  const [otpLoading, setOtpLoading] = useState(false);
  const [otpModal, setOtpModal] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const queryClient = useQueryClient();

  const changeInputData = (e) => {
    const { value, id } = e.target;

    setValues({
      ...values,

      [id]: value,
    });
  };
  const { mutate, isError, error, isPending } = useMutation({
    mutationKey: "login",
    mutationFn: async (values) => {
      const res = await LOGIN(values);
      return res;
    },
    onSuccess: async (data) => {
      console.log(data, "alal");
      queryClient.setQueryData("login", data.data.user);
      localStorage.setItem("x-token", data?.data?.token);
      localStorage.setItem("user-info", JSON.stringify(data?.data?.user));
      console.log(queryClient.getQueryData("login"));
    },
  });

  const login = async () => {
    console.log("april");
    await mutate(values);
  };
  return (
    <div className="signup_div">
      <section className="signup_div_section">
        <div className="custom_container">
          <div className="signup_div_section_div">
            <div className="signup_div_section_div_title">Welcome Back</div>

            <div className="signup_div_section_div_container_form">
              <label
                htmlFor="email"
                className="signup_div_section_div_container_form_label"
              >
                *Email Address: {isPending ? "pending" : "not pending"}
              </label>
              <input
                type="email"
                id="email"
                onChange={changeInputData}
                value={values.email}
                name="email"
                className="signup_div_section_div_container_form_input"
                autoComplete="off"
              />
              {/* ============ */}
              {/* ============ */}
              {/* ============ */}
              {/* ============ */}
              {/* ============ */}
              <label
                htmlFor="password"
                className="signup_div_section_div_container_form_label"
              >
                *Password:
              </label>
              <div className="password_div">
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  name="password"
                  onChange={changeInputData}
                  className="signup_div_section_div_container_form_input_pasowrd"
                  autoComplete="off"
                  value={values.password}
                />
                {passwordVisible ? (
                  <VisibilityOffIcon
                    onClick={togglePasswordVisibility}
                    className="otp_modal_container_body_icon2"
                  />
                ) : (
                  <VisibilityIcon
                    onClick={togglePasswordVisibility}
                    className="otp_modal_container_body_icon2"
                  />
                )}
              </div>

              {/* ============ */}
              {/* ============ */}
              {/* ============ */}
              {/* ============ */}
              {/* ============ */}
              <div className="forgot_password_link_div">
                <div className="forgot_password_link_div_1">
                  <input type="checkbox" id="checkbox-1" name="checkbox" />
                  <label
                    for="checkbox-1"
                    className="checkBox_agree_div_body_label"
                  >
                    <div className="checkBox_agree_div_body_txt">
                      Remember me
                    </div>
                  </label>
                </div>
                {/* <div className="forgot_password_link_div_2">
                  <a
                    className="forgot_password_link_div_2_link"
                    href="/forgotpassword"
                  >
                    Forgot Password?{" "}
                  </a>
                </div> */}
              </div>
              {/* ============ */}
              {/* ============ */}
              {/* ============ */}
              {/* ============ */}
              {/* ============ */}
              <button
                className="signup_div_section_div_container_form_btn"
                onClick={login}
                // disabled={disable}
              >
                {isLoading ? (
                  <>
                    <ScaleLoader color="#446f59" height={20} />
                  </>
                ) : (
                  " Login"
                )}
              </button>
            </div>

            <div className="signup_div_section_div_para">
              Don't have an account?{"   "}
              <a href="/signup" className="signup_div_section_div_para_link">
                Signup
              </a>
            </div>
          </div>
        </div>
        {/* <div class="background_gradient-parent">
          <div class="background_gradient"></div>
        </div> */}
        {/* <img
          src="/img/dark_home_sec_bg.svg"
          alt=""
          className="home_div_section1_bg"
        /> */}
        <img src="/img/login_bg.jpeg" alt="" className="signup_div_bg" />
      </section>
    </div>
  );
};

export default Login;
