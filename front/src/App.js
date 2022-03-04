import "./App.css";
import { useState } from "react";
import MainContext from "./context/MainContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Toolbar from "./comps/Toolbar";
import StartPage from "./Pages/StartPage";
import RegisterUser from "./Pages/RegisterUser";
import About from "./Pages/About";
import Board from "./Pages/Board";
import Logout from "./Pages/Logout";
import Edit from "./Pages/Edit";

function App() {
  const [activePage, setActivePage] = useState("login");
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [toEdit, setToEdit] = useState({
    objName: "",
    selectedObject: {},
  });

  // const [allProducts, setProducts] = useState([]);
  // const [getCart, setCart] = useState([]);

  return (
    <MainContext.Provider
      value={{ activePage, setActivePage, setLoggedIn, loggedIn, user, setUser, toEdit, setToEdit }}
    >
      <BrowserRouter>
        <Toolbar />
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/registeruser" element={<RegisterUser />} />
          <Route path="/board" element={<Board />} />
          <Route path="/about" element={<About />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </MainContext.Provider>
  );
}

export default App;
