/* eslint-disable react/prop-types */
import Bottombar from "../components/section/Bottombar";
import Sidebar from "../components/section/Sidebar";
import Timer from "../components/ui/Timer";

export default function MainLayout({ children }) {
  return (
    <>
      <div className="flex min-h-dvh">
        <Sidebar />
        <div className="flex w-full flex-col">
          <Timer className="top-0" />
          <main className="container mx-auto flex flex-grow flex-col p-8">
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
