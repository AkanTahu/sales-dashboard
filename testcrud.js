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

createSupplier();
