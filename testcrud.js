import { db } from "./firebase.js";
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
      supplierId: "supplier123",
      supplierName: "PT Sumber Makmur",
      userId: "user456",
      nameUserId: "John Doe",
      orderDate: serverTimestamp(),
      totalAmount: 1000000,
      salesBy: "John Sales",
      createdAt: serverTimestamp(),
      items : 
      [
        {
          productId: "product123",
          productName: "Laptop",
          qty: 2,
          price: 500000
        }
      ]
    });

    console.log("Order berhasil dibuat dengan ID:", docRef.id);
  } catch (error) {
    console.error("Error:", error);
  }
}

createOrder();
// createSupplier();
