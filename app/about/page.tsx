import getQueryClient from "@/lib/get-query-client";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { Users } from "./Users";
import axios from "axios";
import { request } from "../../lib/axios";

export async function getUser(name: string) {
  const user = await request({
    url: `${name}`,
    method: "GET",
    jwt: false,
  });
  return user
}
export default async function About() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["user"],
    queryFn: () => getUser("todos"),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Users />
    </HydrationBoundary>
  );
}
