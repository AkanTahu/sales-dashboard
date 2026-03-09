import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { MoreHorizontalIcon } from "lucide-react"

export default function TableActions({ data = [], columns = [] }) {
  // Default columns untuk supplier sales jika tidak ada props
  const defaultColumns = [
    { key: "supplierName", label: "Nama Toko" },
    { key: "totalSales", label: "Total Penjualan" }
  ];
  
  const displayColumns = columns.length > 0 ? columns : defaultColumns;
  const displayData = data.length > 0 ? data : [];

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0
    }).format(value);
  };

  const renderCell = (item, column) => {
    const value = item[column.key];
    
    // Format currency for totalSales
    if (column.key === "totalSales" && typeof value === "number") {
      return formatCurrency(value);
    }
    
    return value || "-";
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {displayColumns.map((column) => (
            <TableHead 
              key={column.key}
              className={column.key === "totalSales" ? "text-right" : ""}
            >
              {column.label}
            </TableHead>
          ))}
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {displayData.length > 0 ? (
          displayData.map((item, index) => (
            <TableRow key={item.supplierId || index}>
              {displayColumns.map((column) => (
                <TableCell 
                  key={`${index}-${column.key}`}
                  className={column.key === "supplierName" ? "font-medium" : column.key === "totalSales" ? "text-right" : ""}
                >
                  {renderCell(item, column)}
                </TableCell>
              ))}
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="size-8">
                      <MoreHorizontalIcon />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Duplicate</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem variant="destructive">
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={displayColumns.length + 1} className="text-center text-gray-500 py-8">
              No data available
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}
