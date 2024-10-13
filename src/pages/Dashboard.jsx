import { NavLink } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="container my-16">
      <h1 className="text-primary text-center text-5xl font-bold">
        Welcome to My Quiz
      </h1>

      <div className="w-full">
        <form action="" className="mx-auto mt-10 w-1/2">
          <p className="text-lg">Number of Question :</p>

          <input
            className="border-primary/50 placeholder-primary/50 text-secondary mx-auto mt-2 w-full rounded-full border-[1.5px] px-5 py-3 text-xs font-medium sm:text-base"
            type="number"
            name="number"
            id="number"
          />

          <p className="mt-4 text-lg">Select Category :</p>
          <div className="border-primary/50 placeholder-primary/50 col-span-2 mt-2 w-full gap-6 rounded-full border-[1.5px] px-5 py-3 text-xs sm:text-base">
            <select
              className="text-secondary mx-auto w-full text-lg font-medium"
              name="category"
              id="category"
            >
              <option>General Knowledge</option>
              <option>Science and Nature</option>
              <option>Computers</option>
            </select>
          </div>
          <p className="mt-4 text-lg">Timer :</p>
          <div className="border-primary/50 placeholder-primary/50 col-span-2 mt-2 grid w-full grid-cols-3 gap-6 rounded-full border-[1.5px] px-5 py-3 text-xs sm:text-base">
            <select
              className="text-secondary mx-auto w-full text-lg font-medium"
              name="hours"
              id="hours"
            >
              <option value="">1</option>
              <option value="">1</option>
              <option value="">1</option>
            </select>

            <select
              className="text-secondary mx-auto w-full text-lg font-medium"
              name="minutes"
              id="minutes"
            >
              <option value="">10</option>
              <option value="">10</option>
              <option value="">10</option>
            </select>

            <select
              className="text-secondary mx-auto w-full text-lg font-medium"
              name="seconds"
              id="seconds"
            >
              <option value="">10</option>
              <option value="">10</option>
              <option value="">10</option>
            </select>
          </div>

          <NavLink
            to="/quiz"
            className="bg-primary mt-6 flex w-full items-center justify-center gap-4 rounded-full border-[1.5px] px-5 py-3 font-medium text-white"
          >
            Start Quiz
          </NavLink>
        </form>
      </div>
    </div>
  );
}
