<script setup>
import Link from '../../components/Link.vue';
import Producto from '../../components/Producto.vue'
import  { useProductsStore } from '../../stores/products'

const products = useProductsStore()

</script>
<template>
   <div>
    <Link to="new-product">Nuevo producto
    </Link>
    <h1  class="text-4xl font-black my-10">Productos </h1>

    <ul role="list"
    class=" grid grid-cols1 md:grid-cols-2 2xl:grid-cols-3 gap-5">
    <Producto 
    v-for="product in products.productsCollection" :key=product.id :product="product"
    
    />
    </ul>
   </div>
</template>