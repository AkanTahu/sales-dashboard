import { useState, useEffect } from "react"
import MetricCard from "@/components/MetricCard"
import Sidebar from "@/components/Sidebar"
import Header from "@/components/Header"
import Table from "@/components/Table"
import DataPicker from "@/components/DataPickerWithRange"
import Chart from "@/components/ChartAreaLinear"
import BarChart from "@/components/ChartBarLabelCustom"
import { getSupplierSalesData } from "@/services/serviceOrders"

export default function Supplier({ onNavigate }) {
  const [supplierData, setSupplierData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Get current date and set default to this month (1 to last day of month)
  const now = new Date();
  const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const lastDayOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  
  const [dateRange, setDateRange] = useState({
    from: firstDayOfMonth,
    to: lastDayOfMonth
  });

  const fetchSupplierData = async (from, to) => {
    try {
      setLoading(true);
      const data = await getSupplierSalesData(from, to);
      setSupplierData(data);
    } catch (error) {
      console.error("Error loading supplier data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch data on initial load with default date range
  useEffect(() => {
    fetchSupplierData(dateRange.from, dateRange.to);
  }, []);

  // Fetch data when date range changes
  const handleDateChange = (newDateRange) => {
    setDateRange(newDateRange);
    fetchSupplierData(newDateRange.from, newDateRange.to);
  };

  const supplierColumns = [
    { key: "supplierName", label: "Nama Toko" },
    { key: "totalSales", label: "Total Penjualan" }
  ];

  return (
    <div className="flex bg-gray-100">
      <Sidebar onNavigate={onNavigate} />
      <div className="flex-1">
        <Header />

        <DataPicker value={dateRange} onDateChange={handleDateChange} />

        {loading ? (
          <div className="p-6 text-center text-gray-600">Loading supplier data...</div>
        ) : (
          <Table data={supplierData} columns={supplierColumns} />
        )}
      </div>
    </div>
  )
}