import firebaseAdmin from "firebase-admin";
import serviceAccount from "./serviceAccountKey.json" assert { type: "json" };
import products from "./src/data/product.json" assert { type: "json" };
import suppliers from "./src/data/supplier.json" assert { type: "json" };

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
});

const db = firebaseAdmin.firestore();

async function importData() {
  const collectionProducts = db.collection("products");
  const collectionSuppliers = db.collection("suppliers");

  for (const product of products) {
    await collectionProducts.add(product);
    console.log("Added:", product.name);
  }

  for (const supplier of suppliers) {
    await collectionSuppliers.add(supplier);
    console.log("Added:", supplier.name);
  }

  console.log("Import selesai 🚀");
}

importData();