import "./App.css";
import { useState, useMemo } from "react";
import Header from "./components/Header";
import { DashboardStats } from "./components/DashBoardStats";
import { Sidebar } from "./components/Sidebar";
import type { Employee, DashboardStats as StatsType } from "./types/Employee";
import { employeeData } from "./data/employee-data";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [employees, setEmployees] = useState<Employee[]>(employeeData);

  const stats: StatsType = useMemo(() => {
    const activeEmployees = employees.filter((emp) => emp.isActive).length;
    const departments = new Set(employees.map((emp) => emp.department)).size;
    const avgRating =
      employees.reduce((sum, emp) => sum + emp.performanceRating, 0) /
      employees.length;

    return {
      totalEmployees: employees.length,
      activeEmployees,
      departments,
      avgRating,
    };
  }, [employees]);

  return (
    <>
      <div className=""></div>
      <Header onMenuClick={() => setSidebarOpen(true)} />
      <div className="flex h-[calc(100vh-4rem)]">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <main className="flex-1 overflow-hidden">
          <div className="h-full px-6 py-6">
            <div className="max-w-7xl mx-auto h-full flex flex-col">
              <DashboardStats stats={stats} />

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 flex-1 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Employee Directory
                  </h2>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {employees.length} Total Employees
                  </div>
                </div>

                {/* <EmployeeGrid
                  employees={employees}
                  onRowDoubleClick={handleRowDoubleClick}
                  onSelectionChanged={setSelectedEmployees}
                  isDark={isDark}
                /> */}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
