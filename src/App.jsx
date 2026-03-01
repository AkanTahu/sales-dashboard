import { useState } from "react"
import Dashboard from "./pages/Dashboard"
import Supplier from "./pages/Supplier"

function App() {
  const [page, setPage] = useState("dashboard")

  switch (page) {
    case "dashboard":
      return <Dashboard onNavigate={setPage} />
    case "supplier":
      return <Supplier onNavigate={setPage} />
    default:
      return <Dashboard onNavigate={setPage} />
  }
}

export default App