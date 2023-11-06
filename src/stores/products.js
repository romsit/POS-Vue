import { computed } from "vue";
import { defineStore } from "pinia";

export const useProductsStore = defineStore("products", () => {
  const categories = [
    { id: 1, name: "Sudaderas" },
    { id: 1, name: "Zapatillas" },
    { id: 1, name: "Gafas" },
  ];

  async function createProduct(product) {
    console.log(product);
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
