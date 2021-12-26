<script setup>
import { ref } from 'vue'
import { setContextStore } from '../stores/context.js'

const index = ref(0)

const handleChange = () => setContextStore('stateId', index.value)
</script>

<template>
    <select v-bind:value="index" v-model="index" v-on:change="handleChange">
        <option value="0" disabled selected>Estado</option>
        <option value="1">São Paulo</option>
        <option value="2">Minas Gerais</option>
        <option value="3">Sergipe</option>
    </select>
</template>