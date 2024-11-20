import React from "react";

import Videos from "./components/Videos";
import RouterConfig from "./routes/RoutesConfig";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Videos />
      <RouterConfig />
    </React.Fragment>
  );
};

export default App;
