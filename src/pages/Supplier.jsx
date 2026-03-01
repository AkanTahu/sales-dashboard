import MetricCard from "@/components/MetricCard"
import Sidebar from "@/components/Sidebar"
import Header from "@/components/Header"
import DataPicker from "@/components/DataPickerWithRange"
import Chart from "@/components/ChartAreaLinear"
import BarChart from "@/components/ChartBarLabelCustom"

export default function Supplier({ onNavigate }) {
  return (
    <div className="flex bg-gray-100">
      <Sidebar onNavigate={onNavigate} />
      <div className="flex-1">
        <Header />
      </div>
    </div>
  )
}