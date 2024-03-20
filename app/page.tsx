
import Link from "next/link";
import { Users } from "./about/Users";
import getQueryClient from "@/lib/get-query-client";
import { getUser } from "./about/page";
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';


 export default async function Home() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['user' ],
    queryFn: () => getUser("todos"),
  });


  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          
          <Link href={"/about"}>about</Link>
          <Users />
          
      </div>
    </main>
    </HydrationBoundary>
  );
}
