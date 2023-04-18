import { reactive } from "vue";

const boardState = reactive({
  activeSquare: null,
  squaresClicked: [],
});

export default function useBoard() {
  const setActiveSquare = (square) => {
    boardState.activeSquare = square;
    if (boardState.squaresClicked.at(-1) !== square) {
      boardState.squaresClicked.push(square);
    }
  };

  return { boardState, setActiveSquare };
}
