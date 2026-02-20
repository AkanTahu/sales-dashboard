export default function Sidebar() {
  return (
    <div className="w-64 bg-white border-r min-h-screen p-6 space-y-6">
      <h1 className="text-xl font-bold">GG Smd</h1>

      <nav className="space-y-4 text-sm">
        <p className="font-semibold">Dashboard</p>
        <p className="text-muted-foreground hover:text-black cursor-pointer">
          Analytics
        </p>
        <p className="text-muted-foreground hover:text-black cursor-pointer">
          Orders
        </p>
        <p className="text-muted-foreground hover:text-black cursor-pointer">
          Suppliers
        </p>
      </nav>
    </div>
  )
}