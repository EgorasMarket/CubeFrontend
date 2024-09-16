import { useQueryClient } from "@tanstack/react-query";
import React from "react";

const useGetUserInfo = () => {
  const queryClient = useQueryClient();
  return <div>useGetUserInfo</div>;
};

export default useGetUserInfo;
