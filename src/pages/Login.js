import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { userLogin } from "../store/actions/userAction";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (data) => {
    dispatch(userLogin(data, history));
  };

  return (
    <div className="min-h-screen flex flex-col justify-start pt-10 px-6 bg-bgclr-ligth-gray-2">
      <div className="max-w-md w-full mx-auto bg-white p-8 border border-gray-300 rounded-lg shadow-lg  ">
        <h2 className="mb-6 text-3xl font-bold text-center text-clr-dark">
          Log In
        </h2>
        <div className="bg-bgclr-ligth-gray-1 p-16  mt-6 rounded-lg shadow-md">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-clr-dark"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Email field cannot be left blank!",
                  },
                })}
                placeholder="Your Email"
                className="w-full p-3 border border-solid bg-bgclr-light border-bgclr-light-gray-1 rounded-lg text-sm focus:outline-none focus:border-bgclr-primary"
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-clr-dark"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                {...register("password", { required: "Parola" })}
                placeholder="Password"
                className="w-full p-3 border border-solid bg-bgclr-light border-bgclr-light-gray-1 rounded-lg text-sm focus:outline-none focus:border-bgclr-primary"
              />
              {errors.password && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="flex w-full px-5 py-3 pr-12 bg-bgclr-dark text-white rounded-lg font-semibold items-center justify-center hover:bg-bgclr-hover focus:outline-none focus:shadow-outline-bgclr-primary"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
