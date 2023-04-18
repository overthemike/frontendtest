<script setup>
import useBoard from "../store";
import { ref, onMounted, onUnmounted } from "vue";

const { boardState } = useBoard();

const clicklist = ref(null);

const observer = new MutationObserver(() => {
  clicklist.value.scrollTop = clicklist.value.scrollHeight;
});

onMounted(() => {
  observer.observe(clicklist.value, {
    childList: true,
  });
});

onUnmounted(() => {
  observer.disconnect();
});
</script>

<template>
  <div class="sidebar">
    <h1>Squares Clicked</h1>
    <ol ref="clicklist">
      <li v-for="square in boardState.squaresClicked">{{ square }}</li>
    </ol>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
  color: var(--sidebar-heading-color);
  background: var(--sidebar-heading-bg);
  font: var(--sidebar-heading-font);
  padding: 3rem;
}
.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: left;
  background-color: var(--sidebar-bg);
  border-radius: 4px;
  overflow: hidden;
  color: var(--sidebar-text-color);
  font: var(--sidebar-font);
  max-height: 96vh;
}

.sidebar ol {
  flex-grow: 1;
  padding: 0 4rem;
  overflow: auto;
}

.sidebar li {
  padding: 0.5rem;
}
</style>
