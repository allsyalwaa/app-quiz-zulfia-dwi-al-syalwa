import { NavLink } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <div className="container py-24">
        <div className="flex w-full flex-col items-center justify-center gap-6">
          <h1 className="text-primary text-4xl font-extrabold">My Quiz</h1>

          <div className="border-primary w-1/2 border-[1px]"></div>
          <form className="w-1/2">
            <input
              className="border-primary/50 placeholder-primary/50 mt-4 w-full rounded-full border-[1.5px] px-5 py-3 text-xs sm:text-base"
              type="email"
              placeholder="Email"
              required
            />

            <input
              className="border-primary/50 placeholder-primary/50 mt-4 w-full rounded-full border-[1.5px] px-5 py-3 text-xs sm:text-base"
              type="password"
              placeholder="Password"
              required
            />

            <div className="mt-2 flex justify-end">
              <NavLink to="/" className="text-primary text-xs font-medium">
                Forgot password?
              </NavLink>
            </div>

            <NavLink
              to="/dashboard"
              className="bg-primary mt-6 flex w-full items-center justify-center gap-4 rounded-full border-[1.5px] px-5 py-3 font-medium text-white"
            >
              Log In
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
}
