import React from "react";

import Heading from "../components/common/Heading";
import Button from "../components/common/Button";
import FormInput from "../components/FormInput";

import isValidEmail from "../utils/isValidEmail";
import { useAuthContext } from "../contexts/AuthContext";

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
    <main>
      <header>
        <Heading level="h1">Welcome Back</Heading>
        <p>Enter your email and password to access your account.</p>
      </header>

      <form onSubmit={handleLogIn}>
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

        <Button type="submit">{loading ? "Signing In..." : "Sign In"}</Button>
      </form>

      {errors ? (
        <React.Fragment>
          <p className="text-red-clr">{errors}</p>
        </React.Fragment>
      ) : (
        ""
      )}
    </main>
  );
};

export default LogInPage;
