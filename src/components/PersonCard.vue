<script setup lang="ts">
import books from '../bookdata.ts'
</script>

<template>
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(book, index) in books" :key="index">
          <td>{{ book.title }}</td>
          <td>{{ book.author }}</td>
          <td><img :src="book.img_url" :alt="book.title" class="book-image" /></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.table-container {
  display: flex;
  justify-content: center;
  padding: 20px;
}

table {
  width: 100%;
  max-width: 1000px;
  border-collapse: collapse;
  text-align: left;
}

th,
td {
  padding: 10px;
  border: 1px solid #ddd;
}

th {
  background-color: #f4f4f4;
  font-weight: bold;
}

.book-image {
  width: 50px;
  height: auto;
  border-radius: 5px;
}
</style>
