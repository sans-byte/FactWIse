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
        <div
          className="fixed inset-0 z-30 lg:hidden bg-black/40 backdrop-blur-sm"
          onClick={onClose}
        />
      )}
      {/* Sidebar */}
      <div
        className={`fixed bg-surface inset-y-0 left-0 z-30 w-72 shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 rounded-lg mt-1  ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col p-2 text-white pt-7">
          <div className="p-4 bg-info justify-center items-center flex text-2xl font-bold rounded-md">
            Resource Portal
          </div>
          <nav className="mt-5 flex-1 px-2 space-y-1">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className={`group flex items-center px-2 py-2 text-lg font-medium rounded-md transition-colors ${
                  item.active
                    ? "bg-blue-100 text-blue-900 dark:bg-blue-900 dark:text-blue-200"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                }`}
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
