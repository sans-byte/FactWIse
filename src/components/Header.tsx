import { useTheme } from "../hooks/useTheme";
import { Download, Moon, Sun } from "lucide-react";
import { Menu } from "lucide-react";

interface Props {
  onMenuClick: () => void;
}

function Header({ onMenuClick }: Props) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div>
      <div className="w-screen h-16 bg-surface text-foreground shadow flex justify-between items-center max-md:p-2">
        <Menu onClick={onMenuClick} className="ml-2 cursor-pointer md:hidden" />
        <div className="container mx-auto flex justify-between items-center h-full">
          <h1 className="text-3xl max-md:invisible">FactWise</h1>
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
