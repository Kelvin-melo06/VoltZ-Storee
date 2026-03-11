import { use } from "react";
import "./App.css";
import Header from "./Components/Layout/header/header";
import HomeSections from "./Components/sections/HomeSections.jsx";
import useFadeUp from './hooks/useFadeUp.js'


function App() {
  useFadeUp();
  return (
    <div>
      <Header/>
      <HomeSections  />
    </div>
  );
}

export default App;
