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

        if (currentSquare.row == 7 || currentSquare.row == 0) {
            return moves;
        }

        const oneSquareInFront = Square.at(currentSquare.row + direction, currentSquare.col);
        const pieceOneSquareInFront = board.getPiece(oneSquareInFront);

        if (!!pieceOneSquareInFront && pieceOneSquareInFront.player != board.currentPlayer) {
            moves.push(oneSquareInFront);
        } else if (pieceOneSquareInFront === undefined) {
            moves.push(oneSquareInFront);
        } else {
            return moves;
        }

        if (!this.hasMoved) {
            const twoSquareInFront = Square.at(currentSquare.row + direction * 2, currentSquare.col);
            const pieceTwoSquareInFront = board.getPiece(twoSquareInFront);

            if (!!pieceTwoSquareInFront && pieceTwoSquareInFront.player != board.currentPlayer) {
                moves.push(twoSquareInFront);
            } else if (pieceTwoSquareInFront === undefined) {
                moves.push(twoSquareInFront);
            }
        }

        return moves;
    }

    public moveTo(board: Board, newSquare: Square) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
        this.hasMoved = true;
    }
}
