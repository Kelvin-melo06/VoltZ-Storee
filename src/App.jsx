import "./App.css";
import Header from "./Components/Layout/header/header";
import HomeSections from "./Components/sections/HomeSections.jsx";


function App() {
  return (
    <div>
      <div className="p-10">
      <h1 className="text-4xl text-blue-500">
        Testando Tailwind
      </h1>
    </div>
      <Header/>
      <HomeSections  />
    </div>
  );
}

export default App;
