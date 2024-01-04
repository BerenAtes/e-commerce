import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AxiosInstance } from "../components/Api/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";
import { faEye, faLock } from "@fortawesome/free-solid-svg-icons";
import { PulseLoader } from "react-spinners";

const mailRegex = new RegExp(/^\S+@\S+\.\S+$/);
const ibanRegex = new RegExp(
  /[A-Z]{2}\d{2} ?\d{4} ?\d{4} ?\d{4} ?\d{4} ?\d{4} ?\d{2}/gm
);
const phoneRegex = new RegExp(/^(\+90)?[0-9]{10}$/);

const Register = () => {
  const {
    register,
    watch,
    getValues,
    reset,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ defaultValues: { role_id: "3" }, mode: "all" });

  const [roles, setRoles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [togglePass, setTogglePass] = useState(false);
  const history = useHistory();
  useEffect(() => {
    AxiosInstance.get("/roles")
      .then((res) => {
        console.log("Role gets", res);
        setRoles(res.data);
      })
      .catch((err) => {
        console.error("Role gets error:", err);
      });
  }, []);
  const submitHandler = async (data) => {
    const formData = {
      name: data.name,
      email: data.email,
      password: data.password,
      role_id: watch("role_id"),
    };
    if (watch("role_id") === "2") {
      formData.store = {
        name: data.name,
        phone: data.phone,
        tax_no: data.tax_no,
        bank_account: data.bank_account,
      };
    }
    await AxiosInstance.post("/signup", formData)
      .then((res) => {
        console.log("Post", res.data.message);
        toast.success(res.data.message);
        history.push("/");
      })
      .catch((err) => {
        console.error("Post error:", err);
        toast.error(err.error);
      });
    console.log("formData:", formData);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="flex flex-col gap-5 items-center border border-5 bg-bgclr-ligth-gray-2 "
    >
      <h1 className="text-[2rem] font-bold text-clr-dark p-[.2rem] rounded-lg m-[.5rem]  ">
        Sign Up
      </h1>
      <div className="flex flex-col gap-5 justify-start items-start ">
        <label className=" font-bold text-clr-dark ">
          Name
          <input
            className="border border-1  rounded-[5px] text-clr-dark ml-[1rem] font-normal pl-[.5rem] "
            type="text"
            {...register("name", {
              required: "Name is required!",
              minLength: {
                value: 3,
                message: "Must be at least three characters long.",
              },
            })}
          />
        </label>
        {errors.name && (
          <p className="text-clr-danger font-bold text-[12px]">
            {errors.name.message}
          </p>
        )}
        <label className=" font-bold text-clr-dark">
          Email:
          <input
            className="border border-1  rounded-[5px] ml-[1rem] font-normal pl-[.5rem]"
            type="email"
            {...register("email", {
              required: "Email is required!",
              pattern: {
                value: mailRegex,
                message: "Must be a valid email address.",
              },
            })}
          />
        </label>
        {errors.email?.message && (
          <p className="text-clr-danger font-bold text-[12px]">
            {errors.email.message}
          </p>
        )}
        <label className=" font-bold text-clr-dark">
          Password:
          <input
            className="border border-1  rounded-[5px] ml-[1rem] font-normal pl-[.5rem]"
            type={toggle ? "text" : "password"}
            {...register("password", {
              required: "Password is required!",
              minLength: {
                value: 6,
                message: "Must be at least 6 characters long.",
              },
            })}
          />
          {toggle ? (
            <FontAwesomeIcon
              icon={faLock}
              onClick={() => setToggle(!toggle)}
              className="text-clr-dark pl-[.5rem]"
            />
          ) : (
            <FontAwesomeIcon
              icon={faEye}
              onClick={() => setToggle(!toggle)}
              className="text-clr-dark pl-[.5rem]"
            />
          )}
        </label>
        {errors.password && (
          <p className="text-clr-danger font-bold text-[12px]">
            {errors.password.message}
          </p>
        )}
        <label className=" font-bold text-clr-dark">
          Confirm Password:
          <input
            className="border border-1  rounded-[5px] ml-[1rem] font-normal pl-[.5rem]"
            type={togglePass ? "text" : "password"}
            {...register("confirmPassword", {
              required: "Password is required!",
              validate: (value) =>
                value === getValues("password") || "Passwords are not matched",
            })}
          />
          {togglePass ? (
            <FontAwesomeIcon
              icon={faLock}
              onClick={() => setTogglePass(!togglePass)}
              className="text-clr-dark pl-[.5rem]"
            />
          ) : (
            <FontAwesomeIcon
              icon={faEye}
              onClick={() => setTogglePass(!togglePass)}
              className="text-clr-dark pl-[.5rem]"
            />
          )}
        </label>
        {errors.confirmPassword && (
          <p className="text-clr-danger font-bold text-[12px]">
            {errors.confirmPassword.message}
          </p>
        )}
        <div>
          <select
            id="role_id"
            {...register("role_id")}
            className="rounded p-[.2rem] font-bold text-clr-dark"
          >
            {roles.map((role, i) => (
              <option key={i} value={role.id}>
                {role.code}
              </option>
            ))}
          </select>
        </div>

        {watch("role_id") === "2" && (
          <>
            <label className=" font-bold text-clr-dark">
              Store Name:
              <input
                className="border border-1  rounded-[5px] ml-[1rem] font-normal pl-[.5rem]"
                type="text"
                id="name"
                {...register("name", {
                  required: "Store name is required!",
                  minLength: {
                    value: 3,
                    message: "Must be at least three characters long.",
                  },
                })}
              />
            </label>
            {errors.name && (
              <p className="font-bold text-clr-danger text-[12px]">
                {errors.name.message}
              </p>
            )}
            <label className=" font-bold text-clr-dark">
              Store Phone:
              <input
                className="border border-1  rounded-[5px] ml-[1rem] font-normal pl-[.5rem]"
                type="tel"
                {...register("phone", {
                  required: "Store phone is required!",
                  pattern: {
                    value: phoneRegex,
                    message: "Must be a valid phone number",
                  },
                })}
              />
            </label>
            {errors.phone && (
              <p className="font-bold text-clr-danger text-[12px]">
                {errors.phone.message}
              </p>
            )}
            <label className=" font-bold text-clr-dark">
              Store Tax ID:
              <input
                className="border border-1  rounded-[5px] ml-[1rem] font-normal pl-[.5rem]"
                type="text"
                {...register("tax_no", {
                  required: "Store Tax ID is required!",
                  pattern: {
                    value: /^T\d{4}V\d{6}$/,
                    message:
                      "Must be a valid tax ID in this format: TXXXXVXXXXXX",
                  },
                })}
              />
            </label>
            {errors.tax_no && (
              <p className="font-bold text-clr-danger text-[12px]">
                {errors.tax_no.message}
              </p>
            )}
            <label className=" font-bold text-clr-dark">
              Store Bank Account:
              <input
                className="border border-1  rounded-[5px] ml-[1rem] font-normal pl-[.5rem]"
                type="text"
                {...register("bank_account", {
                  required: "Store Bank Account is required!",
                  pattern: {
                    value: ibanRegex,
                    message: "Must be a valid store bank account",
                  },
                })}
              />
            </label>
            {errors.bank_account && (
              <p className="font-bold text-clr-danger text-[12px]">
                {errors.bank_account.message}
              </p>
            )}
          </>
        )}
        {!isLoading ? (
          <button
            type="submit"
            disabled={!isValid}
            className={
              !isValid
                ? "bg-clr-dark text-white p-3 rounded-[5px] w-[150px]  mb-[2rem]"
                : " bg-clr-success text-white p-3 rounded-[5px] w-[150px] cursor-pointer mb-[2rem]"
            }
          >
            Sign Up
          </button>
        ) : (
          <>
            <PulseLoader loading={isLoading} />
            <button
              type="submit"
              disabled={isLoading}
              className={" bg-[#23A6F0] text-white p-3 rounded-[5px] w-[150px]"}
            >
              Signing Up
            </button>
          </>
        )}
      </div>
    </form>
  );
};
export default Register;
