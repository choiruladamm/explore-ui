import { FC } from "react";

interface MinimalistPageProps {}

const MinimalistPage: FC<MinimalistPageProps> = ({}) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#efefef]">
      <Nav />
      <div className="h-[30rem] w-[30rem] bg-[#e6b938] rounded-full"></div>
    </div>
  );
};

function Nav() {
  return (
    <nav className="fixed z-10 w-full top-0">
      <span>mnlmlst.</span>
    </nav>
  );
}

export default MinimalistPage;
