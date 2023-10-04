import { FC } from "react";

interface TestLayoutProps {}

const TestLayout: FC<TestLayoutProps> = ({}) => {
  return (
    <div className="h-screen bg-zinc-900 grid place-items-center">
      <div className="bg-zinc-100 max-w-2xl p-10 rounded-xl">
        <div className="bg-slate-600 h-96 w-40 w rounded-md" />
      </div>
    </div>
  );
};

export default TestLayout;
