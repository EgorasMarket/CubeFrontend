const getUserInfo = () => {
  if (!localStorage.getItem("user-info")) {
    return {
      email: "nnnnn",
    };
  }

  const user = JSON.parse(localStorage.getItem("user-info"));

  console.log(user);

  return user;
};

export default getUserInfo;
