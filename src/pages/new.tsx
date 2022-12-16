import type { NextPage } from "next";
import { useSession } from "next-auth/react";

const Question: React.FC = () => {
  const handleSubmit = () => {
    // Handle
  };

  return (
    <div className="m-2 rounded-md border border-teal-500 p-2">
      <div className="">
        <form onSubmit={handleSubmit}>
          <label>
            Question:
            <input type="text" className="m-2 border border-teal-600" />
          </label>
          <br />
          <label>
            Answers:
            <input type="text" className="m-2 border border-teal-600" />
            <input type="text" className="m-2 border border-teal-600" />
            <input type="text" className="m-2 border border-teal-600" />
            <input type="text" className="m-2 border border-teal-600" />
          </label>
          <br />
        </form>
      </div>
    </div>
  );
};

const New: NextPage = () => {
  const { data: session } = useSession();
  if (!session) return <h2>Please sign in</h2>;
  return (
    <div className="rounded-md border border-teal-500 p-2">
      <p className="ml-2 text-xl">Create a new quiz </p>
      <Question />
      <Question />
      <Question />
    </div>
  );
};

export default New;
