import { LayoutDashboard, FileBarChart, Settings, Users } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, active: true },
    { name: "Employees", icon: Users, active: false },
    { name: "Reports", icon: FileBarChart, active: false },
    { name: "Settings", icon: Settings, active: false },
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-20 lg:hidden" onClick={onClose}></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed bg-surface inset-y-0 left-0 z-30 w-72 shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 h-[93vh] ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col ">
          <div className="p-2 bg-info justify-center items-center flex text-4xl">
            Resource Portal
          </div>
          <nav className="mt-5 flex-1 px-2 space-y-1">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className={`group flex items-center px-2 py-2 text-lg font-medium rounded-md transition-colors`}
              >
                <item.icon
                  className={`mr-3 flex-shrink-0 h-5 w-5 ${
                    item.active
                      ? "text-blue-500 dark:text-blue-300"
                      : "text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300"
                  }`}
                />
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};
