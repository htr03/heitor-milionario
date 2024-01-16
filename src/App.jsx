import "./App.css";
import MembersBar from "./components/MembersBar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App flex">
      <BrowserRouter>
        <Sidebar />
        <div className="flex-grow"></div>
        <Routes>
          {/* Certifique-se de que o componente Home est importado e definido */}
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<Home />} />
        </Routes>

        <MembersBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
