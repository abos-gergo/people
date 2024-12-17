<template>
    <div v-if="person">
        <h2>{{ person.first_name }} {{ person.last_name }}</h2>
        <p>{{ person.email }}</p>
        <img :src="person.avatar" alt="Avatar" class="avatar" />
    </div>
    <div v-else>
        <h1>No ID was given.</h1>
    </div>
</template>

<script setup>
const props = defineProps({
    id: {
        type: [String, Number],
        required: true
    }
});
import { computed } from 'vue';
import peopleData from '../peopledata';

const person = computed(() => peopleData.find(p => p.id == props.id))
</script>

<style scoped>
div {
    width: 300px;
    margin: auto;
}

h2 {
    text-align: center;
    margin-bottom: 0;
}

p {
    text-align: center;
    margin-top: 0;
    color: gray;
}

.avatar {
    width: 300px;
    height: 300px;
}
</style>
