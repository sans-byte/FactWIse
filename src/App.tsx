import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import { Sidebar } from "./components/Sidebar";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className=""></div>
      <Header />
      <div className="h-full w-full">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)}/>
      </div>
    </>
  );
}

export default App;
