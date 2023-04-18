<script setup>
import Board from "./components/Board.vue";
import Sidebar from "./components/Sidebar.vue";
</script>

<template>
  <main>
    <Board />
    <Sidebar />
  </main>
</template>

<style scoped>
main {
  padding: 2vh;
  display: grid;
  grid-template-columns: minmax(600px, 96vh) minmax(200px, 33vw);
  grid-template-rows: 1fr;
  gap: 1rem;
  justify-content: center;
  margin: 0 auto;
  aspect-ratio: 4/2.645;
}

@media (max-width: 1200px) {
  main {
    grid-template-columns: 1fr;
    aspect-ratio: initial;
    gap: 4rem;
  }
}
</style>
