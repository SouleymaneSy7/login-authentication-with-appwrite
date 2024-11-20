import React from "react";

// import Videos from "./components/Videos";
import RouterConfig from "./routes/RoutesConfig";
import { AuthProvider } from "./contexts/AuthContext";

const App: React.FC = () => {
  return (
    <AuthProvider>
      {/* <Videos /> */}
      <RouterConfig />
    </AuthProvider>
  );
};

export default App;
