import { computed } from "vue";
import { defineStore } from "pinia";
import { useFirestore, useCollection } from "vuefire";
import { collection, addDoc, where, query, limit, orderBy, updateDoc } from "firebase/firestore";

export const useProductsStore = defineStore("products", () => {
  const db = useFirestore();
  const categories = [
    { id: 1, name: "Sudaderas" },
    { id: 1, name: "Zapatillas" },
    { id: 1, name: "Gafas" },
  ];

  const q = query(collection(db, "products"),
  orderBy( 'name', 'asc'));

  const productsCollection = useCollection(q);

  async function createProduct(product) {
    await addDoc(collection(db, "products"), product);
  }

   async function updateProduct(docRef, product) {
    const { image, url, ...values } = product

    if(image.length) {
      await updateDoc(docRef, {
        ...values, 
        image: url.value
      })
    } else {
      await updateDoc(docRef, values)
    }
   }

  const categoryOptions = computed(() => {
    const options = [
      { label: "Seleccione", value: "", attrs: { disabled: true } },
      ...categories.map((category) => ({
        label: category.name,
        value: category.id,
      })),
    ];
    return options;
  });

  return {
    createProduct,
    updateProduct,
    productsCollection,
    categoryOptions,
  };
});
