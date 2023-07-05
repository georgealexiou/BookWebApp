import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeScreen } from "./features/HomeScreen/HomeScreen";
import { reduxStore } from "./store";

const App = () => {
  return (
    <Provider store={reduxStore}>
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </Provider>
  );
};

export default App;
