"use client";

import { useQuery } from "@tanstack/react-query";
import { getUser } from "./page";

export const Users = () => {

  const {
    data,
    isError,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUser("todos"),
  });
  if (isLoading) {
    return <h2>isLoading</h2>;
  }
  if (isError) {
    return <h2>Erorrr</h2>;
  }
  if (isSuccess) {
    return (
      <div>
        Welcome to profile{" "}
        {data?.map((item: any) => {
          return <div>{item.title}</div>;
        })}
        !
      </div>
    );
  }
};
