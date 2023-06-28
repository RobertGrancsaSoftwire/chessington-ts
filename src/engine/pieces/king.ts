import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class King extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let moves: Square[] = []

        const currentSquare = board.findPiece(this);
        moves.push(Square.at(currentSquare.row + 1, currentSquare.col + 1));
        moves.push(Square.at(currentSquare.row - 1, currentSquare.col + 1));
        moves.push(Square.at(currentSquare.row + 1, currentSquare.col - 1));
        moves.push(Square.at(currentSquare.row - 1, currentSquare.col - 1));
        moves.push(Square.at(currentSquare.row, currentSquare.col + 1));
        moves.push(Square.at(currentSquare.row - 1, currentSquare.col));
        moves.push(Square.at(currentSquare.row + 1, currentSquare.col));
        moves.push(Square.at(currentSquare.row, currentSquare.col - 1));

        return moves;
    }
}
