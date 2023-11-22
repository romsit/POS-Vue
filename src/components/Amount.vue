<template>
    <div class="flex justify-between p-1">
        <dt class="font-bold">
            <slot name="label"></slot>
        </dt>
        <dd class="text-gray-600">
            <slot></slot>
        </dd>
    </div>    
</template>