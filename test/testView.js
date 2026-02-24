import { collection, query, where, getDocs } from "firebase/firestore"
import { db } from "../firebase.js"

export const getThisMonthTotal = async () => {
  const now = new Date()
  const currentMonth = now.toISOString().slice(0, 7) // format: YYYY-MM

  try {
    const q = query(
      collection(db, "orders"),
      where("month", "==", currentMonth)
    )

    const snapshot = await getDocs(q)

    const orders = snapshot.docs.map(doc => doc.data())

    const total = orders.reduce(
      (sum, order) => sum + (order.totalAmount || 0),
      0
    )

    console.log("Total bulan ini:", total)
    return total
  } catch (error) {
    console.error("Error ambil data:", error)
  }
}

getThisMonthTotal();