import { Route, Routes } from "react-router-dom";
import Main from "./pages";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import Logout from "./pages/logout";
import ResearchSafety from "./pages/research-safety";
import Home from "./pages/home";
import { createContext, useReducer, React, useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { reducer, initialState } from "../src/reducer/useReducer";

export const UserContext = createContext();
const Routing = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Main />} />
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/signin" exact element={<Signin />} />
      <Route path="/home" exact element={<Home />} />
      <Route path="/logout" exact element={<Logout />} />
      <Route
        path="/Introduction-to-Research-Safety"
        exact
        element={<ResearchSafety />}
      />
    </Routes>
  );
};
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    localStorage.setItem("STATE", JSON.stringify(state));
  }, [state]);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <Routing />
      </UserContext.Provider>
    </>
  );
}

export default App;
