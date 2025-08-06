import { useTheme } from "../hooks/useTheme";
import { Download, Moon, Sun } from "lucide-react";
interface Props {}

function Header({}: Props) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div>
      <div className="w-screen h-16 bg-surface text-foreground shadow">
        <div className="container mx-auto flex justify-between items-center h-full w-full">
          <h1 className="text-3xl">FactWise</h1>
          <div className="flex justify-center items-center gap-6">
            <div>
              <button className="bg-primary text-secondary rounded-md py-2 px-3 flex justify-center items-center gap-2 ">
                <Download /> Export to CSV
              </button>
            </div>
            <div>
              <button className="" onClick={toggleTheme}>
                {isDark ? <Moon /> : <Sun />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
