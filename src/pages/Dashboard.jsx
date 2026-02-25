import MetricCard from "@/components/MetricCard"
import Sidebar from "@/components/Sidebar"
import Header from "@/components/Header"
import DataPicker from "@/components/DataPickerWithRange"

export default function Dashboard() {
  const metrics = [
    {
      title: "Total Revenue this month",
      value: "Rp 12.500.000",
      description: "Trending this month",
      trend: "+12.5%"
    },
    {
      title: "Total Revenue previous month",
      value: "123",
      description: "Down this period",
      trend: "-20%"
    },
    {
      title: "Active Accounts",
      value: "456",
      description: "Strong retention",
      trend: "+5%"
    },
    {
      title: "Growth Rate",
      value: "4.5%",
      description: "Stable performance",
      trend: "+1.2%"
    }
  ]

  return (
    <div className="flex bg-gray-100">
      <Sidebar />

      <div className="flex-1">
        <Header />

        <DataPicker />

        <div className="p-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <MetricCard
              key={index}
              title={metric.title}
              value={metric.value}
              description={metric.description}
              trend={metric.trend}
            />
          ))}
        </div>
      </div>
    </div>
  )
}