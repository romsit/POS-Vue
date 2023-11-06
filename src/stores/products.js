import { computed } from "vue";
import { defineStore } from "pinia";
import { useFirestore } from 'vuefire'
import { collection, addDoc } from 'firebase/firestore'

export const useProductsStore = defineStore("products", () => {

    const db = useFirestore()
  const categories = [
    { id: 1, name: "Sudaderas" },
    { id: 1, name: "Zapatillas" },
    { id: 1, name: "Gafas" },
  ];

  async function createProduct(product) {
    await addDoc(collection(db, 'products'), product)
  }

  const categoryOptions = computed(() => {
    const options = [
      { label: "Seleccione", value: '', attrs: { disabled: true }},
      ...categories.map((category) => ({
        label: category.name,
        value: category.id,
      })),
    ];
    return options;
  });

  return {
    createProduct,
    categoryOptions,
  };
});
