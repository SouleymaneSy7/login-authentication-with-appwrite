import React from "react";

import RouterConfig from "./routes/RoutesConfig";
import { AuthProvider } from "./contexts/AuthContext";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <RouterConfig />
    </AuthProvider>
  );
};

export default App;
