import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Knight extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let moves: Square[] = []

        const currentSquare = board.findPiece(this);

        moves.push(Square.at(currentSquare.row + 2, currentSquare.col - 1));
        moves.push(Square.at(currentSquare.row + 2, currentSquare.col + 1));
        moves.push(Square.at(currentSquare.row - 2, currentSquare.col - 1));
        moves.push(Square.at(currentSquare.row - 2, currentSquare.col + 1));
        moves.push(Square.at(currentSquare.row + 1, currentSquare.col - 2));
        moves.push(Square.at(currentSquare.row + 1, currentSquare.col + 2));
        moves.push(Square.at(currentSquare.row - 1, currentSquare.col - 2));
        moves.push(Square.at(currentSquare.row - 1, currentSquare.col + 2));

        return moves.filter((e: Square) => e.row >= 0 && e.row < 8 && e.col >= 0 && e.col < 8);
    }
}
