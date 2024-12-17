<template>
  <div class="person-card" @click="navigateToDetails">
    <img :src="person.avatar" :alt="`${person.first_name} ${person.last_name}`" class="avatar" />
    <div class="person-info">
      <h2>{{ fullName }}</h2>
      <p>{{ person.email }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  person: {
    type: Object,
    required: true,
    validator: (p) =>
      typeof p.id === 'number' &&
      typeof p.email === 'string' &&
      typeof p.first_name === 'string' &&
      typeof p.last_name === 'string' &&
      typeof p.avatar === 'string',
  },
})

const router = useRouter()

const fullName = computed(() => `${props.person.first_name} ${props.person.last_name}`)

function navigateToDetails() {
  router.push({ name: 'PersonFull', params: { id: props.person.id } })
}
</script>

<style scoped>
.person-card {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  transition: box-shadow 0.2s ease;
}

.person-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 1rem;
}

.person-info {
  display: flex;
  flex-direction: column;
}

h2 {
  margin: 0;
  font-size: 1.25rem;
}

p {
  margin: 0.25rem 0 0;
  color: #555;
}
</style>
