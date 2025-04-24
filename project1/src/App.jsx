import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
// import bgimage from "./images/bgimage.jpg";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=' bg-[url("./images/portfoliobg1.jpg")] bg-cover bg-center h-screen'>
      <div className="header bg-[#ffffff30]">
        <Navbar/>
      </div>
      <div className="content"></div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
