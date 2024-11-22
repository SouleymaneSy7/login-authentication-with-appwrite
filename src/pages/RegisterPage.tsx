import React from "react";
import { Link } from "react-router-dom";

import { useAuthContext } from "../contexts/AuthContext";

import Button from "../components/common/Button";
import Heading from "../components/common/Heading";
import FormInput from "../components/FormInput";

import isValidEmail from "../utils/isValidEmail";
import Images from "../components/Images";

const RegisterPage: React.FC = () => {
  const { register, errors, loading, checkActiveSession, deleteSessions } =
    useAuthContext();

  const [fullName, setFullName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const [fullNameErrors, setFullNameErrors] = React.useState<string>("");
  const [emailErrors, setEmailErrors] = React.useState<string>("");
  const [passwordErrors, setPasswordErrors] = React.useState<string>("");

  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setFullNameErrors("");
    setEmailErrors("");
    setPasswordErrors("");

    if (email === "" || password === "") {
      setPasswordErrors("Please fill in all fields");
      return;
    }

    if (fullName.length < 3) {
      setFullNameErrors("Name must be at least 3 characters long.");
    }

    if (!isValidEmail(email)) {
      setEmailErrors("Invalid email address");
    }

    if (password.length < 8) {
      setPasswordErrors("Password must be at least 8 characters long.");
    }

    try {
      const activeSession = await checkActiveSession();

      if (activeSession) {
        await deleteSessions();
      }

      register(email, password, fullName);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Registering Errors ::", error.message);
    }
  };

  return (
    <div className="w-full h-full  lg:flex lg:flex-row-reverse">
      <Images />

      <div className="lg:w-1/2 flex items-center justify-center">
        <main className="w-full max-w-[448px] md:max-w-[530px] mx-auto pb-12 lg:pb-0">
          <header>
            <Heading level="h1" className="text-fs-heading-lg text-center">
              Create An Account
            </Heading>
            <p className="text-center">
              Already have an account?{" "}
              <Link className="underline font-fw-semi-bold " to={"/"}>
                Log In
              </Link>
            </p>
          </header>

          <form
            onSubmit={handleRegister}
            className="flex flex-col gap-4 mt-8 lg:mt-12"
          >
            <FormInput
              ID="full-name-id"
              inputType="text"
              inputLabel="Full Name"
              inputPlaceholder="Enter your full name"
              inputSetter={(event) => setFullName(event.target.value)}
              inputValue={fullName}
              errors={fullNameErrors}
            />

            <FormInput
              ID="email-id"
              inputType="email"
              inputLabel="Email"
              inputPlaceholder="Enter your email"
              inputSetter={(event) => setEmail(event.target.value)}
              inputValue={email}
              errors={emailErrors}
            />

            <FormInput
              ID="password-id"
              inputType="password"
              inputLabel="Password"
              inputPlaceholder="Enter your password"
              inputSetter={(event) => setPassword(event.target.value)}
              inputValue={password}
              errors={passwordErrors}
            />

            <Button type="submit">
              {loading ? "Signing Up..." : "Sign Up"}
            </Button>
          </form>

          {errors ? (
            <React.Fragment>
              <p className="text-red-clr text-fs-errors font-fw-semi-bold">{errors}</p>
            </React.Fragment>
          ) : (
            ""
          )}
        </main>
      </div>
    </div>
  );
};

export default RegisterPage;
