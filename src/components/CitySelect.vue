<script setup>
import { computed, onUpdated, ref } from 'vue'
import { getContextStore } from '../stores/context.js'
import { cities } from '../stores/cities.js'

const stateId = getContextStore('stateId')
const cityId = ref(0)

const theCities = computed(() => cities.filter(item => item.state == stateId.value))

onUpdated(() => {
    const selectedCity = theCities.value.some(city => city.id == cityId.value)
    cityId.value = selectedCity ? cityId.value : 0
})
</script>

<template>
    <select v-bind:value="cityId" v-model="cityId">
        <option disabled selected v-bind:value="0">Cidade</option>
        <option v-for="{ id, name } in theCities" v-bind:key="id" v-bind:value="id">
            {{ name }}
        </option>
    </select>
</template>