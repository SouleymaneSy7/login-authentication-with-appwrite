import React from "react";
import Success from "../components/Success";
import { useAuthContext } from "../contexts/AuthContext";

const SuccessPage: React.FC = () => {
  const { user, signOut } = useAuthContext();

  const handleSignOut = async () => {
    try {
      signOut();
    } catch (error) {
      console.error(error);
    }
  };

  return <Success signOut={handleSignOut} user={user} />;
};

export default SuccessPage;
