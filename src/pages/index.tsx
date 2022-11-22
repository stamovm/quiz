import type { NextPage } from "next";
import { useSession } from "next-auth/react";
// import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  // const hello = trpc.example.hello.useQuery({ text: "from tRPC" });
  const { data: session } = useSession();
  if (!session) return <h2>Please sign in</h2>;
  return (
    <div className="rounded-md border border-teal-500 p-2">
      <p className="text-xl">quizzes</p>
    </div>
  );
};

export default Home;
