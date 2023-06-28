import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import King from "./king";

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

        return moves.filter((move: Square) => {
            if (!(move.row >= 0 && move.row < 8 && move.col >= 0 && move.col < 8)) {
                return false;
            }

            let piece = board.getPiece(move);
            if (piece === undefined) {
                return true;
            }

            return !!piece && piece.player != this.player && !(piece instanceof King);
        });
    }
}
