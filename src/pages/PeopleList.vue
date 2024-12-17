<template>
  <div class="people-list">
    <PersonCard class="card" v-for="person in sortedPeople" :key="person.id" :person="person"></PersonCard>
    <!-- <table>
      <thead>
        <tr>
          <th @click="sortTable('id')">
            ID
            <span v-if="sortingBy === 'id'">
              <i :class="sortingDir === 'asc' ? 'arrow-up' : 'arrow-down'"></i>
            </span>
          </th>
          <th @click="sortTable('avatar')">
            Avatar
          </th>
          <th @click="sortTable('first_name')">
            First Name
            <span v-if="sortingBy === 'first_name'">
              <i :class="sortingDir === 'asc' ? 'arrow-up' : 'arrow-down'"></i>
            </span>
          </th>
          <th @click="sortTable('last_name')">
            Last Name
            <span v-if="sortingBy === 'last_name'">
              <i :class="sortingDir === 'asc' ? 'arrow-up' : 'arrow-down'"></i>
            </span>
          </th>
          <th @click="sortTable('email')">
            Email
            <span v-if="sortingBy === 'email'">
              <i :class="sortingDir === 'asc' ? 'arrow-up' : 'arrow-down'"></i>
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="person in sortedPeople" :key="person.id" @click="goToUser(person.id)">
          <td>{{ person.id }}</td>
          <td>
            <img :src="person.avatar" alt="Avatar" class="avatar" />
          </td>
          <td>{{ person.first_name }}</td>
          <td>{{ person.last_name }}</td>
          <td>{{ person.email }}</td>
        </tr>
      </tbody>
    </table> -->
  </div>
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
    return 0; // If the types do not match or are not comparable
  });
});

const sortTable = (column) => {
  // Toggle sorting direction if the same column is clicked
  if (sortingBy.value === column) {
    sortingDir.value = sortingDir.value === 'asc' ? 'desc' : 'asc';
  } else {
    sortingBy.value = column;
    sortingDir.value = 'asc'; // Default to ascending when a new column is selected
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
/* .people-list {
  max-width: 100%;
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th,
td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
}

th {
  background-color: #f4f4f4;
}

tr:hover {
  background-color: #ddd;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.arrow-up::before {
  content: '↑';
  font-size: 16px;
}

.arrow-down::before {
  content: '↓';
  font-size: 16px;
} */
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
</style>
