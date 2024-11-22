import React from "react";
import { Link } from "react-router-dom";

import Heading from "../components/common/Heading";
import Button from "../components/common/Button";
import FormInput from "../components/FormInput";

import isValidEmail from "../utils/isValidEmail";
import { useAuthContext } from "../contexts/AuthContext";
import Images from "../components/Images";

const LogInPage: React.FC = () => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const [emailErrors, setEmailErrors] = React.useState<string>("");
  const [formErrors, setFormErrors] = React.useState<string>("");

  const { logIn, loading, errors, checkActiveSession, deleteSessions } =
    useAuthContext();

  const handleLogIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email && !password) {
      setFormErrors("Form input errors");
    }

    if (!isValidEmail(email)) {
      setEmailErrors("Invalid email address");
    }

    try {
      const activeSession = await checkActiveSession();

      if (activeSession) {
        await deleteSessions();
      }

      logIn(email, password);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full h-full lg:flex lg:flex-row-reverse">
      <Images />

      <div className="lg:w-1/2 flex items-center justify-center">
        <main className="w-full max-w-[448px] mx-auto pb-12 lg:pb-0">
          <header>
            <Heading level="h1" className="text-fs-heading-lg text-center">
              Welcome Back
            </Heading>
            <p className="text-fs-body text-center">
              Enter your email and password to access your account.
            </p>
          </header>

          <form
            onSubmit={handleLogIn}
            className="flex flex-col gap-4 mt-8 lg:mt-12"
          >
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
              errors={formErrors}
            />

            <Button type="submit">
              {loading ? "Signing In..." : "Sign In"}
            </Button>
          </form>

          {errors ? (
            <React.Fragment>
              <p className="text-red-clr">{errors}</p>
            </React.Fragment>
          ) : (
            ""
          )}

          <p className="mt-[42px] text-center lg:mt-[58px]">
            Don’t have account?{" "}
            <Link className="underline font-fw-semi-bold" to={"/signup"}>
              Sign Up
            </Link>
          </p>
        </main>
      </div>
    </div>
  );
};

export default LogInPage;
