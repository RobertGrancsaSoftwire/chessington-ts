import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import player from "../player";

export default class Pawn extends Piece {
    public hasMoved: boolean
    public constructor(player: Player) {
        super(player);
        this.hasMoved = false;
    }

    public getAvailableMoves(board: Board) {
        let moves: Square[] = []
        let direction = this.player === player.WHITE ? 1 : -1;

        const currentSquare = board.findPiece(this);

        moves.push(Square.at(currentSquare.row + direction, currentSquare.col));
        if (!this.hasMoved) {
            moves.push(Square.at(currentSquare.row + direction * 2, currentSquare.col));
        }

        return moves;
    }

    public moveTo(board: Board, newSquare: Square) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
        this.hasMoved = true;
    }
}
