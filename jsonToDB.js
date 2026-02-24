const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");
const data = require("/src/data/product.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

async function importData() {
  const collectionProducts = db.collection("products");
  const collectionSuppliers = db.collection("suppliers");
  
  for (const product of data) {
    await collectionProducts.add(product);
    console.log("Added:", product.name);
  }

  for (const supplier of data) {
    await collectionSuppliers.add(supplier);
    console.log("Added:", supplier.name);
  }

  console.log("Import selesai 🚀");
}

importData();