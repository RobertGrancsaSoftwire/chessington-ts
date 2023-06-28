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

        moves = moves.filter((move: Square) => {
            if (!(move.row >= 0 && move.row < 8 && move.col >= 0 && move.col < 8)) {
                return false;
            }

            let piece = board.getPiece(move);
            if (piece === undefined) {
                return true;
            }

            return !!piece && piece.player != this.player && !(piece instanceof King);
        })

        return moves.filter((e: Square) => e.row >= 0 && e.row < 8 && e.col >= 0 && e.col < 8);
    }
}
