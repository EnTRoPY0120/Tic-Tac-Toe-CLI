import { Board } from "./board.js";
import { Player } from "./player.js";

export const startGame = async (board, firstPlayer, secondPlayer) => {
  firstPlayer = new Player(1);
  await firstPlayer.init();
  secondPlayer = new Player(2);
  await secondPlayer.init();
  board = new Board();

  let turn = 0;
  for (let i = 0; i < 9; i++) {
    const inTurnPlayer = (turn % 2) + 1 === 1 ? firstPlayer : secondPlayer;
    await board.place(inTurnPlayer);
    board.print();

    if (board.checkIsWin(inTurnPlayer)) {
      console.log(`${inTurnPlayer.name} won!`);
      return;
    }
    turn++;
  }
  console.log("Draw!");
};
