import "./App.css";
import Router from "./Router";
import Footer from "./components/Footer";
import { createContext,useState } from "react";

export const AppContext = createContext();

function App() {
  const [display, setdisplay] = useState(true);
  return (
    <AppContext.Provider value={{display,setdisplay}}>
      <Router />
    </AppContext.Provider>
  );
}

export default App;
