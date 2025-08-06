export const StatusBadge = ({ isActive }: { isActive: boolean }) => {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
        isActive
          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
          : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
      }`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
          isActive ? "bg-green-400" : "bg-red-400"
        }`}
      ></span>
      {isActive ? "Active" : "Inactive"}
    </span>
  );
};
