import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import player from "../player";

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let moves: Square[] = []
        let direction = this.player === player.WHITE ? 1 : -1;

        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                if (board.board[i][j] === this) {
                    moves.push(Square.at(i + direction, j));
                }
            }
        }

        return moves;
    }
}
