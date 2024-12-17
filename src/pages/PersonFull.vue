<template>
    <button @click="goBack">Go back</button>
    <div>
        <h2>{{ person.first_name }} {{ person.last_name }}</h2>
        <p>{{ person.email }}</p>
        <img :src="person.avatar" alt="Avatar" class="avatar" />
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

const goBack = () => {
    window.history.back();
}
</script>

<style scoped>
button {
    height: 50px;
    width: 150px;
}

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
