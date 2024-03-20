"use client"
import { useQuery } from "@tanstack/react-query"
import React from 'react'

const todos = ( {users} : any) => {
  async function getUser() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const users = await response.json();
    return  users
  
  }
    const { data , isLoading , isSuccess , isError , error } = useQuery<any[]>({
        queryKey: ["stream-hydrate-users"],
        queryFn: () => getUser(),
        staleTime: 10 * 1000,
        initialData : users 
      })

      if (isError  || users === false ) {
        return <div>Error loading todos.</div>;
      }


      if ( isSuccess ) {
        return (
          <div>{data?.map((item) => <h2>{item.title}</h2>)}</div>
        )
       
      } 

}

export default todos