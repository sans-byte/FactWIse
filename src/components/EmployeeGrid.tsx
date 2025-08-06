import React, { useState, useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import type { ColDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import type { Employee } from "../types/Employee";
import { StatusBadge } from "./StatusBadge";
import { PerformanceRating } from "./PerformanceRating";
import { formatCurrency } from "../utils/exportUtils";

interface EmployeeGridProps {
  employees: Employee[];
  isDark: boolean;
}

export const EmployeeGrid: React.FC<EmployeeGridProps> = ({
  employees,
  isDark,
}) => {
  const [quickFilter, setQuickFilter] = useState("");

  const columnDefs: ColDef[] = useMemo(
    () => [
      {
        field: "id",
        headerName: "Employee ID",
        width: 120,
        pinned: "left",
        checkboxSelection: true,
        headerCheckboxSelection: true,
      },
      {
        field: "firstName",
        headerName: "First Name",
        width: 130,
        cellRenderer: (params: any) => (
          <div className="flex items-center space-x-3 h-full">
            <span className="font-medium">{params.value}</span>
          </div>
        ),
      },
      {
        field: "lastName",
        headerName: "Last Name",
        width: 130,
      },
      {
        field: "email",
        headerName: "Email",
        width: 250,
        cellRenderer: (params: any) => (
          <a
            href={`mailto:${params.value}`}
            className="text-blue-600 dark:text-blue-400 hover:underline"
            title={`Send email to ${params.value}`}
          >
            {params.value}
          </a>
        ),
      },
      {
        field: "department",
        headerName: "Department",
        width: 140,
      },
      {
        field: "position",
        headerName: "Position",
        width: 200,
      },
      {
        field: "location",
        headerName: "Location",
        width: 140,
      },
      {
        field: "hireDate",
        headerName: "Hire Date",
        width: 130,
        cellRenderer: (params: any) => {
          params.value;
        },
      },
      {
        field: "salary",
        headerName: "Salary",
        width: 120,
        cellRenderer: (params: any) => formatCurrency(params.value),
        type: "numericColumn",
      },
      {
        field: "isActive",
        headerName: "Status",
        width: 120,
        cellRenderer: (params: any) => <StatusBadge isActive={params.value} />,
        filter: true,
      },
      {
        field: "performanceRating",
        headerName: "Rating",
        width: 160,
        cellRenderer: (params: any) => (
          <PerformanceRating rating={params.value} />
        ),
        type: "numericColumn",
      },
      {
        field: "skills",
        headerName: "Skills",
        width: 250,
        filterParams: {
          filterOptions: ["contains"],
        },
      },
      {
        field: "manager",
        headerName: "Manager",
        width: 150,
      },
    ],
    []
  );

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
      resizable: true,
      floatingFilter: true,
    }),
    []
  );

  return (
    <div className="h-full flex flex-col">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search employees..."
          value={quickFilter}
          onChange={(e) => setQuickFilter(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
        />
      </div>

      <div
        className={`ag-theme-alpine ${
          isDark ? "ag-theme-alpine-dark" : ""
        } flex-1 min-h-0`}
      >
        <AgGridReact
          rowData={employees}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          quickFilterText={quickFilter}
          rowSelection="multiple"
          animateRows={true}
          pagination={true}
          paginationPageSize={10}
          paginationPageSizeSelector={[10, 20, 50]}
          rowHeight={50}
          theme="legacy"
        />
      </div>
    </div>
  );
};
