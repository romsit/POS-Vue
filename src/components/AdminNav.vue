<script setup>
import Link from './Link.vue'
</script>

<template>
    <header class="px-10 py-5 bg-gray-700 flex justify-between absolute top-0 w-full z-10">
        <div>
            <h1 class="text-3xl font-black text-white">
                POS <span class="text-green-400"> Vue.js </span>

            </h1>
        </div>
        <nav>
            <RouterLink :to="{name: 'products'}" class="rounded text-white font-bold p-2">
                Productos
            </RouterLink>
            <RouterLink :to="{name: 'sales'}" class="rounded text-white font-bold p-2">
                Ventas
            </RouterLink>
            <Link to="shop"> 
                Ir a la tienda
            </Link>
        </nav>
    </header>
</template>