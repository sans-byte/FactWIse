import "./App.css";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { toggleTheme } = useTheme();

  return (
    <>
      <div className="text-6xl dark:bg-background text-foreground">
        Hello world
      </div>
      <button className="" onClick={toggleTheme}>
        click me
      </button>
    </>
  );
}

export default App;
