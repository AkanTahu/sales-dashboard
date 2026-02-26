import { useEffect, useState } from "react";
import { getLastUpdate } from "@/services/serviceOrders";

export default function Sidebar() {
  const [lastUpdate, setLastUpdate] = useState(null);

  useEffect(() => {
    getLastUpdate().then(data => {
      setLastUpdate(data[0]?.orderDate);
    });
  }, []);

  return (
    <div className="w-64 bg-white border-r min-h-screen p-6 space-y-6">
      <h1 className="text-xl font-bold">Gudang Grosiran Samarinda</h1>

      <nav className="space-y-4 text-sm">
        <p className="font-semibold">Dashboard</p>
        <p className="text-muted-foreground hover:text-black cursor-pointer">
          Supplier
        </p>
        <p className="text-muted-foreground hover:text-black cursor-pointer">
          Orders
        </p>
        <p className="text-muted-foreground hover:text-black cursor-pointer">
          Product
        </p>
        <p className="text-muted-foreground hover:text-black cursor-pointer">
          About
        </p>
        <p className="text-muted-foreground text-xs">
          Last update: {lastUpdate || "Loading..."}
        </p>
      </nav>
    </div>
  );
}