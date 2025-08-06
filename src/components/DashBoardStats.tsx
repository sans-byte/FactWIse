import { Users, UserCheck, Building2, TrendingUp } from "lucide-react";
import type { DashboardStats as StatsType } from "../types/Employee";

interface DashboardStatsProps {
  stats: StatsType;
}

export const DashboardStats = ({ stats }: DashboardStatsProps) => {
  const statItems = [
    {
      title: "Total Employees",
      value: stats.totalEmployees,
      icon: Users,
      color: "bg-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/50",
      textColor: "text-blue-600 dark:text-blue-400",
    },
    {
      title: "Active Employees",
      value: stats.activeEmployees,
      icon: UserCheck,
      color: "bg-green-500",
      bgColor: "bg-green-50 dark:bg-green-900/50",
      textColor: "text-green-600 dark:text-green-400",
    },
    {
      title: "Departments",
      value: stats.departments,
      icon: Building2,
      color: "bg-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/50",
      textColor: "text-purple-600 dark:text-purple-400",
    },
    {
      title: "Avg Rating",
      value: stats.avgRating.toFixed(1),
      icon: TrendingUp,
      color: "bg-orange-500",
      bgColor: "bg-orange-50 dark:bg-orange-900/50",
      textColor: "text-orange-600 dark:text-orange-400",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {statItems.map((item, index) => (
        <div
          key={index}
          className={`${item.bgColor} rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                {item.title}
              </p>
              <p className={`text-3xl font-bold ${item.textColor}`}>
                {item.value}
              </p>
            </div>
            <div className={`${item.color} p-3 rounded-lg`}>
              <item.icon className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
