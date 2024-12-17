<template>
  <div class="filters">
    <button @click="sortTable('first_name')">
      <p :class="sortingBy === 'first_name' ? (sortingDir === 'asc' ? 'arrow-up' : 'arrow-down') : 'no-arrow'">First
        name
      </p>
    </button>
    <button @click="sortTable('last_name')">
      <p :class="sortingBy === 'last_name' ? (sortingDir === 'asc' ? 'arrow-up' : 'arrow-down') : 'no-arrow'">Last name
      </p>
    </button>
    <button @click="sortTable('id')">
      <p :class="sortingBy === 'id' ? (sortingDir === 'asc' ? 'arrow-up' : 'arrow-down') : 'no-arrow'">ID
      </p>
    </button>
    <button @click="sortTable('email')">
      <p :class="sortingBy === 'email' ? (sortingDir === 'asc' ? 'arrow-up' : 'arrow-down') : 'no-arrow'">Email
      </p>
    </button>
  </div>

  <div class="people-list">
    <PersonCard class="card" v-for="person in sortedPeople" :key="person.id" :person="person"></PersonCard>
  </div>
  <div id="scroll-test">Ez a div csak azért van itt, hogy a scroll visszaállítását tesztelni lehessen.</div>
</template>


<script setup>
import { ref, computed } from 'vue';
import peopleData from '../peopledata';

const people = ref(peopleData);
const sortingBy = ref('');
const sortingDir = ref('asc');

const sortedPeople = computed(() => {
  return people.value.slice().sort((a, b) => {
    const aValue = a[sortingBy.value];
    const bValue = b[sortingBy.value];

    // Handle sorting for different data types (string vs number)
    if (typeof aValue === 'string' && typeof bValue === 'string') {
      // String comparison using localeCompare for case-insensitive sorting
      return sortingDir.value === 'asc'
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    } else if (typeof aValue === 'number' && typeof bValue === 'number') {
      // Numeric comparison
      return sortingDir.value === 'asc' ? aValue - bValue : bValue - aValue;
    }
    return 0;
  });
});

const sortTable = (column) => {
  if (sortingBy.value === column) {
    sortingDir.value = sortingDir.value === 'asc' ? 'desc' : 'asc';
  } else {
    sortingBy.value = column;
    sortingDir.value = 'asc';
  }
};

//Routing
import { useRouter } from 'vue-router'
import PersonCard from '@/components/PersonCard.vue';
const router = useRouter()
const goToUser = (userId) => {
  router.push({ name: 'PersonFull', params: { id: userId } });
}
</script>

<style scoped>
.filters {
  margin: 10px;
  display: flex;
  gap: 10px;
  justify-content: center;
}

.filters button {
  min-width: 150px;
}

.no-arrow::after {
  content: ' -';
  font-size: 16px;
}

.arrow-up::after {
  content: ' ↑';
  font-size: 16px;
}

.arrow-down::after {
  content: ' ↓';
  font-size: 16px;
}

.people-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.card {
  min-width: 300px;
  max-width: 500px;
  flex: 1;
}

#scroll-test {
  margin-top: 100vh;
}
</style>
