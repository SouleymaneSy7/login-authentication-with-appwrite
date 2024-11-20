import React from "react";
import Success from "../components/Success";

const SuccessPage: React.FC = () => {
  return (
    <Success
      signOut={async () => {
        console.log("hello");
      }}
      user={{ name: "souleymane" }}
    />
  );
};

export default SuccessPage;
