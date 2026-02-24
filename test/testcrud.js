import { db } from "../firebase.js";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

async function createSupplier() {
  try {
    const docRef = await addDoc(collection(db, "suppliers"), {
      name: "PT Sumber Makmur",
      address: "Madiun",
      phone: "08123456789",
      createdAt: serverTimestamp()
    });

    console.log("Supplier berhasil dibuat dengan ID:", docRef.id);
  } catch (error) {
    console.error("Error:", error);
  }
}

async function createOrder() {
  try {
    const docRef = await addDoc(collection(db, "orders"), {
      supplierId: "sup_1",
      supplierName: "Tk. Haji Harat",
      userId: "us1",
      orderDate: "2026-02-01",
      totalAmount: 1000000,
      salesBy: "John Sales",
      month: "2026-02",
      createdAt: serverTimestamp(),
      items : 
      [
        {
          productId: "prod_1",
          productName: "Laptop",
          qty: 2,
          price: 500000
        }
      ]
    });

    const docRef1 = await addDoc(collection(db, "orders"), {
      supplierId: "sup_1",
      supplierName: "Tk. Haji Harat",
      userId: "us1",
      orderDate: "2026-02-02",
      totalAmount: 1025000,
      salesBy: "John Sales",
      month: "2026-02",
      createdAt: serverTimestamp(),
      items : 
      [
        {
          productId: "prod_1",
          productName: "Laptop",
          qty: 2,
          price: 500000
        },
        {
          productId: "prod_2",
          productName: "Mouse",
          qty: 2,
          price: 12500
        }
      ]
    });

    const docRef2 = await addDoc(collection(db, "orders"), {
      supplierId: "sup_2",
      supplierName: "Tk. Zona Jaya",
      userId: "us1",
      orderDate: "2026-02-03",
      totalAmount: 25000,
      salesBy: "John Sales",
      month: "2026-02",
      createdAt: serverTimestamp(),
      items : 
      [
        {
          productId: "prod_2",
          productName: "Mouse",
          qty: 2,
          price: 12500
        }
      ]
    });

    const docRef3 = await addDoc(collection(db, "orders"), {
      supplierId: "sup_1",
      supplierName: "Tk. Haji Harat",
      userId: "us1",
      orderDate: "2026-01-01",
      totalAmount: 1025000,
      salesBy: "John Sales",
      month: "2026-01",
      createdAt: serverTimestamp(),
      items : 
      [
        {
          productId: "prod_1",
          productName: "Laptop",
          qty: 2,
          price: 500000
        },
        {
          productId: "prod_2",
          productName: "Mouse",
          qty: 2,
          price: 12500
        }
      ]
    });

    const docRef4 = await addDoc(collection(db, "orders"), {
      supplierId: "sup_2",
      supplierName: "Tk. Zona Jaya",
      userId: "us1",
      orderDate: "2026-01-03",
      totalAmount: 25000,
      salesBy: "John Sales",
      month: "2026-01",
      createdAt: serverTimestamp(),
      items : 
      [
        {
          productId: "prod_2",
          productName: "Mouse",
          qty: 2,
          price: 12500
        }
      ]
    });

    console.log("Order berhasil dibuat dengan ID:", docRef.id);
    console.log("Order berhasil dibuat dengan ID:", docRef1.id);
    console.log("Order berhasil dibuat dengan ID:", docRef2.id);
    console.log("Order berhasil dibuat dengan ID:", docRef3.id);
    console.log("Order berhasil dibuat dengan ID:", docRef4.id);
  } catch (error) {
    console.error("Error:", error);
  }
}``

createOrder();
// createSupplier();
