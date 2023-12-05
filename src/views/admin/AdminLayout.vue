<script setup>
import AdminNav from '../../components/AdminNav.vue'
</script>


<template>
    <AdminNav />
    <div class=" bg-slate-100">
    <div class="pt-32 container mx-auto lg:min-h-screen">
        <RouterView />
    </div></div>
</template>