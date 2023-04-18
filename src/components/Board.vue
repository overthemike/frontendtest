<script setup>
import useBoard from "../store";

const letters = "abcdefgh".split("");
const squares = [];

for (let i = 8; i > 0; i--) {
  for (let j = 0; j < 8; j++) {
    squares.push(`${letters[j]}${i}`);
  }
}

const { boardState, setActiveSquare } = useBoard();
</script>

<template>
  <div class="board">
    <div
      v-for="square in squares"
      class="box"
      :class="{ active: boardState.activeSquare === square }"
      :key="square"
      @click="setActiveSquare(square)"
      :id="square"
    ></div>
  </div>
</template>

<style scoped>
.board {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  place-items: stretch;
  aspect-ratio: 1;
  width: 100%;
  max-height: 100vh;
  max-width: 100vh;
  border-radius: 4px;
  overflow: hidden;
}

.box {
  background-color: var(--white-box-color);
  color: var(--white-box-text-color);
  padding: 5px;
  cursor: pointer;
  border: 2px solid transparent;
  position: relative;
  display: grid;
  place-items: center;
  font-size: 1.5rem;
}

.active {
  border: 2px solid var(--active-box-border-color);
  position: relative;
}

.active::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: var(--active-box-background-color);
}

.box:nth-child(-2n + 8),
.box:nth-child(8) ~ .box:nth-child(-2n + 15),
.box:nth-child(16) ~ .box:nth-child(-2n + 24),
.box:nth-child(24) ~ .box:nth-child(-2n + 31),
.box:nth-child(32) ~ .box:nth-child(-2n + 40),
.box:nth-child(40) ~ .box:nth-child(-2n + 47),
.box:nth-child(48) ~ .box:nth-child(-2n + 56),
.box:nth-child(56) ~ .box:nth-child(-2n + 63) {
  background-color: var(--black-box-color);
  color: var(--black-box-text-color);
}

#a8::before {
  content: "8";
  position: absolute;
  color: var(--white-box-text-color);
  top: 5px;
  left: 5px;
}
#a7::before {
  content: "7";
  position: absolute;
  color: var(--black-box-text-color);
  top: 5px;
  left: 5px;
}
#a6::before {
  content: "6";
  position: absolute;
  color: var(--white-box-text-color);
  top: 5px;
  left: 5px;
}
#a5::before {
  content: "5";
  position: absolute;
  color: var(--black-box-text-color);
  top: 5px;
  left: 5px;
}
#a4::before {
  content: "4";
  position: absolute;
  color: var(--white-box-text-color);
  top: 5px;
  left: 5px;
}
#a3::before {
  content: "3";
  position: absolute;
  color: var(--black-box-text-color);
  top: 5px;
  left: 5px;
}
#a2::before {
  content: "2";
  position: absolute;
  color: var(--white-box-text-color);
  top: 5px;
  left: 5px;
}
#a1::before {
  content: "1";
  position: absolute;
  color: var(--black-box-text-color);
  top: 5px;
  left: 5px;
}

#a1::after {
  content: "a";
  position: absolute;
  color: var(--black-box-text-color);
  bottom: 5px;
  right: 5px;
}
#b1::after {
  content: "b";
  position: absolute;
  color: var(--white-box-text-color);
  bottom: 5px;
  right: 5px;
}
#c1::after {
  content: "c";
  position: absolute;
  color: var(--black-box-text-color);
  bottom: 5px;
  right: 5px;
}
#d1::after {
  content: "d";
  position: absolute;
  color: var(--white-box-text-color);
  bottom: 5px;
  right: 5px;
}
#e1::after {
  content: "e";
  position: absolute;
  color: var(--black-box-text-color);
  bottom: 5px;
  right: 5px;
}
#f1::after {
  content: "f";
  position: absolute;
  color: var(--white-box-text-color);
  bottom: 5px;
  right: 5px;
}
#g1::after {
  content: "g";
  position: absolute;
  color: var(--black-box-text-color);
  bottom: 5px;
  right: 5px;
}
#h1::after {
  content: "h";
  position: absolute;
  color: var(--white-box-text-color);
  bottom: 5px;
  right: 5px;
}
</style>
