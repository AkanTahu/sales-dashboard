import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  where,
  getDocs,
  orderBy,
  limit
} from "firebase/firestore";
import { db } from "@/services/firebase";

// ...existing code...
export async function createOrder(payload) {
  const docRef = await addDoc(collection(db, "orders"), {
    ...payload,
    createdAt: serverTimestamp()
  });
  return docRef.id;
}

export async function getLastUpdate() {
  const q = query(
    collection(db, "orders"),
    orderBy("orderDate", "desc"),
    limit(1)
  );
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

export async function getSupplierSalesData(dateFrom, dateTo) {
  try {
    const q = query(collection(db, "orders"));
    const snap = await getDocs(q);
    
    // Aggregate sales by supplier
    const supplierMap = new Map();
    
    snap.docs.forEach(doc => {
      const data = doc.data();
      const { supplierId, supplierName, totalAmount, orderDate } = data;
      
      // Filter by date range if provided
      if (dateFrom && dateTo && orderDate) {
        const orderDateObj = new Date(orderDate);
        const fromDate = new Date(dateFrom);
        const toDate = new Date(dateTo);
        
        // Set time to end of day for toDate to include the entire day
        toDate.setHours(23, 59, 59, 999);
        
        if (orderDateObj < fromDate || orderDateObj > toDate) {
          return; // Skip orders outside date range
        }
      }
      
      if (supplierId && supplierName) {
        if (supplierMap.has(supplierId)) {
          const existing = supplierMap.get(supplierId);
          existing.totalSales += totalAmount || 0;
        } else {
          supplierMap.set(supplierId, {
            supplierId,
            supplierName,
            totalSales: totalAmount || 0
          });
        }
      }
    });
    
    // Convert map to array and sort by totalSales descending
    return Array.from(supplierMap.values()).sort((a, b) => b.totalSales - a.totalSales);
  } catch (error) {
    console.error("Error fetching supplier sales data:", error);
    return [];
  }
}