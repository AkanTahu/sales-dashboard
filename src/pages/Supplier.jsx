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

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getSupplierSalesData();
        setSupplierData(data);
      } catch (error) {
        console.error("Error loading supplier data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const supplierColumns = [
    { key: "supplierName", label: "Nama Toko" },
    { key: "totalSales", label: "Total Penjualan" }
  ];

  return (
    <div className="flex bg-gray-100">
      <Sidebar onNavigate={onNavigate} />
      <div className="flex-1">
        <Header />

        <DataPicker />

        {loading ? (
          <div className="p-6 text-center text-gray-600">Loading supplier data...</div>
        ) : (
          <Table data={supplierData} columns={supplierColumns} />
        )}
      </div>
    </div>
  )
}