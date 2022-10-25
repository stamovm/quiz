import type { NextPage } from "next";
import { useSession } from "next-auth/react";

const New: NextPage = () => {
  const { data: session } = useSession();
  if (!session) return <h2>Please sign in</h2>;
  return (
    <div className="rounded-md border border-teal-500 p-2">
      <p className="text-xl">Create a new quiz </p>
    </div>
  );
};

export default New;
