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
// ...existing code...