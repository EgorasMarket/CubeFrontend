const getUserInfo = () => {
  if (!localStorage.getItem("user-info")) {
    return null;
  }

  const user = JSON.parse(localStorage.getItem("user-info"));

  return user;
};

export default getUserInfo;
