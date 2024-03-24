export async function getUser(name: string) {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
      const user = await res.json();
      //use This when finished the type projects : const projects = await res.json() as Projects[]
      if (!user) throw Error;
      return user;
    } catch (error) {
      console.log(error);
    }
  }