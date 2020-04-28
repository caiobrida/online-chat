import React from "react";
import { Provider } from "react-redux";

import configureStore from "./store/configureStore";

import MainRoutes from "./routes";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MainRoutes />
      </div>
    </Provider>
  );
}

export default App;
